# Doctor 페이지 (/doctor) 구성 문서

**파일 위치:** `src/app/doctor/page.tsx`
**타입:** Client Component ("use client")

## 개요

병원에 소속된 의료진의 상세 정보를 제공하는 페이지입니다. 각 의사별로 프로필, 철학, 학력, 경력, 임상 경험, 진료 목표 등을 소개합니다.

## 페이지 특징

### Client-Side 기능

```typescript
useEffect(() => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
}, []);
```

#### 기능 설명
- **Hash 기반 네비게이션**: URL의 hash를 읽어 특정 의사 섹션으로 자동 스크롤
- **사용 예시**: `/doctor#dr-kim` → Dr. Kim 섹션으로 스크롤
- **딜레이:** 100ms (페이지 렌더링 완료 후 스크롤)
- **스크롤 동작:** smooth, block: "start"

---

## 데이터 소스

**파일:** `constants/doctors.ts`
**상수:** `DOCTORS`

### DOCTORS 데이터 구조 (추정)

```typescript
interface Doctor {
  id: string              // 고유 ID (URL hash용)
  image: string           // 프로필 이미지 경로
  name: string            // 의사 이름
  title: string           // 직책
  quote?: string          // 짧은 소개 (홈페이지용)
  philosophy: string      // 진료 철학
  description: string     // 상세 설명
  education?: string[]    // 학력 및 경력 목록
  experience: string      // 임상 경험
  mission: string         // 진료 목표
}

export const DOCTORS: Doctor[] = [...]
```

---

## 페이지 구조

```
<main className="pt-20">
  {DOCTORS.map((doctor, index) => (
    <Section key={doctor.id} id={doctor.id} background={...}>
      └── Doctor Profile Section
    </Section>
  ))}
</main>
```

### 배경 패턴
```typescript
background={index % 2 === 0 ? "default" : "accent"}
```
- 짝수 인덱스: 기본 (흰색)
- 홀수 인덱스: accent

---

## 의사 프로필 섹션 구조

### 전체 레이아웃

**Grid:** `md:grid-cols-5` (5칸)
**간격:** `gap-12`
**정렬:** `items-start`

```
Grid (5 columns)
├── 좌측 (2칸): 프로필 이미지
└── 우측 (3칸): 의사 정보
```

---

### 1. 프로필 이미지 (좌측 2칸)

**Grid Span:** `md:col-span-2`

#### 구조
```tsx
<div className="md:col-span-2">
  <Image
    src={doctor.image}
    alt={doctor.name}
    width={600}
    height={800}
    className="rounded-lg soft-shadow w-full sticky top-24"
  />
</div>
```

#### 특징
- **크기:** 600x800px (3:4 비율)
- **Sticky 포지셔닝:** `sticky top-24`
  - 스크롤 시 상단에서 24 간격 유지
  - 우측 콘텐츠 스크롤 시 이미지는 고정
- **스타일:** rounded-lg, soft-shadow

---

### 2. 의사 정보 (우측 3칸)

**Grid Span:** `md:col-span-3`
**레이아웃:** Vertical Stack (`space-y-12`)

---

#### 2.1 기본 정보

```tsx
<div>
  <h1 className="ty-h1 mb-4">
    {doctor.name}
  </h1>
  <p className="ty-lead text-muted-foreground">
    {doctor.title}
  </p>
</div>
```

**구성:**
- 의사 이름 (h1)
- 직책 (lead, muted)

---

#### 2.2 진료 철학

```tsx
<div>
  <h2 className="ty-h3 mb-4 text-secondary-foreground">
    진료 철학
  </h2>
  <p className="ty-lead text-muted-foreground mb-4">
    "{doctor.philosophy}"
  </p>
  <p className="ty-body text-muted-foreground">
    {doctor.description}
  </p>
</div>
```

**구성:**
- 섹션 제목: "진료 철학" (h3)
- 철학 인용문 (lead, 따옴표로 감싸짐)
- 상세 설명 (body)

---

#### 2.3 학력 및 경력

```tsx
<div>
  <h2 className="ty-h3 mb-4 text-secondary-foreground">
    학력 및 경력
  </h2>
  <ul className="space-y-3 text-muted-foreground">
    {doctor.education?.map((item, idx) => (
      <li key={idx} className="flex items-start">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3" />
        <span className="ty-body">{item}</span>
      </li>
    ))}
  </ul>
</div>
```

