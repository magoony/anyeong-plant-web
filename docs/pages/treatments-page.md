# Treatments 페이지 (/treatments) 구성 문서

**파일 위치:** `src/app/treatments/page.tsx`
**타입:** Client Component ("use client")

## 개요

병원에서 제공하는 치료 서비스의 상세 정보를 제공하는 페이지입니다. 각 치료 항목별로 설명, 상세 정보, FAQ를 포함하여 환자가 충분한 정보를 얻을 수 있도록 구성되어 있습니다.

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
- **Hash 기반 네비게이션**: URL의 hash를 읽어 특정 치료 섹션으로 자동 스크롤
- **사용 예시**: `/treatments#implant` → 임플란트 섹션으로 스크롤
- **딜레이:** 100ms (페이지 렌더링 완료 후 스크롤)
- **스크롤 동작:** smooth, block: "start"

---

## 데이터 소스

**파일:** `constants/treatments.ts`
**상수:** `TREATMENTS`

### TREATMENTS 데이터 구조 (추정)

```typescript
interface FAQ {
  q: string    // 질문
  a: string    // 답변
}

interface Treatment {
  id: string          // 고유 ID (URL hash용)
  title: string       // 치료명
  description: string // 간단한 설명 (1-2문장)
  details: string     // 상세 설명 (긴 문단)
  image: string       // 대표 이미지
  faqs: FAQ[]        // FAQ 목록
}

export const TREATMENTS: Treatment[] = [...]
```

---

## 페이지 구조

```
<main className="pt-20">
  └── Header Section
  └── Treatment Items Section
  └── CTA Section (card background)
</main>
```

---

## 섹션별 상세 구성

### 1. Header Section

**레이아웃:** 중앙 정렬
**스타일:** `text-center mb-16`

#### 구조
```tsx
<Section>
  <div className="text-center mb-16">
    <h1 className="ty-h1 mb-4">
      Our Treatments
    </h1>
    <p className="ty-lead text-muted-foreground max-w-2xl mx-auto">
      Comprehensive dental care focused on your comfort and long-term health
    </p>
  </div>
  ...
</Section>
```

---

### 2. Treatment Items Section

**레이아웃:** Vertical Stack (`space-y-16`)

```tsx
<div className="space-y-16">
  {TREATMENTS.map((treatment, index) => (
    <div key={treatment.id} id={treatment.id} className="scroll-mt-20">
      ...
    </div>
  ))}
</div>
```

#### 스크롤 오프셋
- **클래스:** `scroll-mt-20`
- **효과:** 스크롤 시 상단에서 20 간격 확보 (헤더 공간)

---

### 2.1 개별 치료 항목 구조

**레이아웃:** Grid (`md:grid-cols-2`)
**간격:** `gap-12 lg:gap-16`

#### 교차 레이아웃
```typescript
index % 2 === 1 ? "md:flex-row-reverse" : ""
```
- 짝수: 이미지 좌측, 텍스트 우측
- 홀수: 텍스트 좌측, 이미지 우측

---

#### A. 치료 이미지

**Grid 순서:**
```typescript
className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
```

**구조:**
```tsx
<div className={...}>
  <Image
    src={treatment.image}
    alt={treatment.title}
    width={800}
    height={400}
    className="rounded-lg soft-shadow w-full h-[400px] object-cover"
  />
</div>
```

**특징:**
- 크기: 800x400px (2:1 비율)
- 높이 고정: h-[400px]
- object-cover: 비율 유지하며 영역 채우기

---

#### B. 치료 정보

**Grid 순서:**
```typescript
className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
```

**구조:**
```
<div className="space-y-6">
  ├── 1. 기본 정보 (타이틀 + 설명)
  ├── 2. 상세 정보
  └── 3. FAQ 섹션
</div>
```

---

##### B-1. 기본 정보

```tsx
<div>
  <h2 className="ty-h2 mb-3">
    {treatment.title}
  </h2>
  <p className="ty-lead text-muted-foreground">
    {treatment.description}
  </p>
</div>
```

**구성:**
- 치료명 (h2)
- 간단한 설명 (lead, muted)

---

##### B-2. 상세 정보

```tsx
<p className="ty-body text-foreground/90">
  {treatment.details}
</p>
```

**특징:**
- 긴 형태의 상세 설명
- 색상: foreground/90 (약간 연하게)

---

##### B-3. FAQ 섹션

```tsx
<div>
  <h3 className="ty-h3 mb-4">
    Frequently Asked Questions
  </h3>
  <Accordion type="single" collapsible className="w-full">
    {treatment.faqs.map((faq, idx) => (
      <AccordionItem key={idx} value={`item-${idx}`}>
        <AccordionTrigger className="text-left">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          {faq.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</div>
```

**Accordion 설정:**
- **type:** "single" (한 번에 하나만 열림)
- **collapsible:** true (열린 항목 다시 클릭 시 닫힘)

**AccordionItem 구성:**
- **key:** FAQ 인덱스
- **value:** `item-${idx}` (고유 식별자)

**스타일:**
- **Trigger:** text-left (왼쪽 정렬)
- **Content:** text-muted-foreground

---

### 2.2 구분선

```tsx
{index < TREATMENTS.length - 1 && (
  <div className="mt-16 border-b border-border/50" />
)}
```

