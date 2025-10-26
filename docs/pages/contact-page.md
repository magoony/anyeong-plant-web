# Contact 페이지 (/contact) 구성 문서

**파일 위치:** `src/app/contact/page.tsx`

## 개요

연락처 정보, 문의 폼, 위치 정보를 제공하는 페이지입니다. 사용자가 병원에 문의하거나 방문 예약을 할 수 있도록 다양한 연락 수단을 제공합니다.

## 페이지 메타데이터

```typescript
export const metadata: Metadata = {
  title: "Contact Us - Anyeong Plant Dental Clinic",
  description: "Get in touch with Anyeong Plant Dental Clinic. Schedule your visit or ask any questions. Located in Gangnam-gu, Seoul."
}
```

## 전체 구조

```
<main className="pt-20">
  └── Header Section
  └── Main Contact Section
  └── Map Section (card background)
</main>
```

---

## 섹션별 상세 구성

### 1. Header Section

**레이아웃:** 중앙 정렬
**스타일:** `text-center mb-16`

#### 구조
```tsx
<div className="text-center mb-16">
  <h1 className="text-4xl md:text-5xl font-light mb-4">
    Get in Touch
  </h1>
  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
    We're here to answer your questions and schedule your visit
  </p>
</div>
```

#### 타이포그래피
- **제목:** 4xl (모바일) → 5xl (데스크톱), font-light
- **설명:** xl, muted-foreground, 최대 너비 2xl

---

### 2. Main Contact Section

**레이아웃:** Grid (md:grid-cols-2)
**최대 너비:** 6xl (max-w-6xl mx-auto)
**간격:** gap-12

#### 구조 개요
```
Grid (2 columns)
├── 좌측: Contact Form
└── 우측: Contact Information Cards
```

---

### 2.1 Contact Form (좌측)

**컴포넌트:** `ContactForm` (Client Component)
**파일 위치:** `./_components/ContactForm`

#### 예상 필드
- 이름
- 이메일
- 전화번호
- 문의 내용
- 제출 버튼

> 참고: ContactForm 컴포넌트의 상세 구현은 별도 파일에서 확인 필요

---

### 2.2 Contact Information Cards (우측)

**레이아웃:** Vertical Stack (space-y-6)
**컴포넌트:** shadcn/ui `Card`, `CardContent`

#### 카드 공통 구조
```tsx
<Card className="soft-shadow">
  <CardContent className="pt-6">
    <div className="flex items-start space-x-4">
      {/* 아이콘 */}
      <div className="w-12 h-12 rounded-full bg-accent/20
                      flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>
      {/* 내용 */}
      <div>
        <h3 className="font-medium mb-2">{제목}</h3>
        <p className="text-muted-foreground text-sm">{내용}</p>
      </div>
    </div>
  </CardContent>
</Card>
```

---

#### Card 1: Location (위치)

**아이콘:** `MapPin` (lucide-react)

```tsx
<h3>Location</h3>
<p>
  123 Gangnam-daero, Gangnam-gu<br />
  Seoul, South Korea
</p>
```

**데이터:**
- 주소: 123 Gangnam-daero, Gangnam-gu
- 도시: Seoul, South Korea

---

#### Card 2: Phone (전화)

**아이콘:** `Phone` (lucide-react)

```tsx
<h3>Phone</h3>
<p>+82 2-1234-5678</p>
```

**데이터:**
- 전화번호: +82 2-1234-5678

---

#### Card 3: Email (이메일)

**아이콘:** `Mail` (lucide-react)

```tsx
<h3>Email</h3>
<p>info@anyeongplant.com</p>
```

**데이터:**
- 이메일: info@anyeongplant.com

---

#### Card 4: Opening Hours (운영 시간)

**아이콘:** `Clock` (lucide-react)

```tsx
<h3>Opening Hours</h3>
<div className="text-muted-foreground text-sm space-y-1">
  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
  <p>Saturday: 9:00 AM - 2:00 PM</p>
  <p>Sunday: Closed</p>
</div>
```

**데이터:**
- 월-금: 9:00 AM - 6:00 PM
- 토: 9:00 AM - 2:00 PM
- 일: 휴무

---

### 3. Map Section

**배경:** card
**컴포넌트:** Google Maps iframe

#### 구조
```tsx
<Section background="card">
  <div className="aspect-video w-full rounded-lg overflow-hidden soft-shadow">
    <iframe
      src="[Google Maps Embed URL]"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Anyeong Plant Dental Clinic Location"
    />
  </div>
</Section>
```

#### iframe 속성
- **src:** Google Maps 임베드 URL (강남구 위치)
- **aspect-ratio:** 16:9 (aspect-video)
- **loading:** lazy (성능 최적화)
- **title:** 접근성을 위한 설명
- **allowFullScreen:** 전체화면 지원

---

## 사용된 컴포넌트

### Shared UI Components
- `Section` - `@/shared/ui/Section`
- `Card`, `CardContent` - `@/shared/ui/shadcn/card`

### Local Components
- `ContactForm` - `./_components/ContactForm`

### Next.js
- `Metadata` - next

### Icons (lucide-react)
- `MapPin` - 위치 아이콘
- `Phone` - 전화 아이콘
- `Clock` - 시간 아이콘
- `Mail` - 이메일 아이콘

---

## 레이아웃 특징

### 반응형 디자인

#### 모바일
- Contact Form과 Information Cards가 세로로 배치
- Form이 위, Cards가 아래

#### 데스크톱 (md 이상)
- 좌우 2단 레이아웃
- Form 좌측, Cards 우측

### 시각적 계층

1. **Header:** 페이지 목적 명확히 전달
2. **Main Content:** 폼과 정보 카드의 균형 잡힌 배치
3. **Map:** 시각적으로 위치 확인

---

## 스타일 가이드

### 카드 스타일
- `soft-shadow`: 부드러운 그림자 효과
- `rounded-lg`: 둥근 모서리
- `bg-accent/20`: 아이콘 배경 (20% 불투명도)

### 간격
- 카드 간 간격: `space-y-6`
- 그리드 간격: `gap-12`
- 헤더 하단 여백: `mb-16`

### 색상
- 제목: 기본 foreground
- 설명/내용: muted-foreground
- 아이콘: accent-foreground

---

## 접근성 (Accessibility)

### iframe
- `title` 속성으로 지도 설명 제공
- `referrerPolicy` 설정으로 보안 강화

### 카드 구조
- 아이콘과 텍스트의 명확한 구분
- 충분한 색상 대비
- `flex-shrink-0`로 아이콘 크기 고정

---

## 개선 가능 사항

### 연락처 정보 상수화
현재 하드코딩된 연락처 정보를 `constants` 파일로 분리하면 관리가 용이합니다.

```typescript
// constants/contact.ts (제안)
export const CONTACT_INFO = {
  location: {
    address: "123 Gangnam-daero, Gangnam-gu",
    city: "Seoul, South Korea"
  },
  phone: "+82 2-1234-5678",
  email: "info@anyeongplant.com",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed"
  }
}
```

### Google Maps URL
실제 클리닉 위치에 맞는 정확한 좌표로 업데이트 필요

---

## 관련 파일

- `src/app/contact/page.tsx` - 메인 페이지
- `src/app/contact/_components/ContactForm.tsx` - 문의 폼 (확인 필요)
- `src/shared/ui/Section.tsx` - 섹션 래퍼
- `src/shared/ui/shadcn/card.tsx` - 카드 컴포넌트
