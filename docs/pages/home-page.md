# 메인 페이지 (/) 구성 문서

**파일 위치:** `src/app/page.tsx`

## 개요

안녕플란트치과의 메인 랜딩 페이지입니다. 병원 소개, 의료진, 치료 항목, 공간, 후기 등 전체적인 정보를 한눈에 볼 수 있도록 구성되어 있습니다.

## 전체 구조

```
<main>
  └── Hero Section
  └── About Section
  └── Doctors Section (accent background)
  └── Treatments Section (card background)
  └── Philosophy Section (accent background)
  └── Space Section
  └── Testimonials Section
  └── CTA Section (card background)
</main>
```

---

## 섹션별 상세 구성

### 1. Hero Section

**컴포넌트:** `Hero`
**높이:** 80vh
**데이터 소스:** `constants/home.ts` - `HERO`

#### Props
```typescript
{
  image: string          // 히어로 배경 이미지
  title: string         // 메인 타이틀
  subtitle: string      // 서브 타이틀
  cta: {
    text: string        // 버튼 텍스트
    link: string        // 버튼 링크
  }
  height: "h-[80vh]"   // 높이 설정
}
```

#### 역할
- 첫 방문자에게 강력한 첫인상 제공
- 클리닉의 핵심 메시지 전달
- 주요 CTA (예약/문의) 유도

---

### 2. About Section

**배경:** 기본 (흰색)
**레이아웃:** Grid (md:grid-cols-2)
**데이터 소스:** `constants/home.ts` - `ABOUT`

#### 구조
```
Grid (2 columns)
├── 좌측 (order-2 md:order-1)
│   └── 클리닉 팀 이미지
│       - 크기: 800x500px
│       - 스타일: rounded-lg, soft-shadow
│       - 높이: h-[500px], object-cover
│
└── 우측 (order-1 md:order-2)
    ├── 타이틀 (ty-h2)
    ├── 설명 문단들 (space-y-4)
    │   └── 각 문단: ty-body, text-muted-foreground
    └── CTA 버튼
        - variant: default
        - size: lg
        - ArrowRight 아이콘 (호버 시 translate-x-1)
```

#### 콘텐츠 구성
- **타이틀:** 병원 소개 제목
- **문단:** 여러 문단으로 구성된 소개글 (ABOUT.paragraphs 배열)
- **CTA:** "자세히 보기" 스타일 버튼

#### 반응형
- 모바일: 이미지 위, 텍스트 아래
- 데스크톱: 이미지 좌측, 텍스트 우측

---

### 3. Doctors Section

**배경:** accent
**레이아웃:** Grid (md:grid-cols-3)
**데이터 소스:** `constants/doctors.ts` - `DOCTORS`

#### 헤더
```
<div className="text-center mb-16">
  <h2>타이틀 (ty-h2)</h2>
  <p>설명 (ty-lead, max-w-2xl mx-auto)</p>
</div>
```

#### 의사 카드 그리드
```typescript
{DOCTORS.map((doctor) => (
  <DoctorCard
    key={doctor.id}
    id={doctor.id}
    image={doctor.image}
    name={doctor.name}
    title={doctor.title}
    quote={doctor.quote}
  />
))}
```

#### DoctorCard Props
- `id`: 의사 고유 ID (링크용)
- `image`: 프로필 이미지 경로
- `name`: 의사 이름
- `title`: 직책
- `quote`: 짧은 소개 인용문

#### 인터랙션
- 카드 클릭 시 `/doctor#[id]`로 이동
- 해당 의사의 상세 페이지로 스크롤

---

### 4. Treatments Section

**배경:** card
**레이아웃:** Grid (md:grid-cols-2, lg:grid-cols-4)
**데이터 소스:** `constants/home.ts` - `CORE_TREATMENTS`

#### 헤더
```
<div className="text-center mb-16">
  <h2>타이틀 (ty-h2)</h2>
  <p>설명 (ty-lead, max-w-2xl mx-auto)</p>
</div>
```

#### 치료 카드 그리드
```typescript
{CORE_TREATMENTS.map((treatment) => (
  <TreatmentCard
    key={treatment.title}
    image={treatment.image}
    title={treatment.title}
    description={treatment.description}
    link={treatment.link}
  />
))}
```

#### TreatmentCard Props
- `image`: 치료 대표 이미지
- `title`: 치료명
- `description`: 간단한 설명
- `link`: 상세 페이지 링크 (treatments 페이지의 특정 섹션)

#### 반응형
- 모바일: 1단
- 태블릿: 2단
- 데스크톱: 4단

---

### 5. Philosophy Section

**배경:** accent
**레이아웃:** Grid (md:grid-cols-2)
**데이터 소스:** `constants/home.ts` - `PHILOSOPHY`

#### 구조
```
Grid (2 columns)
├── 좌측
│   └── 의사 이미지
│       - 크기: 800x500px
│       - 스타일: rounded-lg, soft-shadow
│       - 높이: h-[500px], object-cover
│
└── 우측
    ├── 타이틀 (ty-h2, mb-6)
    ├── 설명 문단들
    │   └── 각 문단: ty-body, mb-6
    └── 링크
        - text-primary, hover:underline
        - inline-flex items-center
```

