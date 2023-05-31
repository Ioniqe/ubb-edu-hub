import { PaletteMode } from "@mui/material";
import { Colors } from "../enums";

declare module "@mui/material/styles/createPalette" {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  interface Palette extends Palette {
    highlight: { primary: string };
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
        text: { primary: Colors.TEXT, secondary: Colors.WHITE },
        highlight: { primary: Colors.MAIN_BLUE_LIGHT },
        error: {
          main: Colors.ERROR,
        },
      }
    : {
        // palette values for colorblind students (initially 'dark' theme)
        primary: { main: Colors.MAIN_BLUE_CB },
        secondary: { main: Colors.MAIN_LIGHT_CB },
        background: {
          default: Colors.MAIN_CB,
          paper: Colors.MAIN_LIGHT_CB,
        },
        text: { primary: Colors.TEXT_CB, secondary: Colors.WHITE },
        highlight: { primary: Colors.MAIN_BLUE_LIGHT_CB },
        error: {
          main: Colors.ERROR_CB,
        },
      }),
});
