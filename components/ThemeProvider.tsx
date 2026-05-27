"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme =
  | "savanna"
  | "midnight"
  | "earth"
  | "dust"
  | "forest"
  | "royal";

export interface ThemeConfig {
  id: Theme;
  label: string;
  swatch: string;
  dot: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: "savanna",
    label: "Savanna",
    swatch: "#F5F2EC",
    dot: "#111111",
  },
  {
    id: "midnight",
    label: "Midnight",
    swatch: "#0A0A0A",
    dot: "#C89B3C",
  },
  {
    id: "earth",
    label: "Earth",
    swatch: "#1C0F0A",
    dot: "#E8A855",
  },
  {
    id: "dust",
    label: "Dust",
    swatch: "#E4DDD0",
    dot: "#8B4513",
  },
  {
    id: "forest",
    label: "Forest",
    swatch: "#10221B",
    dot: "#7CFFB2",
  },
  {
    id: "royal",
    label: "Royal",
    swatch: "#140B2D",
    dot: "#B892FF",
  },
];

interface ThemeCtx {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: "savanna",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("savanna");

  /* LOAD SAVED THEME */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(
        "panduka-theme"
      ) as Theme | null;

      if (stored) {
        setThemeState(stored);
      }
    } catch {}
  }, []);

  /* APPLY THEME TO DOM */
  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);

    const themeMap: Record<
      Theme,
      Record<string, string>
    > = {
      savanna: {
        "--bg": "#F5F2EC",
        "--bg-alt": "#ECE5DA",
        "--card": "#FFFFFF",
        "--text": "#111111",
        "--text-muted": "#6B6257",
        "--accent": "#C89B3C",
        "--border": "rgba(0,0,0,0.08)",
        "--footer-bg": "#EAE2D5",
        "--footer-text": "#111111",
        "--footer-muted": "#7A7164",
        "--footer-border": "rgba(0,0,0,0.08)",
        "--btn-bg": "#111111",
        "--btn-text": "#FFFFFF",
        "--btn-bg-hover": "#C89B3C",
        "--btn-text-hover": "#111111",
      },

      midnight: {
        "--bg": "#0A0A0A",
        "--bg-alt": "#111111",
        "--card": "#151515",
        "--text": "#FFFFFF",
        "--text-muted": "#A1A1AA",
        "--accent": "#C89B3C",
        "--border": "rgba(255,255,255,0.08)",
        "--footer-bg": "#0D0D0D",
        "--footer-text": "#FFFFFF",
        "--footer-muted": "#A1A1AA",
        "--footer-border": "rgba(255,255,255,0.08)",
        "--btn-bg": "#C89B3C",
        "--btn-text": "#000000",
        "--btn-bg-hover": "#FFFFFF",
        "--btn-text-hover": "#000000",
      },

      earth: {
        "--bg": "#1C0F0A",
        "--bg-alt": "#26150E",
        "--card": "#2D1B13",
        "--text": "#FFF5EE",
        "--text-muted": "#C9B3A4",
        "--accent": "#E8A855",
        "--border": "rgba(255,255,255,0.08)",
        "--footer-bg": "#140B08",
        "--footer-text": "#FFF5EE",
        "--footer-muted": "#B89F91",
        "--footer-border": "rgba(255,255,255,0.08)",
        "--btn-bg": "#E8A855",
        "--btn-text": "#1C0F0A",
        "--btn-bg-hover": "#FFF5EE",
        "--btn-text-hover": "#1C0F0A",
      },

      dust: {
        "--bg": "#E4DDD0",
        "--bg-alt": "#D8D0C1",
        "--card": "#F5F1E8",
        "--text": "#2E221C",
        "--text-muted": "#7C6F66",
        "--accent": "#8B4513",
        "--border": "rgba(0,0,0,0.08)",
        "--footer-bg": "#D4C9B6",
        "--footer-text": "#2E221C",
        "--footer-muted": "#6F6258",
        "--footer-border": "rgba(0,0,0,0.08)",
        "--btn-bg": "#2E221C",
        "--btn-text": "#FFFFFF",
        "--btn-bg-hover": "#8B4513",
        "--btn-text-hover": "#FFFFFF",
      },

      forest: {
        "--bg": "#10221B",
        "--bg-alt": "#163126",
        "--card": "#1C3B2E",
        "--text": "#F3FFF9",
        "--text-muted": "#A6C4B5",
        "--accent": "#7CFFB2",
        "--border": "rgba(255,255,255,0.08)",
        "--footer-bg": "#0B1712",
        "--footer-text": "#F3FFF9",
        "--footer-muted": "#9AB8A8",
        "--footer-border": "rgba(255,255,255,0.08)",
        "--btn-bg": "#7CFFB2",
        "--btn-text": "#10221B",
        "--btn-bg-hover": "#FFFFFF",
        "--btn-text-hover": "#10221B",
      },

      royal: {
        "--bg": "#140B2D",
        "--bg-alt": "#1B123A",
        "--card": "#24174B",
        "--text": "#F5F0FF",
        "--text-muted": "#BBAED9",
        "--accent": "#B892FF",
        "--border": "rgba(255,255,255,0.08)",
        "--footer-bg": "#100822",
        "--footer-text": "#F5F0FF",
        "--footer-muted": "#B3A6D3",
        "--footer-border": "rgba(255,255,255,0.08)",
        "--btn-bg": "#B892FF",
        "--btn-text": "#140B2D",
        "--btn-bg-hover": "#FFFFFF",
        "--btn-text-hover": "#140B2D",
      },
    };

    const selectedTheme = themeMap[theme];

    Object.entries(selectedTheme).forEach(
      ([key, value]) => {
        root.style.setProperty(key, value);
      }
    );

    try {
      localStorage.setItem("panduka-theme", theme);
    } catch {}
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);