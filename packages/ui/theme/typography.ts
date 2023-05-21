import { createTheme } from "@mui/material/styles";

const { breakpoints } = createTheme();

// TODO everything in theme folder actually
export const TypographyConfig = {
  fontFamily: `"Nunito", "sans-serif"`,
  fontStyle: "normal",
  h1: {
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "48px",
    [breakpoints.down("md")]: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "36px",
    },
  },
  h2: {
    fontSize: "24px",
    lineHeight: "36px",
    fontWeight: 600,
    [breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
  h3: {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 400,
  },
  h4: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 300,
  },
  body: {
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "24px",
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
