# Compound Components + Headless Hooks 실무 가이드

> Next.js 15 App Router + React 프로젝트에서 실제로 사용하는 패턴

---

## 📁 1. 폴더 구조 (현재 프로젝트 기준)

```
src/
  features/                         # ✨ Feature 기반 구조
    activity-list/
      headless/                     # 로직만 있는 훅들
        useActivityFilters.ts       # 필터 상태/로직
        useActivityList.ts          # 리스트 상태/무한스크롤
        useTabState.ts              # 탭 전환 로직
      ui/                           # UI 컴포넌트
        ActivityListLayout/         # Compound 구조
          index.tsx                 # Root 컴포넌트
          context.tsx               # Context + 타입
          ActivityListHeader.tsx    # Sub 컴포넌트
          ActivityListFilters.tsx   # Sub 컴포넌트
          ActivityListBody.tsx      # Sub 컴포넌트
          ...
        TabButton.tsx               # 재사용 컴포넌트
        CategoryButton.tsx
        SortDropdown.tsx
      types.ts                      # Feature 타입 정의
      constants.ts                  # Feature 상수

  screens/                          # 기존 구조 (점진적 제거 예정)
    activities2/
      ...

  shared/                           # 전역 공용
    ui/                             # 재사용 가능한 UI 컴포넌트
      Button.tsx
      Input.tsx
      Modal.tsx
    hooks/                          # 범용 Headless Hooks
      useDisclosure.ts              # 열기/닫기 상태
      useDebounce.ts                # 디바운스
      useIntersection.ts            # 무한스크롤용
    a11y/                           # 접근성 유틸
      FocusTrap.tsx
      RovingTabIndex.tsx
```

### 📌 핵심 원칙

- **`features/xxx/headless/`**: UI 없이 **상태와 로직만** (DOM/window 의존 ❌)
- **`features/xxx/ui/`**: Compound Components (Context로 상태 공유)
- **`shared/`**: 프로젝트 전역에서 재사용

---

## 🎯 2. Headless Hook 작성법

### ✅ 올바른 예시

```ts
// features/activity-list/headless/useActivityFilters.ts
'use client'

import { useState, useCallback } from 'react'

export type FilterState = {
  category: string
  subCategories: string[]
  priceRange: [number, number] | null
  sortBy: 'recommended' | 'popular' | 'price-asc' | 'price-desc'
}

export type FilterActions = {
  setCategory: (category: string) => void
  toggleSubCategory: (sub: string) => void
  setPriceRange: (range: [number, number] | null) => void
  setSortBy: (sort: FilterState['sortBy']) => void
  reset: () => void
}

const initialState: FilterState = {
  category: '전체',
  subCategories: [],
  priceRange: null,
  sortBy: 'recommended',
}

export function useActivityFilters() {
  const [filters, setFilters] = useState<FilterState>(initialState)

  const setCategory = useCallback((category: string) => {
    setFilters((prev) => ({
      ...prev,
      category,
      subCategories: [], // 카테고리 변경 시 하위 초기화
    }))
  }, [])

  const toggleSubCategory = useCallback((sub: string) => {
    setFilters((prev) => ({
      ...prev,
      subCategories: prev.subCategories.includes(sub)
        ? prev.subCategories.filter((s) => s !== sub)
        : [...prev.subCategories, sub],
    }))
  }, [])

  const setPriceRange = useCallback((range: [number, number] | null) => {
    setFilters((prev) => ({ ...prev, priceRange: range }))
  }, [])

  const setSortBy = useCallback((sortBy: FilterState['sortBy']) => {
    setFilters((prev) => ({ ...prev, sortBy }))
  }, [])

  const reset = useCallback(() => {
    setFilters(initialState)
  }, [])

  return {
    filters,
    setCategory,
    toggleSubCategory,
    setPriceRange,
    setSortBy,
    reset,
  }
}
```

### ❌ 나쁜 예시

```ts
// ❌ DOM 조작이 들어있음
export function useBadFilter() {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
    // ❌ Headless Hook에서 DOM 제어 금지!
    document.body.style.overflow = open ? 'auto' : 'hidden'
  }

  return { open, toggle }
}

// ✅ 올바른 방법: UI 컴포넌트에서 처리
function FilterModal() {
  const { open, onToggle } = useDisclosure()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return <Modal open={open} onToggle={onToggle} />
}
```

---

## 🧩 3. Compound Components 패턴

### Context 타입 안전성 확보