**구성:**
- 섹션 제목: "학력 및 경력" (h3)
- 학력/경력 목록 (ul)
  - 각 항목: 커스텀 불릿 포인트 (원형, accent 색상)
  - 간격: space-y-3

**불릿 스타일:**
- 크기: 1.5 x 1.5
- 모양: rounded-full
- 색상: bg-accent
- 위치: mt-2 mr-3

---

#### 2.4 임상 경험

```tsx
<div>
  <h2 className="ty-h3 mb-4 text-secondary-foreground">
    임상 경험
  </h2>
  <p className="ty-body text-muted-foreground">
    {doctor.experience}
  </p>
</div>
```

**구성:**
- 섹션 제목: "임상 경험" (h3)
- 경험 설명 (body, 단일 문단)

---

#### 2.5 진료 목표

```tsx
<div>
  <h2 className="ty-h3 mb-4 text-secondary-foreground">
    진료 목표
  </h2>
  <p className="ty-body text-muted-foreground">
    {doctor.mission}
  </p>
</div>
```

**구성:**
- 섹션 제목: "진료 목표" (h3)
- 목표 설명 (body, 단일 문단)

---

## 사용된 컴포넌트

### Shared UI
- `Section` - `@/shared/ui/Section`

### Next.js
- `Image` - next/image

### React
- `useEffect` - 클라이언트 사이드 스크롤 처리

---

## 네비게이션 플로우

### 1. 홈페이지에서 진입
```
Home Page (Doctors Section)
  └── DoctorCard 클릭
      └── /doctor#[doctor.id]
          └── 해당 의사 섹션으로 스크롤
```

### 2. 직접 URL 접근
```
/doctor#dr-kim
  └── 페이지 로드 후
      └── useEffect 실행
          └── #dr-kim 섹션으로 smooth 스크롤
```

---

## 반응형 디자인

### 모바일
- 그리드 → 세로 스택
- 이미지 상단, 정보 하단
- Sticky 포지셔닝 비활성화

### 데스크톱 (md 이상)
- 5단 그리드
- 이미지 좌측 2칸, 정보 우측 3칸
- 이미지 sticky 포지셔닝 활성화

---

## 스타일 가이드

### 섹션 제목
- **클래스:** `ty-h3 mb-4 text-secondary-foreground`
- **색상:** secondary-foreground (한글 제목에 적합)

### 콘텐츠 텍스트
- **인용문:** `ty-lead text-muted-foreground`
- **본문:** `ty-body text-muted-foreground`

### 간격
- 정보 블록 간: `space-y-12` (큰 간격)
- 리스트 항목 간: `space-y-3`
- 제목 하단: `mb-4`

---

## 접근성 고려사항

### 시맨틱 HTML
- `<h1>`: 의사 이름 (페이지 주제)
- `<h2>`: 각 정보 섹션 제목
- `<ul>`, `<li>`: 학력 및 경력 목록

### 이미지
- `alt` 속성: 의사 이름 제공

### 네비게이션
- Hash 기반 앵커 링크 지원
- `id` 속성으로 섹션 식별 가능

---

## UX 특징

### Sticky 이미지
- 우측 정보 스크롤 시 이미지는 viewport에 고정
- 긴 텍스트 읽는 동안 의사 얼굴 계속 노출
- 신뢰감 및 연결감 증대

### Smooth 스크롤
- 부드러운 스크롤 애니메이션
- 사용자가 어디로 이동하는지 명확히 파악

### 배경 교차
- 의사별로 배경색 교차 배치
- 시각적 구분 명확
- 읽기 피로도 감소

---

## 데이터 관리

### 의사 추가/제거
1. `constants/doctors.ts`에서 `DOCTORS` 배열 수정
2. 자동으로 페이지에 반영 (map 함수)
3. 홈페이지 Doctors Section도 자동 업데이트

### 필수 필드
- `id`, `name`, `title`, `image`
- `philosophy`, `description`, `experience`, `mission`

### 선택 필드
- `education` (없으면 해당 섹션 미표시)

---

## 성능 최적화

### Image 최적화
- Next.js Image 컴포넌트 사용
- 자동 이미지 최적화
- Lazy loading

### Client Component 최소화
- 스크롤 기능만 클라이언트 사이드
- 나머지는 서버 컴포넌트로 렌더링 가능

---

## 관련 파일

- `src/app/doctor/page.tsx` - 메인 페이지
- `src/constants/doctors.ts` - 의사 데이터
- `src/shared/ui/Section.tsx` - 섹션 래퍼
- `src/shared/ui/DoctorCard.tsx` - 홈페이지 카드 (참조용)
