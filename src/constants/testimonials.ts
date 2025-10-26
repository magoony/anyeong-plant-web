export interface Testimonial {
  name: string;
  treatment: string;
  rating: number;
  comment: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "박지은",
    treatment: "임플란트",
    rating: 5,
    comment:
      "처음부터 끝까지 정말 친절하게 설명해주시고, 통증도 거의 없었어요. 이제 자연치아처럼 편하게 사용하고 있습니다. 강력 추천합니다!",
  },
  {
    name: "김민수",
    treatment: "심미 보철",
    rating: 5,
    comment:
      "앞니 보철을 받았는데 자연스럽게 너무 잘 맞춰주셨어요. 주변 사람들도 치료받은 걸 전혀 모를 정도예요. 정말 만족스럽습니다.",
  },
  {
    name: "이수정",
    treatment: "잇몸 재생 치료",
    rating: 5,
    comment:
      "잇몸이 많이 내려가서 고민이었는데, 재생 치료 후 정말 좋아졌어요. 원장님께서 꼼꼼하게 케어해주셔서 감사합니다.",
  },
  {
    name: "최현우",
    treatment: "일반 진료",
    rating: 5,
    comment:
      "정기 검진을 받으러 갔는데 깨끗하고 편안한 분위기가 정말 좋았어요. 스케일링도 전혀 아프지 않게 해주셔서 감동했습니다.",
  },
  {
    name: "정미영",
    treatment: "라미네이트",
    rating: 5,
    comment:
      "결혼 전에 앞니 색상과 모양이 고민이었는데, 라미네이트 시술 후 너무 예뻐졌어요. 정말 자연스럽고 만족스럽습니다!",
  },
];
