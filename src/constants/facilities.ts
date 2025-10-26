import {
  Calendar,
  Users,
  Wifi,
  UsersRound,
  Baby,
  Armchair,
  DoorOpen,
  Accessibility,
  ParkingSquare,
  Car,
  type LucideIcon,
} from "lucide-react";

export interface Facility {
  icon: LucideIcon;
  label: string;
}

export const FACILITIES: Facility[] = [
  { icon: Calendar, label: "예약" },
  { icon: Users, label: "남/녀 화장실 구분" },
  { icon: Wifi, label: "무선 인터넷" },
  { icon: UsersRound, label: "단체 이용 가능" },
  { icon: Baby, label: "유아의자" },
  { icon: Armchair, label: "대기공간" },
  { icon: DoorOpen, label: "출입구 휠체어 이용가능" },
  { icon: Accessibility, label: "좌석 휠체어 이용가능" },
  { icon: ParkingSquare, label: "장애인 주차구역" },
  { icon: Car, label: "주차" },
];

export const PARKING_INFO = {
  title: "주차 안내",
  description:
    "주차가능 무료 - 주차동 건물이라 주차 시설이 매우 여유있습니다.",
};
