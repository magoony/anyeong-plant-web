export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const HOME_CTA: CTAContent = {
  title: "새로운 미소를 시작할 준비가 되셨나요?",
  description: "지금 상담을 예약하시고, 오직 당신을 위한 세심한 진료를 경험해보세요.",
  buttonText: "상담 예약하기",
  buttonLink: "/contact",
};

export const TREATMENTS_CTA: CTAContent = {
  title: "어떤 치료가 적합할지 고민되시나요?",
  description: "상담을 예약하시면 가장 적합한 치료 방법을 함께 찾아드립니다",
  buttonText: "상담 예약하기",
  buttonLink: "/contact",
};

export const SPACE_CTA: CTAContent = {
  title: "차이를 경험해보세요",
  description: "직접 방문하셔서 저희 공간이 어떻게 치과 진료 경험을 바꿀 수 있는지 확인해보세요",
  buttonText: "방문 예약하기",
  buttonLink: "/contact",
};
