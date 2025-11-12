# Cloudflare Images 설정 가이드

Cloudflare Pages 배포를 위한 이미지 최적화 설정

## 1. Cloudflare API 키 발급

### Account ID 확인
1. [Cloudflare Dashboard](https://dash.cloudflare.com) 로그인
2. 우측 사이드바에서 **Account ID** 복사

### API Token 생성
1. 프로필 → **API Tokens** → **Create Token**
2. **Template**: Custom token
3. **Permissions**:
   - Account → Cloudflare Images → Edit
4. **Create Token** → 토큰 복사

## 2. 환경 변수 설정

`.env.local` 파일에 값 입력:

```bash
# Cloudflare Images
NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH=<YOUR_ACCOUNT_HASH>

# Cloudflare API (for upload script)
CLOUDFLARE_ACCOUNT_ID=<YOUR_ACCOUNT_ID>
CLOUDFLARE_API_TOKEN=<YOUR_API_TOKEN>
```

**Account Hash 찾는 방법:**
- 업로드 후 이미지 URL 확인:
  `https://imagedelivery.net/<ACCOUNT_HASH>/...`

## 3. 패키지 설치

```bash
npm install
# or
yarn install
```

## 4. 이미지 업로드

```bash
npm run upload:images
# or
yarn upload:images
```

**업로드 결과:**
- ✅ 성공한 이미지 개수
- ❌ 실패한 이미지 목록
- 📝 `src/config/image-ids.ts` 자동 생성

## 5. Image Variants 설정 (선택사항)

Cloudflare Dashboard → Images → Variants:

### 추천 설정
- **public** (기본)
  - Fit: Scale down
  - Width: 없음 (원본 크기)

- **hero**
  - Fit: Cover
  - Width: 1920px
  - Height: 800px

- **card**
  - Fit: Cover
  - Width: 800px
  - Height: 600px

- **thumbnail**
  - Fit: Cover
  - Width: 400px
  - Height: 400px

## 6. 이미지 사용 방법

### 자동 생성된 상수 사용
```typescript
import { IMAGES } from '@/config/images';

<Image
  src={IMAGES.banner01}
  width={1920}
  height={800}
  alt="Banner"
/>
```

### 직접 URL 생성
```typescript
import { getImageUrl } from '@/config/images';

const url = getImageUrl('banner01.png', 'hero');
```

## 7. 새 이미지 추가 시

1. `public/images/` 에 이미지 파일 추가
2. `npm run upload:images` 실행
3. 자동으로 `image-ids.ts` 업데이트됨
4. `src/config/images.ts`의 `IMAGES` 객체에 추가

## 8. 배포 (Cloudflare Pages)

### 자동 배포
`.github/workflows/deploy.yml`:
```yaml
- name: Upload images to Cloudflare
  run: npm run upload:images
  env:
    CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### 수동 배포
1. 로컬에서 이미지 업로드
2. Cloudflare Pages에 푸시
3. 이미지는 이미 Cloudflare CDN에 있음

## 트러블슈팅

### 업로드 실패
- API Token 권한 확인
- Account ID 정확한지 확인
- 이미지 크기 제한: 10MB

### 이미지가 안 보임
- Account Hash 확인
- Cloudflare Dashboard에서 이미지 업로드 확인
- 브라우저 캐시 삭제

### 느린 로딩
- Image Variants 설정 확인
- Next.js Image 컴포넌트 사용
- `priority` prop 사용 (중요 이미지)

## 비용

- **무료**: 100,000 images, 500,000 requests/월
- **$5/월**: 100,000 images 추가, 무제한 requests

더 자세한 내용: [Cloudflare Images Docs](https://developers.cloudflare.com/images/)
