import { createTheme, PaletteMode } from "@mui/material";
import { TypographyConfig } from "./typography";
import { components } from "./components";
import { getPaletteConfig } from "./palette";

export const useCustomTheme = (mode: PaletteMode) =>
  createTheme({
    palette: { ...getPaletteConfig(mode) },
    typography: TypographyConfig,
    components,
  });
