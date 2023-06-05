import { createTheme } from "@mui/material/styles";

const { breakpoints } = createTheme();

export const TypographyConfig = {
  fontFamily: `"Nunito", "sans-serif"`,
  fontStyle: "normal",
  h1: {
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: "56px",
    [breakpoints.down("md")]: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "36px",
    },
  },
  h2: {
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: 600,
    [breakpoints.down("md")]: {
      fontSize: "26px",
      lineHeight: "26px",
    },
  },
  h3: {
    fontSize: "26px",
    lineHeight: "30px",
    fontWeight: 400,
  },
  h4: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "24px",
    lineHeight: "24px",
    fontWeight: 300,
  },
  body: {
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "16px",
  },
  caption: {
    fontWeight: 200,
    fontSize: "12px",
    lineHeight: "18px",
  },
  button: {
    textTransform: "none" as const,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
    fontWeight: 400,
    [breakpoints.down("md")]: {
      fontSize: "14px!important",
      lineHeight: "24px!important",
    },
  },
};
