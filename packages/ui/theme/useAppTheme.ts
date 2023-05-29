import { create } from "zustand";
import { PaletteMode, Theme } from "@mui/material";
import { useCustomTheme } from "./useCustomTheme";

type ThemeStore = {
  theme: Theme;
  colorMode: PaletteMode;

  switchColorMode: () => void;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useAppTheme = create<ThemeStore>((set, get) => ({
  theme: useCustomTheme("light"),
  colorMode: "light",

  switchColorMode: () => {
    const currentColorMode = get().colorMode === "light" ? "dark" : "light";
    set({
      colorMode: currentColorMode,
      theme: useCustomTheme(currentColorMode),
    });
  },
}));
