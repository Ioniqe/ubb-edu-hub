import { Theme } from "@mui/material";

export const Tab = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.primary,
      "&.Mui-selected": {
        color: theme.palette.primary.main,
      },
    }),
  },
};
