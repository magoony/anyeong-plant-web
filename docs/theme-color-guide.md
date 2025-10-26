# 테마 색상 가이드

## 기본 테마 (Warm Natural)

안녕플란트치과의 기본 색상 팔레트입니다.

---

## 색상별 사용처

### 1. **background** (배경색)
**색상:** `42 33% 97%` → Warm Ivory `#FAF7F2`
**HSL:** Hue 42 (따뜻한 노란색 계열), Saturation 33%, Lightness 97%

**사용처:**
- ✅ 페이지 전체 배경
- ✅ 카드 내부 배경
- ✅ 모달/팝업 배경
- ✅ 드롭다운 메뉴 배경

**Tailwind 클래스:** `bg-background`

**예시:**
```tsx
<body className="bg-background">
<div className="bg-background rounded-lg">
```

---

### 2. **foreground** (전경색/기본 텍스트)
**색상:** `25 14% 40%` → Gentle Brown `#6E6258`
**HSL:** Hue 25 (갈색 계열), Saturation 14%, Lightness 40%

**사용처:**
- ✅ 본문 텍스트
- ✅ 제목 텍스트
- ✅ 버튼 텍스트
- ✅ 네비게이션 활성 메뉴

**Tailwind 클래스:** `text-foreground`

**예시:**
```tsx
<h1 className="text-foreground">안녕플란트치과</h1>
<p className="text-foreground">진료 안내</p>
```

---

### 3. **primary** (주요 액션 색상)
**색상:** `25 14% 40%` → Gentle Brown `#6E6258` (foreground와 동일)
**foreground:** `42 33% 97%` → Warm Ivory (반전)

**사용처:**
- ✅ 주요 버튼 배경 (예약, 제출 버튼)
- ✅ 링크 색상
- ✅ 강조 요소
- ✅ 아이콘 (시설 정보 등)

**Tailwind 클래스:**
- `bg-primary` (버튼 배경)
- `text-primary` (링크)
- `border-primary` (테두리)

**예시:**
```tsx
<Button className="bg-primary text-primary-foreground">예약하기</Button>
<a className="text-primary hover:underline">자세히 보기</a>
```

**실제 사용 예:**
- "Book Appointment" 버튼
- 테마 선택 체크 아이콘
- FloatingActionBar의 "상담문의" 버튼

---

### 4. **secondary** (보조 색상)
**색상:** `38 25% 75%` → Pale Gold `#CBBBA0`
**foreground:** `25 14% 25%` → Dark Brown

**사용처:**
- ✅ 보조 버튼
- ✅ 비활성 상태
- ✅ 구분선
- ✅ 섹션 제목 색상 (`text-secondary-foreground`)

**Tailwind 클래스:**
- `bg-secondary`
- `text-secondary-foreground`

**예시:**
```tsx
<Button variant="secondary">취소</Button>
<h2 className="text-secondary-foreground">진료 철학</h2>
```

**실제 사용 예:**
- Doctor 페이지의 섹션 제목 ("진료 철학", "학력 및 경력" 등)

---

### 5. **accent** (강조 배경)
**색상:** `150 25% 85%` → Soft Mint `#CFE6DA`
**foreground:** `25 14% 30%` → Dark Brown

**사용처:**
- ✅ 섹션 배경 (번갈아 사용)
- ✅ 강조 영역
- ✅ 하이라이트 배경
- ✅ 의사 학력 불릿 포인트

**Tailwind 클래스:**
- `bg-accent`
- `text-accent-foreground`

**예시:**
```tsx
<Section background="accent">
  <h2>Our Doctors</h2>
</Section>
```

**실제 사용 예:**
- 홈페이지 Doctors Section 배경
- 홈페이지 Philosophy Section 배경
- Doctor 페이지의 홀수 섹션 배경
- 학력 목록 불릿 포인트 (`bg-accent`)

---

### 6. **card** (카드 배경)
**색상:** `42 33% 98%` → Very Light Ivory (배경보다 약간 밝음)
**foreground:** `25 14% 40%` → Gentle Brown

**사용처:**
- ✅ 카드 컴포넌트 배경
- ✅ 섹션 배경 (배경과 구분 필요 시)
- ✅ 정보 박스
- ✅ Contact 카드

**Tailwind 클래스:**
- `bg-card`
- `text-card-foreground`

**예시:**
```tsx
<Section background="card">
  <Card>연락처 정보</Card>
</Section>
```

**실제 사용 예:**
- 홈페이지 Treatments Section 배경
- 홈페이지 CTA Section 배경
- Contact 페이지의 정보 카드 (Location, Phone, Email, Hours)
- Space 페이지의 Features Section

---

### 7. **muted** (약한 배경)
**색상:** `42 20% 94%` → Light Beige
**foreground:** `25 14% 50%` → Medium Brown

**사용처:**
- ✅ 비활성 요소
- ✅ 부가 정보 텍스트
- ✅ 플레이스홀더
- ✅ 보조 설명

**Tailwind 클래스:**
- `bg-muted`
- `text-muted-foreground`

