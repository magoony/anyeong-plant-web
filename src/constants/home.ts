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
  image: "/images/banner01.png",
  title: "정확한 진단과 섬세한 손길\n환자의 입장에서 진료합니다.",
  subtitle: "편안함과 정밀함이 만나는 곳, 안녕플란트치과",
  cta: {
    text: "예약하기",
    link: "/contact",
  },
};

// About Section
export const ABOUT = {
  image: "/images/team-care.png",
  title: "정직함과 정밀함으로\n완성하는 진심의 진료",
  paragraphs: [
    "안녕플란트치과는 환자 한 분 한 분의 이야기에 귀 기울이며, 치료가 아닌 사람의 마음을 다루는 진료를 지향합니다. 빠르게 고치는 것보다 오래도록 편안한 상태를 유지하는 것, 그것이 진정한 치료의 본질이라 믿습니다.",
    "우리는 모든 과정을 정직하게 설명하고, 정밀하게 계획합니다. 편안함과 자연스러움이 조화를 이루는 곳, 진심 어린 케어로 시작되는 건강한 미소의 여정에 안녕플란트치과가 함께하겠습니다.",
  ],
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
  image: "/images/font_desk.png",
  title: "진료 이전에, 안녕을 느끼는 공간",
  paragraphs: [
    "아치 구조와 간접조명이 만들어내는 부드러운 빛의 흐름 속에서 치료의 긴장을 내려놓고 차분한 마음으로 머무를 수 있습니다. 치과의 냉정함 대신 따뜻한 온기와 여유로운 공기가 감도는, 편안한 휴식 같은 시간이 흐릅니다.",
    "안녕플란트치과의 모든 공간은 환자의 시선과 동선을 중심으로 설계되었습니다. 첫 인사에서 진료의 순간까지 이어지는 정제된 디자인 속에 따뜻한 배려와 진정성 있는 환대가 자연스럽게 스며 있습니다.",
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
