"use client";

import { useEffect, useState } from "react";
import { themes, defaultTheme, type Theme } from "@/config/themes";

const THEME_STORAGE_KEY = "site-theme";

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // 클라이언트에서만 실행 (SSR 문제 방지)
  useEffect(() => {
    setMounted(true);
    const savedThemeId = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedThemeId && themes[savedThemeId]) {
      setCurrentTheme(themes[savedThemeId]);
      applyTheme(themes[savedThemeId]);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    // CSS 변수 업데이트
    root.style.setProperty("--background", theme.colors.background);
    root.style.setProperty("--foreground", theme.colors.foreground);
    root.style.setProperty("--card", theme.colors.card);
    root.style.setProperty("--card-foreground", theme.colors.cardForeground);
    root.style.setProperty("--popover", theme.colors.popover);
    root.style.setProperty(
      "--popover-foreground",
      theme.colors.popoverForeground
    );
    root.style.setProperty("--primary", theme.colors.primary);
    root.style.setProperty(
      "--primary-foreground",
      theme.colors.primaryForeground
    );
    root.style.setProperty("--secondary", theme.colors.secondary);
    root.style.setProperty(
      "--secondary-foreground",
      theme.colors.secondaryForeground
    );
    root.style.setProperty("--muted", theme.colors.muted);
    root.style.setProperty("--muted-foreground", theme.colors.mutedForeground);
    root.style.setProperty("--accent", theme.colors.accent);
    root.style.setProperty(
      "--accent-foreground",
      theme.colors.accentForeground
    );
    root.style.setProperty("--destructive", theme.colors.destructive);
    root.style.setProperty(
      "--destructive-foreground",
      theme.colors.destructiveForeground
    );
    root.style.setProperty("--border", theme.colors.border);
    root.style.setProperty("--input", theme.colors.input);
    root.style.setProperty("--ring", theme.colors.ring);
    root.style.setProperty("--glow-warm", theme.colors.glowWarm);
    root.style.setProperty("--shadow-soft", theme.colors.shadowSoft);
  };

  const changeTheme = (themeId: string) => {
    const theme = themes[themeId];
    if (!theme) return;

    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
  };

  return {
    currentTheme,
    changeTheme,
    themes: Object.values(themes),
    mounted,
  };
}
