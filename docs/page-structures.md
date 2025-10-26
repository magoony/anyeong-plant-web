# 페이지 구성 문서

안녕플란트치과 웹사이트의 각 페이지 구성을 정리한 문서입니다.

---

## 1. 메인 페이지 (/)

**파일 위치:** `src/app/page.tsx`

### 섹션 구성

#### 1.1 Hero Section
- **컴포넌트:** `Hero`
- **내용:** 메인 히어로 이미지 및 타이틀
- **데이터 소스:** `HERO` (constants/home)
- **특징:** 80vh 높이의 풀스크린 히어로
- **구성 요소:**
  - 메인 이미지
  - 타이틀 & 서브타이틀
  - CTA 버튼

#### 1.2 About Section
- **배경:** 기본 (흰색)
- **레이아웃:** 2단 그리드 (이미지 + 텍스트)
- **데이터 소스:** `ABOUT` (constants/home)
- **구성 요소:**
  - 클리닉 팀 이미지 (800x500px)
  - 소개 타이틀
  - 설명 문단 (다중)
  - CTA 버튼

#### 1.3 Doctors Section
- **배경:** accent
- **레이아웃:** 3단 그리드
- **컴포넌트:** `DoctorCard` (반복)
- **데이터 소스:** `DOCTORS` (constants/doctors)
- **구성 요소:**
  - 섹션 타이틀 & 설명
  - 의사 카드 목록 (id, image, name, title, quote)

#### 1.4 Treatments Section
- **배경:** card
- **레이아웃:** 4단 그리드
- **컴포넌트:** `TreatmentCard` (반복)
- **데이터 소스:** `CORE_TREATMENTS` (constants/home)
- **구성 요소:**
  - 섹션 타이틀 & 설명
  - 치료 항목 카드 (image, title, description, link)

#### 1.5 Philosophy Section
- **배경:** accent
- **레이아웃:** 2단 그리드 (이미지 + 텍스트)
- **데이터 소스:** `PHILOSOPHY` (constants/home)
- **구성 요소:**
  - 의사 이미지 (800x500px)
  - 진료 철학 타이틀
  - 설명 문단 (다중)
  - 자세히 보기 링크

#### 1.6 Space Section
- **배경:** 기본 (흰색)
- **레이아웃:** 2단 그리드 (텍스트 + 이미지, 역순)
- **데이터 소스:** `SPACE_SECTION` (constants/home)
- **구성 요소:**
  - 공간 소개 타이틀
  - 설명 문단 (다중)
  - 자세히 보기 링크
  - 공간 이미지 (800x500px)

#### 1.7 Testimonials Section
- **배경:** 기본 (흰색)
- **컴포넌트:** `TestimonialCarousel`
- **데이터 소스:** `TESTIMONIALS` (constants/testimonials)
- **구성 요소:**
  - 섹션 타이틀 & 설명
  - 후기 캐러셀

#### 1.8 CTA Section
- **배경:** card
- **레이아웃:** 중앙 정렬
- **데이터 소스:** `CTA_SECTION` (constants/home)
- **구성 요소:**
  - CTA 타이틀
  - CTA 설명
  - 예약 버튼 (warm-glow 효과)

---

## 2. Contact 페이지 (/contact)

**파일 위치:** `src/app/contact/page.tsx`

### 페이지 구성

#### 2.1 Header Section
- **레이아웃:** 중앙 정렬
- **구성 요소:**
  - 페이지 타이틀 ("Get in Touch")
  - 서브 설명

#### 2.2 Main Contact Section
- **레이아웃:** 2단 그리드 (폼 + 정보 카드)

##### 좌측: Contact Form
- **컴포넌트:** `ContactForm`
- **기능:** 문의 폼

##### 우측: Contact Information Cards
1. **Location Card**
   - 아이콘: MapPin
   - 주소: 123 Gangnam-daero, Gangnam-gu, Seoul

2. **Phone Card**
   - 아이콘: Phone
   - 전화번호: +82 2-1234-5678

3. **Email Card**
   - 아이콘: Mail
   - 이메일: info@anyeongplant.com

4. **Opening Hours Card**
   - 아이콘: Clock
   - 운영 시간:
     - 월-금: 9:00 AM - 6:00 PM
     - 토: 9:00 AM - 2:00 PM
     - 일: 휴무

#### 2.3 Map Section
- **배경:** card
- **구성 요소:**
  - Google Maps 임베드 (iframe)
  - 강남구 위치 표시

### Metadata
- **Title:** "Contact Us - Anyeong Plant Dental Clinic"
- **Description:** 연락처 및 위치 정보

---

## 3. Doctor 페이지 (/doctor)

**파일 위치:** `src/app/doctor/page.tsx`

### 페이지 특징
- **타입:** Client Component ("use client")
- **기능:** Hash 기반 스크롤 네비게이션 (각 의사별 섹션 ID)
- **데이터 소스:** `DOCTORS` (constants/doctors)

### 섹션 구성 (각 의사별 반복)

#### 레이아웃
- **배경:** 번갈아가며 (기본/accent)
- **그리드:** 5단 (이미지 2칸 + 텍스트 3칸)

#### 좌측: 의사 프로필 이미지
- **크기:** 600x800px
- **특징:** sticky 포지셔닝 (top-24)
- **스타일:** rounded, soft-shadow

#### 우측: 의사 정보 (space-y-12)

1. **기본 정보**
   - 의사 이름 (h1)
   - 직책 (lead)