```tsx
// features/activity-list/ui/ActivityListLayout/context.tsx
'use client'

import { createContext, useContext } from 'react'
import type { FilterState, FilterActions } from '../../headless/useActivityFilters'

type ActivityListContextValue = {
  filters: FilterState
  actions: FilterActions
  isLoading: boolean
}

const ActivityListContext = createContext<ActivityListContextValue | undefined>(
  undefined
)

export function useActivityListContext() {
  const context = useContext(ActivityListContext)
  if (context === undefined) {
    throw new Error(
      'useActivityListContext must be used within ActivityListLayout.Root'
    )
  }
  return context
}

export const ActivityListProvider = ActivityListContext.Provider
```

### Root + Sub 컴포넌트 구조

```tsx
// features/activity-list/ui/ActivityListLayout/index.tsx
'use client'

import { useActivityFilters } from '../../headless/useActivityFilters'
import { ActivityListProvider } from './context'
import ActivityListHeader from './ActivityListHeader'
import ActivityListFilters from './ActivityListFilters'
import ActivityListBody from './ActivityListBody'

type RootProps = {
  children: React.ReactNode
  initialData?: any
}

function Root({ children, initialData }: RootProps) {
  const { filters, ...actions } = useActivityFilters()
  const [isLoading, setIsLoading] = useState(false)

  const value = {
    filters,
    actions,
    isLoading,
  }

  return <ActivityListProvider value={value}>{children}</ActivityListProvider>
}

// Barrel Export로 점 표기 지원
const ActivityListLayout = Object.assign(Root, {
  Header: ActivityListHeader,
  Filters: ActivityListFilters,
  Body: ActivityListBody,
})

export default ActivityListLayout
```

### Sub 컴포넌트 예시

```tsx
// features/activity-list/ui/ActivityListLayout/ActivityListFilters.tsx
'use client'

import { useActivityListContext } from './context'

export default function ActivityListFilters() {
  const { filters, actions } = useActivityListContext()

  return (
    <div className="flex gap-2">
      {filters.subCategories.map((sub) => (
        <button
          key={sub}
          onClick={() => actions.toggleSubCategory(sub)}
          className="rounded-full border px-3 py-1"
        >
          {sub}
        </button>
      ))}
      <button onClick={actions.reset} className="text-sm text-gray-500">
        초기화
      </button>
    </div>
  )
}
```

### 사용 예시

```tsx
// app/activities2/regions/[country]/[cityId]/page.tsx
import ActivityListLayout from '@/features/activity-list/ui/ActivityListLayout'

export default function ActivitiesPage() {
  return (
    <ActivityListLayout.Root>
      <ActivityListLayout.Header />
      <ActivityListLayout.Filters />
      <ActivityListLayout.Body />
    </ActivityListLayout.Root>
  )
}
```

---

## 🔄 4. 서버/클라이언트 데이터 흐름

### 패턴: 1페이지 SSR + 2페이지~ CSR

```tsx
// app/activities2/regions/[country]/[cityId]/page.tsx (서버 컴포넌트)
import { fetchActivities } from '@/lib/api'
import ActivitiesClient from './ActivitiesClient'

export default async function ActivitiesPage({ params }) {
  // 1페이지만 서버에서 fetch (SEO)
  const initialData = await fetchActivities({
    cityId: params.cityId,
    page: 1,
  })

  return <ActivitiesClient initialData={initialData} cityId={params.cityId} />
}
```

```tsx
// app/activities2/regions/[country]/[cityId]/ActivitiesClient.tsx (클라이언트)
'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import ActivityListLayout from '@/screens/activities2/ActivityListLayout'

type Props = {
  initialData: Activity[]
  cityId: string
}

export default function ActivitiesClient({ initialData, cityId }: Props) {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['activities', cityId],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`/api/activities?cityId=${cityId}&page=${pageParam}`).then((r) =>
        r.json()
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length + 1 : undefined
    },
    // 1페이지는 서버에서 받은 데이터 사용
    initialData: {
      pages: [{ data: initialData, hasMore: true }],
      pageParams: [1],
    },
  })

  return (
    <ActivityListLayout.Root>
      <ActivityListLayout.Header />
      <ActivityListLayout.Filters />
      <ActivityListLayout.Body
        activities={data.pages.flatMap((p) => p.data)}
        onLoadMore={fetchNextPage}
        hasMore={hasNextPage}
        isLoading={isLoading}
      />
    </ActivityListLayout.Root>
  )
}
```

### ⚠️ 주의사항

```tsx
// ❌ 직렬화 불가능한 타입은 서버→클라 전달 금지
export default async function Page() {
  const data = {
    items: new Set([1, 2, 3]),        // ❌ Set
    createdAt: new Date(),            // ❌ Date
    fn: () => console.log('hi'),      // ❌ Function
  }
  return <Client data={data} />       // 에러!
}

// ✅ 직렬화 가능한 형태로 변환
export default async function Page() {
  const data = {
    items: [1, 2, 3],                 // ✅ Array
    createdAt: new Date().toISOString(), // ✅ string
  }
  return <Client data={data} />
}
```

