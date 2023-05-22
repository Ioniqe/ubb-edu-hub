import { PaletteMode } from "@mui/material";
import { Colors } from "../enums/colors";

export const getPaletteConfig = (mode: PaletteMode) => ({
  mode: mode as PaletteMode,
  ...(mode === "light"
    ? {
        // palette values for light mode
        primary: { main: Colors.MAIN_BLUE },
        background: {
          default: Colors.MAIN,
          paper: Colors.MAIN_LIGHT,
        },
        text: { primary: Colors.TEXT },
      }
    : {
        // dark theme
        // palette values for colorblind students (initially 'dark' theme)
        primary: { main: Colors.RED_TEST },
        background: {
          default: Colors.MAIN,
          paper: Colors.MAIN_LIGHT,
        },
        text: { primary: Colors.TEXT },
      }),
});
