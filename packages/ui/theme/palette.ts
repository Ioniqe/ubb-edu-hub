import { PaletteMode } from "@mui/material";
import { Colors } from "../enums";

declare module "@mui/material/styles/createPalette" {
  interface Palette extends Palette {
    highlight: { primary: string };
  }

  interface PaletteOptions extends PaletteOptions {
    highlight?: { primary: string };
  }
}

export const getPaletteConfig = (mode: PaletteMode) => ({
  ...(mode === "light"
    ? {
        // palette values for light mode
        primary: { main: Colors.MAIN_BLUE },
        secondary: { main: Colors.MAIN_LIGHT },
        background: {
          default: Colors.MAIN,
          paper: Colors.MAIN_LIGHT,
        },
        text: { primary: Colors.TEXT },
        highlight: { primary: Colors.MAIN_BLUE_LIGHT },
      }
    : {
        // dark theme
        // palette values for colorblind students (initially 'dark' theme)
        primary: { main: Colors.RED_TEST },
        secondary: { main: Colors.RED_TEST },
        background: {
          default: Colors.RED_TEST,
          paper: Colors.RED_TEST,
        },
        text: { primary: Colors.RED_TEST },
        highlight: { primary: Colors.RED_TEST_LIGHT },
      }),
});
