export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  glowWarm: string;
  shadowSoft: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
}

export const themes: Record<string, Theme> = {
  default: {
    id: "default",
    name: "Warm Natural",
    description: "따뜻하고 자연스러운 아이보리 톤 (기본)",
    colors: {
      background: "42 33% 97%", // warm ivory #FAF7F2
      foreground: "25 14% 40%", // gentle brown #6E6258
      card: "42 33% 98%",
      cardForeground: "25 14% 40%",
      popover: "42 33% 99%",
      popoverForeground: "25 14% 40%",
      primary: "25 14% 40%", // gentle brown
      primaryForeground: "42 33% 97%",
      secondary: "38 25% 75%", // pale gold #CBBBA0
      secondaryForeground: "25 14% 25%",
      muted: "42 20% 94%",
      mutedForeground: "25 14% 50%",
      accent: "150 25% 85%", // soft mint #CFE6DA
      accentForeground: "25 14% 30%",
      destructive: "0 70% 60%",
      destructiveForeground: "42 33% 97%",
      border: "42 20% 88%",
      input: "42 20% 88%",
      ring: "38 25% 75%",
      glowWarm: "38 60% 80%",
      shadowSoft: "25 20% 70%",
    },
  },

  ocean: {
    id: "ocean",
    name: "Ocean Blue",
    description: "시원하고 청량한 오션 블루",
    colors: {
      background: "210 40% 98%", // light ocean blue
      foreground: "220 20% 30%", // deep navy
      card: "210 35% 97%",
      cardForeground: "220 20% 30%",
      popover: "210 40% 99%",
      popoverForeground: "220 20% 30%",
      primary: "210 90% 45%", // vibrant blue
      primaryForeground: "210 40% 98%",
      secondary: "200 70% 70%", // sky blue
      secondaryForeground: "220 20% 20%",
      muted: "210 30% 92%",
      mutedForeground: "220 15% 45%",
      accent: "180 50% 85%", // light cyan
      accentForeground: "220 20% 25%",
      destructive: "0 70% 60%",
      destructiveForeground: "210 40% 98%",
      border: "210 25% 85%",
      input: "210 25% 85%",
      ring: "200 70% 70%",
      glowWarm: "200 80% 75%",
      shadowSoft: "210 30% 65%",
    },
  },

  forest: {
    id: "forest",
    name: "Forest Green",
    description: "자연 친화적인 포레스트 그린",
    colors: {
      background: "140 30% 97%", // light green
      foreground: "140 30% 25%", // forest green
      card: "140 25% 96%",
      cardForeground: "140 30% 25%",
      popover: "140 30% 98%",
      popoverForeground: "140 30% 25%",
      primary: "140 60% 40%", // deep green
      primaryForeground: "140 30% 97%",
      secondary: "120 40% 70%", // soft green
      secondaryForeground: "140 30% 20%",
      muted: "140 20% 92%",
      mutedForeground: "140 20% 45%",
      accent: "160 40% 85%", // mint green
      accentForeground: "140 30% 25%",
      destructive: "0 70% 60%",
      destructiveForeground: "140 30% 97%",
      border: "140 20% 85%",
      input: "140 20% 85%",
      ring: "120 40% 70%",
      glowWarm: "120 60% 75%",
      shadowSoft: "140 25% 65%",
    },
  },

  sunset: {
    id: "sunset",
    name: "Sunset Pink",
    description: "부드럽고 따뜻한 선셋 핑크",
    colors: {
      background: "10 40% 97%", // light pink
      foreground: "340 20% 35%", // deep rose
      card: "10 35% 96%",
      cardForeground: "340 20% 35%",
      popover: "10 40% 98%",
      popoverForeground: "340 20% 35%",
      primary: "340 65% 55%", // rose pink
      primaryForeground: "10 40% 97%",
      secondary: "20 60% 75%", // peach
      secondaryForeground: "340 20% 25%",
      muted: "10 30% 93%",
      mutedForeground: "340 15% 45%",
      accent: "30 50% 88%", // light peach
      accentForeground: "340 20% 30%",
      destructive: "0 70% 60%",
      destructiveForeground: "10 40% 97%",
      border: "10 25% 87%",
      input: "10 25% 87%",
      ring: "20 60% 75%",
      glowWarm: "340 70% 80%",
      shadowSoft: "340 25% 70%",
    },
  },

  modern: {
    id: "modern",
    name: "Modern Gray",
    description: "세련되고 모던한 그레이 톤",
    colors: {
      background: "0 0% 98%", // light gray
      foreground: "0 0% 25%", // dark gray
      card: "0 0% 97%",
      cardForeground: "0 0% 25%",
      popover: "0 0% 99%",
      popoverForeground: "0 0% 25%",
      primary: "0 0% 35%", // medium gray
      primaryForeground: "0 0% 98%",
      secondary: "0 0% 70%", // light gray
      secondaryForeground: "0 0% 20%",
      muted: "0 0% 93%",
      mutedForeground: "0 0% 45%",
      accent: "200 10% 88%", // blue gray
      accentForeground: "0 0% 25%",
      destructive: "0 70% 60%",
      destructiveForeground: "0 0% 98%",
      border: "0 0% 88%",
      input: "0 0% 88%",
      ring: "0 0% 70%",
      glowWarm: "0 0% 80%",
      shadowSoft: "0 0% 70%",
    },
  },

  lavender: {
    id: "lavender",
    name: "Lavender Purple",
    description: "우아하고 편안한 라벤더 퍼플",
    colors: {
      background: "270 35% 97%", // light lavender
      foreground: "280 25% 30%", // deep purple
      card: "270 30% 96%",
      cardForeground: "280 25% 30%",
      popover: "270 35% 98%",
      popoverForeground: "280 25% 30%",
      primary: "270 60% 55%", // lavender
      primaryForeground: "270 35% 97%",
      secondary: "280 40% 75%", // soft purple
      secondaryForeground: "280 25% 25%",
      muted: "270 25% 92%",
      mutedForeground: "280 20% 45%",
      accent: "260 45% 88%", // light purple
      accentForeground: "280 25% 30%",
      destructive: "0 70% 60%",
      destructiveForeground: "270 35% 97%",
      border: "270 20% 86%",
      input: "270 20% 86%",
      ring: "280 40% 75%",
      glowWarm: "270 65% 80%",
      shadowSoft: "270 25% 70%",
    },
  },
};

export const themeList = Object.values(themes);
export const defaultTheme = themes.default;