---

## 🎨 5. 스타일 전략 (CVA)

```tsx
// shared/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // base
  'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white hover:bg-black/90',
        outline: 'border border-gray-300 hover:bg-gray-50',
        ghost: 'hover:bg-gray-100',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

### 사용 예시

```tsx
<Button variant="primary" size="lg">
  확인
</Button>

<Button variant="ghost" size="sm" className="rounded-full">
  취소
</Button>
```

---

## 📏 6. 스크롤/레이아웃 패턴

### 패턴 1: 좌측 필터 + 우측 리스트 (독립 스크롤)

```tsx
// app/activities2/layout.tsx
export default function Layout({ children }) {
  return (
    <div className="flex h-screen pt-16"> {/* 헤더 높이만큼 padding */}

      {/* 좌측 필터 - 독립 스크롤 */}
      <aside className="w-64 overflow-y-auto border-r">
        <FilterPanel />
      </aside>

      {/* 우측 메인 - 독립 스크롤 */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
```

### 패턴 2: 헤더 고정 + 본문 스크롤

```tsx
// screens/activities2/ActivityListLayout/ActivityListLayoutRoot.tsx
export default function ActivityListLayoutRoot({ children }) {
  return (
    <div className="flex h-screen flex-col">

      {/* 상단 고정 헤더 */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <ActivityListHeader />
      </header>

      {/* 스크롤 가능한 본문 */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
```

### 패턴 3: 스크롤 시 헤더 축소

```tsx
'use client'

export function CollapsibleHeader() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 200) {
        setIsCollapsed(currentScrollY > lastScrollY.current)
      } else {
        setIsCollapsed(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 bg-white transition-all duration-300"
      style={{
        maxHeight: isCollapsed ? '60px' : '200px',
      }}
    >
      {/* 헤더 내용 */}
    </header>
  )
}
```

---

## ⚡ 7. 캐싱 전략 (Next.js 15)

### 서버 컴포넌트 캐싱

```tsx
// app/activities2/regions/[country]/[cityId]/page.tsx

// 방법 1: 페이지 레벨 설정
export const revalidate = 60 // 60초마다 재검증

// 방법 2: fetch 레벨 설정
async function getData() {
  const res = await fetch('https://api.example.com/activities', {
    cache: 'force-cache',
    next: {
      revalidate: 60,
      tags: ['activities'], // 태그로 특정 데이터만 재검증
    },
  })
  return res.json()
}

// 특정 태그만 재검증
import { revalidateTag } from 'next/cache'

export async function POST() {
  // 데이터 변경 후
  revalidateTag('activities')
  return Response.json({ revalidated: true })
}
```

### 클라이언트 캐싱 (React Query)

```tsx
// lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,        // 1분
      gcTime: 5 * 60 * 1000,       // 5분 (뒤로가기 복원용)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})
```

---

## 🧪 8. 테스트 전략

### Headless Hook 테스트

```ts
// features/activity-list/headless/__tests__/useActivityFilters.test.ts
import { renderHook, act } from '@testing-library/react'
import { useActivityFilters } from '../useActivityFilters'

describe('useActivityFilters', () => {
  test('카테고리 변경 시 하위 카테고리가 초기화된다', () => {
    const { result } = renderHook(() => useActivityFilters())

    // 하위 카테고리 선택
    act(() => {
      result.current.setCategory('투어')
      result.current.toggleSubCategory('시티투어')
    })
    expect(result.current.filters.subCategories).toEqual(['시티투어'])

    // 카테고리 변경 → 하위 초기화
    act(() => {
      result.current.setCategory('액티비티')
    })
    expect(result.current.filters.subCategories).toEqual([])
  })

  test('reset은 모든 필터를 초기화한다', () => {
    const { result } = renderHook(() => useActivityFilters())

    act(() => {
      result.current.setCategory('투어')
      result.current.setSortBy('price-asc')
    })

    act(() => {
      result.current.reset()
    })

    expect(result.current.filters).toEqual({
      category: '전체',
      subCategories: [],
      priceRange: null,
      sortBy: 'recommended',
    })
  })
})
```

### Compound Component 테스트

```tsx
// features/activity-list/ui/ActivityListLayout/__tests__/ActivityListLayout.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActivityListLayout from '../index'

describe('ActivityListLayout', () => {
  test('Root 없이 Sub 컴포넌트 사용 시 에러', () => {
    expect(() => {
      render(<ActivityListLayout.Filters />)
    }).toThrow('must be used within ActivityListLayout.Root')
  })

  test('필터 초기화 버튼이 동작한다', async () => {
    const user = userEvent.setup()

    render(
      <ActivityListLayout.Root>
        <ActivityListLayout.Filters />
      </ActivityListLayout.Root>
    )

    const resetButton = screen.getByRole('button', { name: /초기화/i })
    await user.click(resetButton)

    // 필터가 초기화되었는지 확인
    // (실제로는 mock 등으로 검증)
  })
})
```

---

## 🚨 9. 에러 처리

### 서버 컴포넌트 에러

```tsx
// app/activities2/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-xl font-bold">문제가 발생했습니다</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
      >
        다시 시도
      </button>
    </div>
  )
}
```

### 클라이언트 에러 바운더리

```tsx
// shared/ui/ErrorBoundary.tsx
'use client'

import { Component, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 text-center">
            <p className="text-red-600">오류가 발생했습니다</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-2 text-sm underline"
            >
              다시 시도
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
```

사용:

```tsx
<ErrorBoundary fallback={<ErrorUI />}>
  <ActivityListLayout.Root>
    <ActivityListLayout.Body />
  </ActivityListLayout.Root>
</ErrorBoundary>
```

---

## ✅ PR 체크리스트

코드 리뷰 시 확인할 항목:

### Headless Hook
- [ ] DOM/window/document 의존성 없음
- [ ] 반환 타입이 명시적으로 export됨
- [ ] useCallback으로 함수 메모이제이션됨
- [ ] 단위 테스트 작성됨

### Compound Component
- [ ] Context로 상태 공유 (props drilling 없음)
- [ ] Root 없이 Sub 사용 시 명확한 에러 메시지
- [ ] className prop으로 스타일 오버라이드 가능
- [ ] role/aria 속성 적절히 사용

### 데이터 흐름
- [ ] 서버→클라 프롭이 직렬화 가능 (Set/Map/Date ❌)
- [ ] 1페이지는 SSR, 2페이지~는 CSR
- [ ] 로딩/에러/빈 상태 처리됨

### 접근성
- [ ] 키보드로 모든 기능 사용 가능
- [ ] 모달은 ESC로 닫힘
- [ ] 포커스 관리 적절함

### 성능
- [ ] 불필요한 리렌더 없음
- [ ] 무한 스크롤이 부드러움
- [ ] 이미지 lazy loading 적용

---

## 🔄 점진적 리팩토링 순서

1. **공용 UI 컴포넌트 표준화** (1주)
   - Button, Input, Modal을 CVA로 통일
   - shared/ui에 배치

2. **Headless Hook 분리** (1주)
   - 기존 컴포넌트에서 로직 추출
   - screens/xxx/headless/ 폴더 생성
   - 단위 테스트 작성

3. **Compound 패턴 적용** (2주)
   - 1개 화면(activities2)부터 시작
   - Context로 상태 공유
   - Sub 컴포넌트 분할

4. **서버/클라 데이터 흐름** (1주)
   - 1페이지 SSR 적용
   - React Query로 2페이지~ 관리

5. **에러/로딩 표준화** (1주)
   - error.tsx, loading.tsx 추가
   - ErrorBoundary 적용
   - 스켈레톤 UI 통일

6. **문서화 + 테스트** (지속)
   - 스토리북 (선택)
   - E2E 테스트 핵심 시나리오

---

## 📚 Do / Don't 요약

### ✅ Do

- Headless Hook은 **상태/로직만**, UI는 컴포넌트에서
- Context에 `undefined` 타입 사용 + 커스텀 훅에서 가드
- CVA로 variant 표준화, className으로 확장성 확보
- 서버/클라 캐시 전략 분리 (SSR은 revalidate, CSR은 staleTime)
- 에러는 **상태로 노출**하고 UI에서 재시도 제공

### ❌ Don't

- Headless Hook에서 `document.body.style` 같은 DOM 제어
- Sub 컴포넌트를 Root 밖에서 독립 사용
- `Set/Map/Date`를 서버→클라 프롭으로 전달
- Context value를 `null`로 초기화 (타입 가드 누락 위험)
- `no-store`를 남발 (뒤로가기 UX 악화)

---

## 🎓 추가 학습 자료

- [Compound Components (Kent C. Dodds)](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [Headless UI (Tailwind)](https://headlessui.com/)
- [React Aria (Adobe)](https://react-spectrum.adobe.com/react-aria/)
- [Next.js 15 Caching](https://nextjs.org/docs/app/building-your-application/caching)
- [Class Variance Authority](https://cva.style/docs)

---

**마지막 업데이트**: 2025-10-25
**프로젝트**: annyeong-plant-dental-web
**작성자**: Development Team