#### 콘텐츠
- **타이틀:** 진료 철학 제목
- **문단:** 여러 문단으로 구성된 철학 설명
- **링크:** 의사 상세 페이지로 연결

---

### 6. Space Section

**배경:** 기본 (흰색)
**레이아웃:** Grid (md:grid-cols-2)
**데이터 소스:** `constants/home.ts` - `SPACE_SECTION`

#### 구조
```
Grid (2 columns)
├── 좌측 (order-2 md:order-1)
│   ├── 타이틀 (ty-h2, mb-6)
│   ├── 설명 문단들
│   │   └── 각 문단: ty-body, mb-6
│   └── 링크
│       - text-primary, hover:underline
│
└── 우측 (order-1 md:order-2)
    └── 공간 이미지
        - 크기: 800x500px
        - 스타일: rounded-lg, soft-shadow
        - 높이: h-[500px], object-cover
```

#### 반응형
- 모바일: 이미지 위, 텍스트 아래
- 데스크톱: 텍스트 좌측, 이미지 우측

---

### 7. Testimonials Section

**배경:** 기본 (흰색)
**데이터 소스:** `constants/testimonials.ts` - `TESTIMONIALS`

#### 헤더
```
<div className="text-center mb-16">
  <h2>타이틀 (ty-h2)</h2>
  <p>설명 (ty-lead, max-w-2xl mx-auto)</p>
</div>
```

#### 캐러셀
```typescript
<TestimonialCarousel testimonials={TESTIMONIALS} />
```

#### TestimonialCarousel 기능
- 좌우 스와이프/클릭으로 후기 탐색
- 자동 재생 옵션
- 반응형 디자인

---

### 8. CTA Section

**배경:** card
**레이아웃:** 중앙 정렬
**데이터 소스:** `constants/home.ts` - `CTA_SECTION`

#### 구조
```
<Section background="card" className="text-center">
  <div className="max-w-3xl mx-auto">
    ├── 타이틀 (ty-h2, mb-6)
    ├── 설명 (ty-lead, mb-8)
    └── 버튼
        - inline-block
        - bg-primary, text-primary-foreground
        - px-8 py-4, rounded-lg
        - hover:warm-glow
  </div>
</Section>
```

#### 역할
- 페이지 하단에서 예약/문의 유도
- Contact 페이지로 연결

---

## 사용된 컴포넌트

### Shared UI Components
- `Hero` - `@/shared/ui/Hero`
- `Section` - `@/shared/ui/Section`
- `TreatmentCard` - `@/shared/ui/TreatmentCard`
- `DoctorCard` - `@/shared/ui/DoctorCard`
- `TestimonialCarousel` - `@/shared/ui/TestimonialCarousel`
- `Button` - `@/shared/ui/shadcn/button`

### Next.js Components
- `Link` - next/link
- `Image` - next/image

### Icons
- `ArrowRight` - lucide-react

---

## 데이터 구조

### constants/home.ts
```typescript
export const HERO = {
  image: string
  title: string
  subtitle: string
  cta: { text: string, link: string }
}

export const ABOUT = {
  image: string
  title: string
  paragraphs: string[]
  cta: { text: string, link: string }
}

export const DOCTORS_SECTION = {
  title: string
  description: string
}

export const TREATMENTS_SECTION = {
  title: string
  description: string
}

export const CORE_TREATMENTS = Array<{
  image: string
  title: string
  description: string
  link: string
}>

export const PHILOSOPHY = {
  image: string
  title: string
  paragraphs: string[]
  link: { text: string, href: string }
}

export const SPACE_SECTION = {
  title: string
  paragraphs: string[]
  image: string
  link: { text: string, href: string }
}

export const TESTIMONIALS_SECTION = {
  title: string
  description: string
}

export const CTA_SECTION = {
  title: string
  description: string
  button: { text: string, link: string }
}
```

---

## 스타일 가이드

### 배경 패턴
섹션별로 번갈아가며 배경 적용:
- 기본 (흰색)
- accent
- card

### 타이포그래피 클래스
- `ty-h1`: 최상위 제목
- `ty-h2`: 섹션 제목
- `ty-h3`: 서브섹션 제목
- `ty-lead`: 리드 텍스트
- `ty-body`: 본문
- `ty-caption`: 캡션

### 효과
- `soft-shadow`: 부드러운 그림자
- `warm-glow`: 호버 시 따뜻한 글로우 효과

### 간격
- 섹션 간격: `Section` 컴포넌트에서 자동 처리
- 내부 간격: `space-y-{n}`, `gap-{n}` 사용

---

## 반응형 브레이크포인트

- **md** (768px): 태블릿
- **lg** (1024px): 데스크톱

주요 그리드는 모두 `md` 브레이크포인트에서 2단 이상으로 전환됩니다.
