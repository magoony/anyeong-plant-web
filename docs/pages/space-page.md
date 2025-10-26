# Space 페이지 (/space) 구성 문서

**파일 위치:** `src/app/space/page.tsx`

## 개요

클리닉의 공간, 인테리어, 시설, 위치 정보를 제공하는 페이지입니다. 사용자가 병원의 분위기와 편의 시설을 미리 파악하고 방문 계획을 세울 수 있도록 돕습니다.

## 페이지 메타데이터

```typescript
export const metadata: Metadata = {
  title: "Our Space - Anyeong Plant Dental Clinic",
  description: "A thoughtfully designed clinic environment where comfort and care come together. Experience natural light, clean minimal design, and biophilic elements."
}
```

---

## 데이터 소스

**파일:** `constants/facilities.ts`

### 데이터 구조 (추정)

```typescript
interface Facility {
  icon: LucideIcon    // 아이콘 컴포넌트
  label: string       // 시설명
}

export const FACILITIES: Facility[] = [...]

export const PARKING_INFO = {
  title: string         // 주차 안내 제목
  description: string   // 주차 안내 설명
}
```

---

## 페이지 구조

```
<main className="pt-20">
  └── Header Section
  └── Features Section (card background)
  └── Gallery Section
  └── Location & Facilities Section (card background)
  └── CTA Section
</main>
```

---

## 섹션별 상세 구성

### 1. Header Section

**레이아웃:** 중앙 정렬

#### 구조
```tsx
<Section>
  <div className="text-center mb-16">
    <h1 className="ty-h1 mb-4">Our Space</h1>
    <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
      A thoughtfully designed environment where comfort and care come together
    </p>
  </div>

  <div className="max-w-4xl mx-auto mb-16">
    <p className="ty-body text-muted-foreground text-center mb-8">
      Every detail of our clinic has been carefully considered to create a
      space that feels more like a wellness studio than a traditional dental
      office. From the warm ivory walls to the natural wood accents and
      abundant plants, we've designed an environment that helps you feel at
      ease from the moment you arrive.
    </p>
  </div>
</Section>
```

**구성:**
- 페이지 타이틀 (h1)
- 서브 설명 (lead)
- 소개 문단 (body, 중앙 정렬)

---

### 2. Features Section

**배경:** card
**레이아웃:** Grid (md:grid-cols-2, 2x2)

#### 구조
```tsx
<Section background="card">
  <div className="grid md:grid-cols-2 gap-8 mb-16">
    {/* 4개의 특징 카드 */}
  </div>
</Section>
```

---

#### Feature 1: Natural Light & Open Space

```tsx
<div>
  <h2 className="ty-h3 mb-4">
    Natural Light & Open Space
  </h2>
  <p className="ty-body text-muted-foreground">
    Large windows throughout the clinic bring in plenty of natural sunlight,
    creating a bright and uplifting atmosphere. Our open layout ensures you
    never feel confined or claustrophobic.
  </p>
</div>
```

**내용:**
- 자연광과 넓은 공간
- 창문을 통한 자연 채광
- 개방형 레이아웃

---

#### Feature 2: Clean, Minimal Design

```tsx
<div>
  <h2 className="ty-h3 mb-4">Clean, Minimal Design</h2>
  <p className="ty-body text-muted-foreground">
    Inspired by Scandinavian and Japanese aesthetics, our design philosophy
    emphasizes simplicity and functionality. Clean lines, neutral tones, and
    natural materials create a serene environment.
  </p>
</div>
```

**내용:**
- 미니멀한 디자인
- 스칸디나비안 + 일본 미학
- 중성 톤, 자연 소재

---

#### Feature 3: Biophilic Elements

```tsx
<div>
  <h2 className="ty-h3 mb-4">Biophilic Elements</h2>
  <p className="ty-body text-muted-foreground">
    Plants are integrated throughout the space, not just for aesthetics but
    to improve air quality and create a connection to nature that promotes
    calm and well-being.
  </p>
</div>
```

**내용:**
- 실내 식물 배치
- 공기 질 개선
- 자연과의 연결

---

#### Feature 4: Privacy & Comfort

```tsx
<div>
  <h2 className="ty-h3 mb-4">Privacy & Comfort</h2>
  <p className="ty-body text-muted-foreground">
    Each treatment room offers complete privacy with soundproofing and
    thoughtful layout. Comfortable seating and ambient music help you relax
    during your visit.
  </p>
</div>
```