**조건:**
- 마지막 치료 항목 뒤에는 표시하지 않음
- 간격: mt-16
- 스타일: border-b, 50% 불투명도

---

### 3. CTA Section

**배경:** card
**레이아웃:** 중앙 정렬

```tsx
<Section background="card" className="text-center">
  <div className="max-w-2xl mx-auto">
    <h2 className="ty-h2 mb-4">
      Not sure which treatment is right for you?
    </h2>
    <p className="ty-lead text-muted-foreground mb-8">
      Schedule a consultation and we'll help you find the best path forward
    </p>
    <Link
      href="/contact"
      className="inline-block bg-primary text-primary-foreground
                 px-8 py-4 rounded-lg hover:warm-glow transition-all"
    >
      Book Consultation
    </Link>
  </div>
</Section>
```

**역할:**
- 치료 선택에 대한 부담 경감
- 상담 예약 유도
- Contact 페이지로 연결

---

## 사용된 컴포넌트

### Shared UI
- `Section` - `@/shared/ui/Section`
- `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`
  - `@/shared/ui/shadcn/accordion`

### Next.js
- `Link` - next/link
- `Image` - next/image

### React
- `useEffect` - 클라이언트 사이드 스크롤 처리

---

## 네비게이션 플로우

### 1. 홈페이지에서 진입
```
Home Page (Treatments Section)
  └── TreatmentCard 클릭
      └── /treatments#[treatment.id]
          └── 해당 치료 섹션으로 스크롤
```

### 2. 직접 URL 접근
```
/treatments#implant
  └── 페이지 로드 후
      └── useEffect 실행
          └── #implant 섹션으로 smooth 스크롤
```

### 3. CTA 클릭
```
Book Consultation 버튼
  └── /contact 페이지로 이동
```

---

## 반응형 디자인

### 모바일
- 그리드 → 세로 스택
- 이미지 상단, 정보 하단
- 교차 레이아웃 무시

### 데스크톱 (md 이상)
- 2단 그리드
- 교차 레이아웃 적용
  - 짝수: 이미지 좌, 텍스트 우
  - 홀수: 텍스트 좌, 이미지 우

---

## 스타일 가이드

### 타이포그래피
- **페이지 제목:** `ty-h1`
- **치료명:** `ty-h2`
- **FAQ 제목:** `ty-h3`
- **설명 (lead):** `ty-lead`
- **본문:** `ty-body`

### 색상
- **제목:** foreground (기본)
- **설명/답변:** muted-foreground
- **상세 정보:** foreground/90

### 간격
- 치료 항목 간: `space-y-16`
- 정보 블록 간: `space-y-6`
- 그리드 간격: `gap-12` (md), `gap-16` (lg)

---

## UX 특징

### 교차 레이아웃
- 시각적 리듬감 형성
- 읽기 피로도 감소
- 각 치료 항목이 독립적으로 인식됨

### FAQ Accordion
- 긴 콘텐츠를 효율적으로 정리
- 사용자가 관심 있는 질문만 확장
- 페이지 길이 최적화

### Smooth 스크롤
- 부드러운 네비게이션 경험
- 사용자가 어디로 이동하는지 명확히 파악

---

## 접근성 고려사항

### 시맨틱 HTML
- `<h1>`: 페이지 주제
- `<h2>`: 각 치료명
- `<h3>`: FAQ 섹션 제목

### Accordion 접근성
- shadcn/ui Accordion은 WAI-ARIA 패턴 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환

### 이미지
- `alt` 속성: 치료명 제공

---

## 성능 최적화

### Image 최적화
- Next.js Image 컴포넌트 사용
- 자동 이미지 최적화
- Lazy loading

### Accordion 동작
- 초기 렌더링 시 모든 FAQ 콘텐츠는 접혀있음
- 필요한 콘텐츠만 확장하여 표시

---

## 데이터 관리

### 치료 추가/제거
1. `constants/treatments.ts`에서 `TREATMENTS` 배열 수정
2. 자동으로 페이지에 반영 (map 함수)
3. 홈페이지 Treatments Section도 자동 업데이트 (CORE_TREATMENTS 사용)

### 필수 필드
- `id`, `title`, `description`, `details`, `image`
- `faqs` (최소 1개 이상 권장)

---

## 개선 가능 사항

### 메타데이터 추가
현재 페이지 레벨 메타데이터 없음. 추가 권장:

```typescript
export const metadata: Metadata = {
  title: "Our Treatments - Anyeong Plant Dental Clinic",
  description: "Comprehensive dental care including [치료 목록]. Learn about our treatments and book a consultation."
}
```

### 동적 메타데이터
각 치료별 고유 URL 생성 시 동적 메타데이터 활용 가능

---

## 관련 파일

- `src/app/treatments/page.tsx` - 메인 페이지
- `src/constants/treatments.ts` - 치료 데이터
- `src/constants/home.ts` - CORE_TREATMENTS (홈페이지용)
- `src/shared/ui/Section.tsx` - 섹션 래퍼
- `src/shared/ui/TreatmentCard.tsx` - 홈페이지 카드 (참조용)
- `src/shared/ui/shadcn/accordion.tsx` - Accordion 컴포넌트
