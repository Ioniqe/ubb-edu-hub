import { Theme } from "@mui/material";

export const FilledInput = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.background.default,
      color: `${theme.palette.primary.main} !important`,
      borderRadius: "8px !important",

      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-error": {
        borderColor: `1.5px solid ${theme.palette.error.main}`,
        backgroundColor: `${theme.palette.text.secondary} !important`,
        color: theme.palette.error.main,
      },
      "&.Mui-disabled": {
        backgroundColor: `${theme.palette.background.default} !important`,
        borderColor: theme.palette.secondary.main,
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: "none",
      },
      "&.MuiFilledInput-underline:hover:before": {
        borderBottom: "none",
      },
      "&.MuiFilledInput-underline:after": {
        borderBottom: "none",
      },
    }),
  },
};
