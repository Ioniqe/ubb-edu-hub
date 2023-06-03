import { create } from "zustand";
import { PaletteMode, Theme } from "@mui/material";
import { useCustomTheme } from "./useCustomTheme";

type ThemeStore = {
  theme: Theme;
  colorMode: PaletteMode;

  switchColorMode: () => void;
};

export const useAppTheme = create<ThemeStore>((set) => {
  const currColor = (sessionStorage.getItem("theme") ?? "light") as PaletteMode;
  return {
    theme: useCustomTheme(currColor),
    colorMode: currColor,

    switchColorMode: () => {
      const color = sessionStorage.getItem("theme") ?? "light";
      const currentColorMode = color === "light" ? "dark" : "light";

      sessionStorage.setItem("theme", currentColorMode);

      set({
        colorMode: currentColorMode,
        theme: useCustomTheme(currentColorMode),
      });
    },
  };
});
