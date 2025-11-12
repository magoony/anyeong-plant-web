import { img } from '@/lib/cloudflare-images';

export interface Doctor {
  id: string;
  image: string;
  name: string;
  title: string;
  quote: string;
  philosophy?: string;
  description?: string;
  education?: string[];
  experience?: string;
  mission?: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "sangwoo-ahn",
    image: img("/images/doctor1.png"),
    name: "안상우 대표원장",
    title: "임플란트 · 보철 전문의",
    quote: "환자에게 꼭 필요한 치료만, 정직하고 정확하게",
    philosophy: "환자에게 꼭 필요한 치료만, 정직하고 정확하게",
    description:
      "환자 한 분 한 분의 구강 상태와 생활습관을 충분히 이해한 후, 가장 합리적이고 예측 가능한 치료 방향을 제시하는 것을 원칙으로 합니다. 불필요한 시술보다 장기적인 안정성을 중시하며, 정확한 진단과 섬세한 수복으로 편안한 결과를 만들어갑니다.",
    education: [
      "단국대학교 치과대학 치의학과 졸업",
      "Osstem Basic Seminar 수료",
      "Exocone Live Digital Training Course 수료",
      "7주 연속 임상 세미나 수료",
      "단국대학교치과병원 인턴 및 레지던트 수료",
      "국가고시원 임상지도위원",
      "대한치과보철학회 정회원",
      "대한임상치과학회 정회원",
    ],
    experience:
      "다년간의 보철 및 임플란트 임상 경험을 바탕으로 정확한 교합과 기능 회복을 목표로 진료하고 있습니다. 디지털 시스템을 활용한 정밀 진단과 수복을 통해 환자 개개인에게 맞춤형 치료를 제공합니다.",
    mission:
      "치료 결과뿐 아니라 과정에서도 신뢰와 편안함을 느낄 수 있는 진료, 그것이 제가 추구하는 진정한 의미의 '좋은 치과치료'입니다.",
  },
  {
    id: "yongtae-park",
    image: img("/images/doctor2.png"),
    name: "박용태 외과 과장",
    title: "외과 · 임플란트 전문의",
    quote: "정확한 수술, 예측 가능한 결과",
    philosophy: "정확한 수술, 예측 가능한 결과",
    description:
      "모든 치료는 철저한 분석과 계획에서 시작된다고 믿습니다. 수술의 정밀함과 안전을 최우선으로 하며, 치료 이후의 회복 과정까지 책임지는 의료를 실천합니다.",
    education: [
      "단국대학교 치과대학 치의학과 졸업",
      "보건복지부인정 통합치의학과 전문의",
      "前 단국대학교치과병원 인턴 및 레지던트 수료",
      "前 서울시립북부병원 치과 과장",
      "대한치과보철학회 정회원",
      "대한턱관절교합학회 정회원",
      "대한심미치과학회 정회원",
      "대한임상치과학회 정회원",
    ],
    experience:
      "풍부한 구강외과 수술 경험을 바탕으로, 임플란트 및 발치, 골이식 등 고난도 수술을 안정적으로 진행하고 있습니다. 정확한 진단과 세심한 수술로 환자분들이 안심할 수 있는 진료를 제공합니다.",
    mission:
      "'빠르게'보다 '안전하게', '많이'보다 '정확하게' — 환자분의 신뢰를 최우선으로 하는 외과 진료를 지향합니다.",
  },
  {
    id: "yunsik-jung",
    image: img("/images/doctor3.png"),
    name: "정윤식 진료과장",
    title: "보철 · 심미치료 전문의",
    quote: "자연스러움 속의 완성도",
    philosophy: "자연스러움 속의 완성도",
    description:
      "보철 치료는 기능의 회복뿐 아니라 아름다움의 회복이기도 합니다. 자연치와의 조화를 중시하며, 치료 후에도 오랫동안 편안하게 유지될 수 있는 결과를 목표로 합니다.",
    education: [
      "단국대학교 치과대학 치의학과 졸업",
      "보건복지부인정 통합치의학과 전문의",
      "AIC Implant Basic Course 수료",
      "XPS Sinus Bone Graft Course 수료",
      "대한구강악안면임플란트학회 정회원",
      "대한심미치과학회 정회원",
      "대한치과보철학회 정회원",
    ],
    experience:
      "심미보철과 디지털 보철 분야에서 다년간의 경험을 쌓으며 자연스럽고 정밀한 보철물 제작을 위해 노력하고 있습니다. 환자 맞춤형 분석과 진단으로 재치료 없는 완성도를 지향합니다.",
    mission:
      "'치료의 흔적이 남지 않는' 결과물, 그 속에 담긴 세심함과 배려가 저의 진료 철학입니다.",
  },
];
