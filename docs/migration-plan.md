# Migration Plan: Vite React → Next.js 16

> gentle-plant-restoration → annyeong-plant-dental-web

**참조 문서**: `docs/architecture.md`

---

## 📋 프로젝트 개요

### 현재 상태
- **Source**: gentle-plant-restoration (Vite + React 18 + React Router)
- **Target**: annyeong-plant-dental-web (Next.js 16 + React 19)
- **아키텍처**: Compound Components + Headless Hooks 패턴

### 주요 변경사항
| 항목 | Before | After |
|------|--------|-------|
| 빌드 도구 | Vite | Next.js 16 |
| React | 18.3.1 | 19.2.0 |
| 라우팅 | React Router | App Router |
| Tailwind | v3 | v4 |
| 폴더 구조 | pages/, components/ | features/, shared/, app/ |

---

## 🎯 마이그레이션 전략

### 1단계: 기반 구조 설정 (Phase 1)

#### 1.1 폴더 구조 생성
```bash
src/
  ├── features/          # 페이지별 기능 (추후 확장)
  ├── shared/            # 전역 공용
  │   ├── ui/            # 재사용 UI 컴포넌트
  │   │   ├── shadcn/    # shadcn/ui 컴포넌트
  │   │   ├── Button.tsx # CVA 패턴 적용
  │   │   ├── Card.tsx
  │   │   └── ...
  │   ├── hooks/         # 범용 Headless Hooks
  │   └── lib/           # 유틸리티
  ├── app/               # Next.js App Router
  │   ├── layout.tsx     # Root Layout
  │   ├── page.tsx       # Home
  │   ├── doctor/
  │   ├── treatments/
  │   ├── space/
  │   ├── contact/
  │   └── not-found.tsx
  └── lib/               # 전역 설정
```

#### 1.2 의존성 병합 및 설치
```json
// package.json에 추가할 주요 의존성
{
  "dependencies": {
    "@radix-ui/*": "latest",           // shadcn/ui 기반
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.25.76"
  }
}
```

**작업:**
- [ ] `src/features/`, `src/shared/ui/`, `src/shared/hooks/` 폴더 생성
- [ ] gentle-plant-restoration의 package.json 의존성 병합
- [ ] `yarn install` 또는 `npm install` 실행

---

### 2단계: 공용 리소스 이동 (Phase 2)

#### 2.1 유틸리티 이동
```bash
# Before
gentle-plant-restoration/src/lib/utils.ts

# After
src/lib/utils.ts
```

**작업:**
- [ ] `lib/utils.ts` 복사
- [ ] `cn()` 함수 확인 (Tailwind merge 유틸)

#### 2.2 shadcn/ui 컴포넌트 이동
```bash
# Before
gentle-plant-restoration/src/components/ui/

# After
src/shared/ui/shadcn/
```

**작업:**
- [ ] `components/ui/` 전체 복사 → `src/shared/ui/shadcn/`
- [ ] `components.json` 복사 및 경로 수정
- [ ] import 경로를 `@/shared/ui/shadcn/` 로 통일

#### 2.3 공용 Hooks 이동
```bash
# Before
gentle-plant-restoration/src/hooks/use-mobile.tsx
gentle-plant-restoration/src/hooks/use-toast.ts

# After
src/shared/hooks/use-mobile.tsx
src/shared/hooks/use-toast.ts
```

**작업:**
- [ ] `use-mobile.tsx`, `use-toast.ts` 복사
- [ ] import 경로 `@/shared/hooks/` 로 수정

#### 2.4 Assets 병합
```bash
# Before
gentle-plant-restoration/src/assets/
gentle-plant-restoration/public/

# After
public/images/
public/icons/
```

**작업:**
- [ ] `src/assets/` 이미지를 `public/images/` 로 이동
- [ ] import 경로를 `/images/xxx.png` 형태로 변경
- [ ] `public/` 폴더 병합 (favicon 등)

---

### 3단계: 스타일 설정 (Phase 3)

#### 3.1 Tailwind 설정 병합 (v3 → v4)
```typescript
// tailwind.config.ts (v4 호환)
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // gentle-plant-restoration의 커스텀 테마 병합
      colors: {
        // ...
      },
      fontFamily: {
        // ...
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
```

**작업:**
- [ ] `tailwind.config.ts` 병합 (커스텀 색상, 폰트 등)
- [ ] `postcss.config.mjs` 확인
- [ ] Tailwind v4 breaking changes 확인

#### 3.2 글로벌 스타일 병합
```css
/* src/app/globals.css */

/* gentle-plant-restoration의 index.css 내용 병합 */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* 커스텀 CSS 변수 */
  :root {
    --background: ...;
    --foreground: ...;
  }
}
```

**작업:**
- [ ] `index.css` 내용을 `globals.css`에 병합
- [ ] CSS 변수 충돌 확인
- [ ] 폰트 설정 확인

---

### 4단계: Root Layout 구성 (Phase 4)

#### 4.1 Providers 설정
```tsx
// src/app/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/shared/ui/shadcn/toaster'
import { Toaster as Sonner } from '@/shared/ui/shadcn/sonner'
import { TooltipProvider } from '@/shared/ui/shadcn/tooltip'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
```

#### 4.2 Root Layout
```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/shared/ui/Navigation'
import Footer from '@/shared/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gentle Plant Dental',
  description: 'Restorative dental care with gentle precision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
```

**작업:**
- [ ] `app/providers.tsx` 생성
- [ ] `app/layout.tsx` 업데이트
- [ ] Navigation, Footer 컴포넌트 이동 및 'use client' 추가

