좋아요! 바로 붙여쓸 수 있게 **타이포 위계 중심 Tailwind 시스템**을 세팅용 파일로 드릴게요. (Next.js 13+ 기준)

---

# 1) 폰트 로드 (app/layout.tsx의 `<head>` 혹은 `_document.tsx`)

```html
<link
  href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css"
  rel="stylesheet"
/>
```

---

# 2) 전역 토큰 (styles/tokens.css)

```css
:root {
  /* Font families */
  --ff-sans: "SUIT Variable", system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans KR",
    "Apple SD Gothic Neo", Arial, sans-serif;

  /* Font sizes (clamp) */
  --fs-display: clamp(40px, 6vw, 72px);
  --fs-h1: clamp(32px, 4.2vw, 48px);
  --fs-h2: clamp(24px, 2.6vw, 32px);
  --fs-h3: clamp(20px, 2vw, 24px);
  --fs-lead: clamp(16px, 1.7vw, 20px);
  --fs-body: clamp(16px, 1.2vw, 18px);

  /* Others */
  --fs-caption: 13px;
  --fs-over: 12px;
}
```

---

# 3) Tailwind 설정 (tailwind.config.ts)

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px", // 넓게 쓰지 않고 안정적 가독 폭
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--ff-sans)"],
      },
      letterSpacing: {
        tight2: "-0.02em",
        tight1: "-0.01em",
        overline: "0.08em",
      },
      lineHeight: {
        snugPlus: "1.15",
        comfy: "1.6",
        prose: "1.7",
      },
      /* Tailwind의 타입 스케일은 유지하되, 토큰 유틸로 semantic 계층을 씌웁니다. */
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            maxWidth: "68ch",
            "--tw-prose-body": theme("colors.zinc.800"),
            "--tw-prose-headings": theme("colors.zinc.900"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // 타입 토큰 유틸
    function ({ addComponents, theme }: any) {
      addComponents({
        ".ty-display": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-display)",
          lineHeight: "1.05",
          letterSpacing: theme("letterSpacing.tight2"),
          fontWeight: "700",
        },
        ".ty-h1": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-h1)",
          lineHeight: theme("lineHeight.snugPlus"),
          letterSpacing: theme("letterSpacing.tight1"),
          fontWeight: "700",
        },
        ".ty-h2": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-h2)",
          lineHeight: "1.25",
          fontWeight: "600",
        },
        ".ty-h3": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-h3)",
          lineHeight: "1.35",
          fontWeight: "600",
        },
        ".ty-lead": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-lead)",
          lineHeight: theme("lineHeight.comfy"),
          fontWeight: "500",
        },
        ".ty-body": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-body)",
          lineHeight: theme("lineHeight.prose"),
          fontWeight: "400",
        },
        ".ty-caption": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-caption)",
          lineHeight: "1.5",
          fontWeight: "500",
          color: "rgb(113 113 122)" /* zinc-500 */,
        },
        ".ty-overline": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "var(--fs-over)",
          lineHeight: "1.4",
          fontWeight: "600",
          letterSpacing: theme("letterSpacing.overline"),
          textTransform: "uppercase",
        },
        /* 버튼/네비 */
        ".btn": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "16px",
          lineHeight: "1.2",
          fontWeight: "600",
        },
        ".nav": {
          fontFamily: theme("fontFamily.sans").join(", "),
          fontSize: "14.5px",
          lineHeight: "1.3",
          fontWeight: "600",
        },
      });
    },
  ],
};
export default config;
```

---

# 4) 글로벌 레이어 (app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 토큰 import */
@import "./../styles/tokens.css";

/* 기본 글꼴 */
html {
  font-family: var(--ff-sans);
}

/* 본문 가독 폭 (선택) */
.prose-limit {
  max-width: 68ch;
}

/* 카드 캡션 색상 토큰이 필요하면 여기서 조정 가능 */
```

---

# 5) 사용 예시 (Hero & 섹션)

```tsx
export default function HomeHero() {
  return (
    <section className="container py-20 md:py-28">
      <p className="ty-overline text-zinc-500">Clinic Philosophy</p>
      <h1 className="ty-display mt-3">자연스러운 미소의 회복</h1>
      <p className="ty-lead mt-5 text-zinc-600">
        치료의 과시가 아니라, 편안함과 정직함으로 본래의 균형을 되찾는 진료를
        지향합니다.
      </p>
      <div className="mt-8 flex gap-3">
        <a className="btn inline-flex items-center rounded-xl px-5 py-3 bg-black text-white hover:opacity-90">
          예약하기
        </a>
        <a className="btn inline-flex items-center rounded-xl px-5 py-3 bg-zinc-100 text-zinc-900">
          진료 안내
        </a>
      </div>
    </section>
  );
}
```

```tsx
function SectionExample() {
  return (
    <section className="container py-16 md:py-20">
      <span className="ty-overline text-zinc-500">Implant · Aesthetic</span>
      <h2 className="ty-h2 mt-2">진료 철학</h2>
      <p className="ty-body prose-limit mt-4 text-zinc-700">
        과잉진료를 지양하고, 환자별 교합·치주 상태를 종합적으로 평가하여 장기적
        안정성을 목표로 계획합니다.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-2xl border border-zinc-200 p-6">
          <h3 className="ty-h3">편안함 중심의 설계</h3>
          <p className="ty-body mt-2 text-zinc-600">
            라텍스 냄새, 조명, 사운드까지 고려해 긴장을 낮추는 동선.
          </p>
          <p className="ty-caption mt-3">대기·상담·진료 이동 최소화</p>
        </article>
        {/* ... 카드 반복 */}
      </div>
    </section>
  );
}
```

---

# 6) 운영 가이드 (짧게)

- 히어로: `.ty-display` 1–2줄 + `.ty-lead` 최대 120자.
- 섹션 공통 패턴: `.ty-overline` → `.ty-h2` → `.ty-lead/.ty-body` → 카드 → `.ty-caption`.
- 본문 폭: 긴 문단에는 `.prose-limit` 적용.
- 숫자 정렬: 표/가격에는 `tabular-nums`(CSS: `font-variant-numeric: tabular-nums;`) 추가.