**내용:**
- 프라이버시 보장
- 방음 시설
- 편안한 좌석과 음악

---

### 3. Gallery Section ("Take a Tour")

**배경:** 기본 (흰색)
**레이아웃:** Grid (md:grid-cols-3)

#### 구조
```tsx
<Section>
  <h2 className="ty-h2 mb-12 text-center">Take a Tour</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {images.map((image) => (
      <div key={image.title} className="space-y-4">
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-80 object-cover rounded-lg soft-shadow"
        />
        <div>
          <h3 className="ty-h3 mb-2">{image.title}</h3>
          <p className="ty-caption text-muted-foreground">
            {image.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</Section>
```

---

#### 이미지 데이터 (로컬 상수)

```typescript
const images = [
  {
    src: "/images/hero-clinic.jpg",
    title: "Reception & Waiting Area",
    description: "A warm welcome with natural light and comfortable seating"
  },
  {
    src: "/images/space-interior.jpg",
    title: "Treatment Room",
    description: "Clean, modern equipment in a calming environment"
  },
  {
    src: "/images/treatment-detail.jpg",
    title: "Consultation Area",
    description: "Private spaces for open, comfortable conversations"
  }
]
```

#### 이미지 스타일
- **높이:** h-80 (고정)
- **fit:** object-cover
- **스타일:** rounded-lg, soft-shadow

#### 캡션 구조
- 타이틀: h3
- 설명: caption, muted-foreground

---

### 4. Location & Facilities Section

**배경:** card
**레이아웃:** Grid (lg:grid-cols-2)
**데이터 소스:** `constants/facilities.ts`

---

#### 4.1 좌측: 지도

**컴포넌트:** `Map`
**파일 위치:** `@/shared/ui/Map`

```tsx
<div>
  <Map />
</div>
```

> 참고: Map 컴포넌트의 상세 구현은 별도 파일에서 확인 필요

---

#### 4.2 우측: 시설 정보

##### A. 시설 그리드

**레이아웃:** Grid (sm:grid-cols-2)

```tsx
<div>
  <h3 className="ty-h3 mb-6">시설 정보</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {FACILITIES.map((facility, index) => {
      const Icon = facility.icon;
      return (
        <div
          key={index}
          className="flex items-center gap-3 p-4 rounded-lg
                     bg-background/50 hover:bg-background transition-colors"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full
                          bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium">{facility.label}</span>
        </div>
      );
    })}
  </div>
</div>
```

**시설 카드 구조:**
- **아이콘 배경:** w-10 h-10, rounded-full, bg-primary/10
- **아이콘:** w-5 h-5, text-primary
- **레이블:** text-sm, font-medium
- **호버 효과:** hover:bg-background

---

##### B. 주차 안내

**데이터 소스:** `PARKING_INFO`

```tsx
<div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10">
  <div className="flex items-start gap-3">
    <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
    <div>
      <h4 className="font-medium mb-2">{PARKING_INFO.title}</h4>
      <p className="text-sm text-muted-foreground">
        {PARKING_INFO.description}
      </p>
    </div>
  </div>
</div>
```

**스타일:**
- **배경:** bg-primary/5 (연한 primary 색상)
- **테두리:** border-primary/10
- **아이콘:** Car (lucide-react)
- **간격:** mt-8 (시설 그리드와 분리)

---

### 5. CTA Section

**레이아웃:** 중앙 정렬

```tsx
<Section className="text-center">
  <div className="max-w-2xl mx-auto">
    <h2 className="ty-h2 mb-4">Experience the difference</h2>
    <p className="ty-lead text-muted-foreground mb-8">
      We invite you to visit our clinic and see for yourself how our space
      can transform your dental care experience
    </p>
    <Link
      href="/contact"
      className="inline-block bg-primary text-primary-foreground
                 px-8 py-4 rounded-lg hover:warm-glow transition-all"
    >
      Schedule a Visit
    </Link>
  </div>
</Section>
```

**역할:**
- 방문 유도
- Contact 페이지로 연결

---

## 사용된 컴포넌트

### Shared UI
- `Section` - `@/shared/ui/Section`
- `Map` - `@/shared/ui/Map`