**예시:**
```tsx
<p className="text-muted-foreground">부가 설명 텍스트</p>
<input placeholder="..." className="placeholder:text-muted-foreground" />
```

**실제 사용 예:**
- 섹션 설명 (`ty-lead text-muted-foreground`)
- FAQ 답변 텍스트
- 이미지 캡션
- 네비게이션 비활성 메뉴
- 의사 직책 표시

---

### 8. **border** (테두리)
**색상:** `42 20% 88%` → Light Border

**사용처:**
- ✅ 모든 테두리
- ✅ 구분선
- ✅ 카드 외곽선
- ✅ 입력 필드 테두리

**Tailwind 클래스:**
- `border`
- `border-border`
- `divide-border`

**예시:**
```tsx
<div className="border border-border rounded-lg">
<hr className="border-border" />
```

**실제 사용 예:**
- 네비게이션 하단 구분선
- 모바일 메뉴 상단 구분선
- 치료 항목 구분선 (`border-b border-border/50`)
- 테마 선택 색상 프리뷰 테두리

---

### 9. **destructive** (경고/삭제)
**색상:** `0 70% 60%` → Red
**foreground:** `42 33% 97%` → White

**사용처:**
- ✅ 삭제 버튼
- ✅ 오류 메시지
- ✅ 경고 알림

**Tailwind 클래스:**
- `bg-destructive`
- `text-destructive`

**예시:**
```tsx
<Button variant="destructive">삭제</Button>
<Alert variant="destructive">오류가 발생했습니다</Alert>
```

---

### 10. **특수 효과 색상**

#### **glow-warm** (따뜻한 글로우)
**색상:** `38 60% 80%`

**사용처:**
- ✅ 호버 시 글로우 효과
- ✅ 버튼 그림자

**Utility 클래스:** `.warm-glow`

```css
.warm-glow {
  box-shadow: 0 8px 32px -8px hsl(var(--glow-warm) / 0.3);
}
```

**예시:**
```tsx
<Button className="hover:warm-glow">예약하기</Button>
```

#### **shadow-soft** (부드러운 그림자)
**색상:** `25 20% 70%`

**사용처:**
- ✅ 이미지 그림자
- ✅ 카드 그림자

**Utility 클래스:** `.soft-shadow`

```css
.soft-shadow {
  box-shadow: 0 4px 24px -4px hsl(var(--shadow-soft) / 0.15);
}
```

**예시:**
```tsx
<Image className="rounded-lg soft-shadow" />
```

---

## 섹션별 배경 패턴

홈페이지는 배경을 번갈아가며 사용하여 시각적 리듬을 만듭니다:

```
Hero Section          → (이미지 배경)
About Section         → bg-background (기본 흰색)
Doctors Section       → bg-accent (민트)
Treatments Section    → bg-card (밝은 아이보리)
Philosophy Section    → bg-accent (민트)
Space Section         → bg-background (기본 흰색)
Testimonials Section  → bg-background (기본 흰색)
CTA Section           → bg-card (밝은 아이보리)
```

---

## 색상 팔레트 요약

| 색상 변수 | HSL | HEX (근사치) | 용도 |
|----------|-----|-------------|------|
| background | `42 33% 97%` | `#FAF7F2` | 페이지 배경 |
| foreground | `25 14% 40%` | `#6E6258` | 기본 텍스트 |
| primary | `25 14% 40%` | `#6E6258` | 주요 버튼, 링크 |
| secondary | `38 25% 75%` | `#CBBBA0` | 보조 요소 |
| accent | `150 25% 85%` | `#CFE6DA` | 강조 배경 |
| card | `42 33% 98%` | `#FCFAF7` | 카드 배경 |
| muted | `42 20% 94%` | `#F3F0EB` | 비활성 요소 |
| border | `42 20% 88%` | `#E6E0D7` | 테두리 |
| destructive | `0 70% 60%` | `#E63946` | 경고/삭제 |

---

## 디자인 철학

### 1. **따뜻하고 자연스러운 색감**
- 아이보리 베이스로 차가운 흰색 대신 따뜻한 느낌
- 갈색 계열 텍스트로 부드러운 가독성
- 민트 그린 악센트로 자연 친화적 이미지

### 2. **높은 가독성**
- 충분한 명도 대비 (WCAG AA 이상)
- 텍스트-배경 대비 최적화
- 주요 정보는 foreground 색상 사용

### 3. **시각적 계층**
- primary: 가장 중요한 액션
- secondary: 보조 정보
- muted: 부가 설명
- accent: 섹션 구분

---

## 테마 변경 시 주의사항

각 테마로 변경 시 다음 요소들이 자동으로 업데이트됩니다:

1. **모든 배경색** (`bg-background`, `bg-card`, `bg-accent`)
2. **모든 텍스트 색상** (`text-foreground`, `text-muted-foreground`)
3. **버튼 색상** (`bg-primary`, `text-primary-foreground`)
4. **테두리 색상** (`border-border`)
5. **그림자 효과** (`.warm-glow`, `.soft-shadow`)

따라서 **하드코딩된 색상 없이** 모든 UI가 테마에 맞게 변경됩니다!
