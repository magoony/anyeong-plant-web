export interface CoreTreatment {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const CORE_TREATMENTS: CoreTreatment[] = [
  {
    image: "/images/treatment-implant.jpg",
    title: "임플란트",
    description:
      "자연스러운 미소를 되찾아주는, 안정적이고 오래 지속되는 임플란트 치료.",
    link: "/treatments#implant",
  },
  {
    image: "/images/treatment-aesthetic.jpg",
    title: "심미 보철",
    description:
      "개개인의 조화와 아름다움을 섬세하게 복원하는 맞춤형 심미 치료.",
    link: "/treatments#aesthetic",
  },
  {
    image: "/images/treatment-gum.jpg",
    title: "잇몸 재생",
    description:
      "건강한 잇몸을 회복시켜 구강의 균형과 기초를 튼튼히 하는 재생 치료.",
    link: "/treatments#gum",
  },
  {
    image: "/images/treatment-general.jpg",
    title: "일반 진료",
    description:
      "자연 치아를 보호하고 일상의 편안함을 지켜주는 예방 중심의 진료.",
    link: "/treatments#general",
  },
];

// Hero Section
export const HERO = {
  image: "/images/reception-banner.png",
  title: "당신의 새로운 미소가 여기서 시작됩니다",
  subtitle: "편안함과 정밀함이 만나는 곳, 안녕플란트치과",
  cta: {
    text: "예약하기",
    link: "/contact",
  },
};

// About Section
export const ABOUT = {
  image: "/images/team-care.png",
  title: "정직함과 정밀함으로 완성하는 새로운 미소",
  paragraphs: [
    "안녕플란트치과는 진료가 편안하고 투명하며, 개인에게 맞춰져야 한다고 믿습니다. 우리의 철학은 단순합니다 — 우리는 ‘치아’가 아닌 ‘사람’을 봅니다.",
    "모든 진료는 장기적인 편안함과 자연스러운 심미성을 목표로 설계됩니다. 의학적 정밀함과 진심 어린 케어가 조화를 이루는 곳, 신뢰에서 시작되는 미소 여정에 함께하겠습니다.",
  ],
  cta: {
    text: "의료진 보기",
    link: "/doctor",
  },
};

// Doctors Section
export const DOCTORS_SECTION = {
  title: "의료진 소개",
  description: "여러분의 편안함과 세심한 케어를 위해 헌신하는 전문 의료진",
};

// Treatments Section
export const TREATMENTS_SECTION = {
  title: "핵심 진료",
  description:
    "자연스러운 결과와 정밀함이 조화를 이루는, 개인 맞춤형 전문 진료",
};

// Philosophy Section
export const PHILOSOPHY = {
  image: "/images/doctor-portrait.jpg",
  title: "우리는 치아가 아닌 사람을 봅니다",
  paragraphs: [
    "안녕플란트치과의 진료 철학은 편안함, 정직함, 그리고 장기적인 케어에 있습니다. 치료 그 자체보다 환자 본연의 자연스러운 미소를 회복시키는 데 초점을 맞춥니다.",
    "병원이라기보다 ‘웰니스 스튜디오’에 가까운 공간에서, 따뜻한 환대와 임상적 정밀함이 조화를 이루는 경험을 제공합니다.",
  ],
  link: {
    text: "김유준 대표원장 소개 →",
    href: "/doctor",
  },
};

// Space Section
export const SPACE_SECTION = {
  image: "/images/treatment-detail.jpg",
  title: "편안함을 위한 공간 설계",
  paragraphs: [
    "밝고 자연광이 가득한 공간, 우드톤과 식물이 어우러진 미니멀한 인테리어로 따뜻함과 안정감을 느낄 수 있습니다.",
    "모든 디테일은 청결함, 따스함, 차분함을 중심으로 설계되었습니다. 회복과 편안함이 우선이 되는 공간입니다.",
  ],
  link: {
    text: "공간 둘러보기 →",
    href: "/space",
  },
};

// Testimonials Section
export const TESTIMONIALS_SECTION = {
  title: "환자 후기",
  description: "안녕플란트치과를 직접 경험한 환자분들의 진솔한 이야기",
};

// CTA Section
export const CTA_SECTION = {
  title: "새로운 미소를 시작할 준비가 되셨나요?",
  description:
    "지금 상담을 예약하시고, 오직 당신을 위한 세심한 진료를 경험해보세요.",
  button: {
    text: "상담 예약하기",
    link: "/contact",
  },
};