### Next.js
- `Link` - next/link
- `Metadata` - next

### Icons (lucide-react)
- `Car` - 주차 안내 아이콘
- 기타 시설 아이콘들 (FACILITIES에서 정의)

---

## 반응형 디자인

### Features Section
- **모바일:** 1단 (세로 스택)
- **데스크톱 (md):** 2x2 그리드

### Gallery Section
- **모바일:** 1단 (세로 스택)
- **데스크톱 (md):** 3단 그리드

### Location & Facilities Section
- **모바일:** 세로 스택 (지도 → 시설 정보)
- **데스크톱 (lg):** 2단 (지도 좌, 시설 우)

### 시설 그리드
- **모바일:** 1단
- **태블릿 (sm):** 2단

---

## 스타일 가이드

### 타이포그래피
- **페이지 제목:** `ty-h1`
- **섹션 제목:** `ty-h2`
- **서브섹션 제목:** `ty-h3`
- **설명:** `ty-lead`, `ty-body`
- **캡션:** `ty-caption`

### 간격
- 섹션 제목 하단: `mb-12`
- Feature 카드 간: `gap-8`
- Gallery 이미지 간: `gap-8`
- 이미지-캡션 간: `space-y-4`

### 색상
- **제목:** foreground (기본)
- **설명:** muted-foreground
- **아이콘:** primary
- **주차 안내 배경:** primary/5

---

## 콘텐츠 전략

### Features Section
4가지 핵심 가치 전달:
1. **자연광과 공간감** - 물리적 편안함
2. **미니멀 디자인** - 정신적 편안함
3. **식물 요소** - 건강과 웰빙
4. **프라이버시** - 심리적 안전감

### Gallery Section
실제 공간 이미지로 신뢰 구축:
1. 접수/대기 공간
2. 치료실
3. 상담 공간

### Facilities Section
실용적 정보 제공:
- 편의 시설 목록
- 주차 안내

---

## UX 특징

### 시각적 계층
1. **개념 소개** (Features) → 추상적
2. **실제 이미지** (Gallery) → 구체적
3. **위치/시설** (Facilities) → 실용적
4. **CTA** (방문 유도)

### 호버 효과
- 시설 카드: 배경색 변화
- CTA 버튼: warm-glow 효과

---

## 접근성 고려사항

### 이미지
- `alt` 속성: 각 공간 설명

### 시맨틱 HTML
- `<h1>`: 페이지 제목
- `<h2>`: 주요 섹션
- `<h3>`: 서브섹션
- `<h4>`: 주차 안내

### 아이콘
- 텍스트 레이블과 함께 사용
- 아이콘만으로 의미 전달하지 않음

---

## 성능 최적화

### 이미지
- Gallery에서 일반 `<img>` 태그 사용 (Next.js Image로 변경 권장)
- 현재: 최적화 없음
- 개선안: Next.js Image 컴포넌트 사용

**개선 예시:**
```tsx
<Image
  src={image.src}
  alt={image.title}
  width={600}
  height={320}
  className="w-full h-80 object-cover rounded-lg soft-shadow"
/>
```

---

## 데이터 관리

### 시설 정보 관리
- `constants/facilities.ts`에서 중앙 관리
- 아이콘 + 레이블 쌍으로 구성
- 추가/제거 용이

### 갤러리 이미지
- 현재: 페이지 내 하드코딩
- 개선안: constants로 분리 가능

```typescript
// constants/space.ts (제안)
export const GALLERY_IMAGES = [
  {
    src: "/images/hero-clinic.jpg",
    title: "Reception & Waiting Area",
    description: "..."
  },
  // ...
]
```

---

## 개선 가능 사항

### 1. 이미지 최적화
Gallery의 `<img>`를 Next.js `<Image>`로 변경

### 2. 가상 투어
360도 파노라마 또는 비디오 투어 추가

### 3. 예약 시스템 연동
CTA에서 직접 예약 가능한 시스템 연동

### 4. 접근성 개선
지도에 대한 텍스트 대안 제공

---

## 관련 파일

- `src/app/space/page.tsx` - 메인 페이지
- `src/constants/facilities.ts` - 시설 데이터
- `src/shared/ui/Section.tsx` - 섹션 래퍼
- `src/shared/ui/Map.tsx` - 지도 컴포넌트
- `public/images/` - 갤러리 이미지