---

### 5단계: 페이지 마이그레이션 (Phase 5)

#### 5.1 페이지 변환 매핑
| Vite (React Router) | Next.js App Router | 비고 |
|---------------------|-------------------|------|
| pages/Index.tsx | app/page.tsx | 리다이렉트용 |
| pages/Home.tsx | app/page.tsx | 실제 홈 |
| pages/Doctor.tsx | app/doctor/page.tsx | |
| pages/Treatments.tsx | app/treatments/page.tsx | |
| pages/Space.tsx | app/space/page.tsx | |
| pages/Contact.tsx | app/contact/page.tsx | |
| pages/NotFound.tsx | app/not-found.tsx | |

#### 5.2 페이지 변환 예시

**Before (Vite):**
```tsx
// pages/Home.tsx
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* ... */}
    </div>
  );
};

export default Home;
```

**After (Next.js):**
```tsx
// app/page.tsx
import Hero from '@/shared/ui/Hero'
import { Button } from '@/shared/ui/shadcn/button'

export default function HomePage() {
  return (
    <div>
      <Hero />
      {/* ... */}
    </div>
  )
}

export const metadata = {
  title: 'Home - Gentle Plant Dental',
}
```

**작업:**
- [ ] Home 페이지 변환
- [ ] Doctor 페이지 변환
- [ ] Treatments 페이지 변환
- [ ] Space 페이지 변환
- [ ] Contact 페이지 변환
- [ ] NotFound 페이지 변환

#### 5.3 클라이언트 컴포넌트 처리

**인터랙티브 컴포넌트는 'use client' 추가:**
- Navigation (useState, onClick 등)
- Hero (Carousel 등)
- TestimonialCarousel
- Contact Form (form handling)

```tsx
// src/shared/ui/Navigation.tsx
'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // ...
}
```

---

### 6단계: TypeScript 설정 (Phase 6)

#### 6.1 tsconfig.json 업데이트
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**작업:**
- [ ] 경로 alias 확인
- [ ] React 19 타입 호환성 확인
- [ ] 모든 import 경로를 `@/` 로 통일

---

### 7단계: 빌드 및 테스트 (Phase 7)

#### 7.1 빌드 테스트
```bash
# 타입 체크
npm run lint

# 빌드
npm run build

# 개발 서버
npm run dev
```

**체크리스트:**
- [ ] TypeScript 에러 0개
- [ ] ESLint 에러 0개
- [ ] 빌드 성공
- [ ] 개발 서버 정상 실행 (localhost:3000)

#### 7.2 동작 확인
- [ ] 홈 페이지 렌더링
- [ ] 네비게이션 동작 (페이지 이동)
- [ ] 이미지 로딩
- [ ] 모바일 반응형
- [ ] 다크 모드 (next-themes)
- [ ] 폼 제출 (Contact)

---

## 🚨 주의사항 (architecture.md 기반)

### ✅ Do

1. **Headless Hook 패턴**
   - 로직과 UI 분리
   - DOM 의존성 없이 순수 상태 관리만

2. **서버/클라이언트 분리**
   - 서버 컴포넌트는 기본, 필요시에만 'use client'
   - 직렬화 가능한 데이터만 서버→클라 전달

3. **CVA 패턴**
   - 공용 UI 컴포넌트는 variant 시스템 적용
   - className prop으로 확장성 확보

4. **접근성**
   - 키보드 네비게이션
   - ARIA 속성
   - 시맨틱 HTML

### ❌ Don't

1. **Headless Hook에서 DOM 제어 금지**
   ```tsx
   // ❌
   const useModal = () => {
     document.body.style.overflow = 'hidden'
   }

   // ✅
   const Modal = () => {
     useEffect(() => {
       document.body.style.overflow = 'hidden'
     }, [])
   }
   ```

2. **Set/Map/Date 직렬화 불가 타입 서버→클라 전달 금지**
   ```tsx
   // ❌
   return <Client data={{ date: new Date() }} />

   // ✅
   return <Client data={{ date: new Date().toISOString() }} />
   ```

3. **no-store 남발 금지**
   - 뒤로가기 UX 악화

---

## 📊 마일스톤

| Phase | 작업 | 예상 시간 | 상태 |
|-------|------|----------|------|
| 1 | 기반 구조 설정 | 30분 | ⏳ |
| 2 | 공용 리소스 이동 | 1시간 | ⏳ |
| 3 | 스타일 설정 | 30분 | ⏳ |
| 4 | Root Layout | 1시간 | ⏳ |
| 5 | 페이지 마이그레이션 | 2시간 | ⏳ |
| 6 | TypeScript 설정 | 30분 | ⏳ |
| 7 | 빌드 및 테스트 | 1시간 | ⏳ |

**총 예상 시간**: 약 6.5시간

---

## 🔄 추후 개선 계획 (Optional)

마이그레이션 완료 후 점진적으로 적용:

1. **Features 구조 전환** (1-2주)
   - 페이지별로 `features/` 구조로 리팩토링
   - Compound Components 패턴 적용

2. **성능 최적화** (1주)
   - 이미지 최적화 (next/image)
   - 폰트 최적화 (next/font)
   - Code splitting

3. **SEO 최적화** (1주)
   - metadata 설정
   - sitemap.xml
   - robots.txt

4. **테스트 추가** (지속)
   - Headless Hook 단위 테스트
   - E2E 테스트 (Playwright)

---

**작성일**: 2025-10-25
**프로젝트**: annyeong-plant-dental-web
**참조**: docs/architecture.md