2. **진료 철학**
   - 타이틀: "진료 철학"
   - 철학 인용문
   - 상세 설명

3. **학력 및 경력**
   - 타이틀: "학력 및 경력"
   - 학력 리스트 (bullet points)

4. **임상 경험**
   - 타이틀: "임상 경험"
   - 경험 설명

5. **진료 목표**
   - 타이틀: "진료 목표"
   - 목표 설명

---

## 4. Treatments 페이지 (/treatments)

**파일 위치:** `src/app/treatments/page.tsx`

### 페이지 특징
- **타입:** Client Component ("use client")
- **기능:** Hash 기반 스크롤 네비게이션 (각 치료별 섹션 ID)
- **데이터 소스:** `TREATMENTS` (constants/treatments)

### 페이지 구성

#### 4.1 Header Section
- **레이아웃:** 중앙 정렬
- **구성 요소:**
  - 페이지 타이틀 ("Our Treatments")
  - 서브 설명

#### 4.2 Treatment Items Section (각 치료별 반복)

##### 레이아웃
- **그리드:** 2단 (이미지 + 텍스트)
- **특징:** 짝수/홀수 번갈아가며 순서 변경
- **ID:** scroll-mt-20 (스크롤 오프셋)

##### 구성 요소

1. **치료 이미지**
   - 크기: 800x400px
   - 스타일: rounded, soft-shadow

2. **치료 정보**
   - 치료명 (h2)
   - 설명 (lead)
   - 상세 정보 (body)

3. **FAQ 섹션**
   - 타이틀: "Frequently Asked Questions"
   - **컴포넌트:** `Accordion`
   - 질문-답변 리스트 (접기/펼치기)

4. **구분선**
   - 각 치료 항목 사이 (마지막 항목 제외)

#### 4.3 CTA Section
- **배경:** card
- **레이아웃:** 중앙 정렬
- **구성 요소:**
  - 타이틀: "Not sure which treatment is right for you?"
  - 설명
  - 상담 예약 버튼 (→ /contact)

---

## 5. Space 페이지 (/space)

**파일 위치:** `src/app/space/page.tsx`

### 페이지 구성

#### 5.1 Header Section
- **레이아웃:** 중앙 정렬
- **구성 요소:**
  - 페이지 타이틀 ("Our Space")
  - 서브 설명
  - 소개 문단

#### 5.2 Features Section
- **배경:** card
- **레이아웃:** 2x2 그리드
- **구성 요소:**
  1. **Natural Light & Open Space**
     - 자연광과 개방감 설명

  2. **Clean, Minimal Design**
     - 스칸디나비안/일본 미학 기반 디자인

  3. **Biophilic Elements**
     - 실내 식물과 자연 요소

  4. **Privacy & Comfort**
     - 프라이버시와 편안함

#### 5.3 Gallery Section ("Take a Tour")
- **배경:** 기본
- **레이아웃:** 3단 그리드
- **구성 요소:** 각 이미지별
  - 이미지 (h-80, rounded, soft-shadow)
  - 타이틀
  - 설명 (caption)

**이미지 목록:**
1. Reception & Waiting Area
2. Treatment Room
3. Consultation Area

#### 5.4 Location & Facilities Section
- **배경:** card
- **레이아웃:** 2단 그리드

##### 좌측: 지도
- **컴포넌트:** `Map`

##### 우측: 시설 정보

1. **시설 정보 그리드**
   - **데이터 소스:** `FACILITIES` (constants/facilities)
   - **레이아웃:** 2단 그리드
   - **구성:** 아이콘 + 레이블

2. **주차 안내**
   - **데이터 소스:** `PARKING_INFO` (constants/facilities)
   - **스타일:** primary 배경 카드
   - **구성:** 아이콘 + 타이틀 + 설명

#### 5.5 CTA Section
- **레이아웃:** 중앙 정렬
- **구성 요소:**
  - 타이틀: "Experience the difference"
  - 설명
  - 방문 예약 버튼 (→ /contact)

### Metadata
- **Title:** "Our Space - Anyeong Plant Dental Clinic"
- **Description:** 공간 및 시설 소개

---

## 공통 사용 컴포넌트

### UI Components
- `Hero` - 히어로 섹션
- `Section` - 섹션 래퍼 (배경 변형 지원)
- `TreatmentCard` - 치료 항목 카드
- `DoctorCard` - 의사 소개 카드
- `TestimonialCarousel` - 후기 캐러셀
- `ContactForm` - 문의 폼
- `Map` - 지도 컴포넌트
- `Button` - shadcn/ui 버튼
- `Card`, `CardContent` - shadcn/ui 카드
- `Accordion` - shadcn/ui 아코디언

### 데이터 상수
- `constants/home` - 메인 페이지 데이터
- `constants/doctors` - 의사 정보
- `constants/treatments` - 치료 항목
- `constants/testimonials` - 후기
- `constants/facilities` - 시설 정보

### 디자인 시스템
- **배경 변형:** default, accent, card
- **타이포그래피:** ty-h1, ty-h2, ty-h3, ty-lead, ty-body, ty-caption
- **효과:** soft-shadow, warm-glow
- **반응형:** md, lg 브레이크포인트 사용

---

## 네비게이션 구조

```
/ (Home)
├── /contact (Contact)
├── /doctor (Our Doctors)
├── /treatments (Treatments)
└── /space (Our Space)
```

모든 페이지는 `pt-20` (padding-top) 적용하여 헤더 공간 확보
