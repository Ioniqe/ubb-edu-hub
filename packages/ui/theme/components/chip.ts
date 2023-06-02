import { Theme } from "@mui/material";

export const Chip = {
  styleOverrides: {
    root: {
      marginRight: 8,
      marginTop: 4,
    },
    filled: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.highlight.primary,
      },
    }),
    outlined: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.primary.main,
    }),
  },
};
