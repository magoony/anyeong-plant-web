import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // Typography token utilities
    function ({ addComponents, theme }: any) {
      addComponents({
        ".ty-display": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-display)",
          lineHeight: "1.05",
          letterSpacing: theme("letterSpacing.tight2"),
          fontWeight: "700",
        },
        ".ty-h1": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-h1)",
          lineHeight: theme("lineHeight.snugPlus"),
          letterSpacing: theme("letterSpacing.tight1"),
          fontWeight: "700",
        },
        ".ty-h2": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-h2)",
          lineHeight: "1.25",
          fontWeight: "600",
        },
        ".ty-h3": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-h3)",
          lineHeight: "1.35",
          fontWeight: "600",
        },
        ".ty-lead": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-lead)",
          lineHeight: theme("lineHeight.comfy"),
          fontWeight: "500",
        },
        ".ty-body": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-body)",
          lineHeight: theme("lineHeight.prose"),
          fontWeight: "400",
        },
        ".ty-caption": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-caption)",
          lineHeight: "1.5",
          fontWeight: "500",
          color: "rgb(113 113 122)",
        },
        ".ty-overline": {
          fontFamily: "var(--ff-sans)",
          fontSize: "var(--fs-over)",
          lineHeight: "1.4",
          fontWeight: "600",
          letterSpacing: theme("letterSpacing.overline"),
          textTransform: "uppercase",
        },
        ".btn": {
          fontFamily: "var(--ff-sans)",
          fontSize: "16px",
          lineHeight: "1.2",
          fontWeight: "600",
        },
        ".nav": {
          fontFamily: "var(--ff-sans)",
          fontSize: "14.5px",
          lineHeight: "1.3",
          fontWeight: "600",
        },
      });
    },
  ],
} satisfies Config;
