import { Theme } from "@mui/material";

export const Button = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      height: 44,
      minWidth: 150,
      borderRadius: 8,
      fontWeight: 600,

      "&:disabled": {
        backgroundColor: theme.palette.background.default,
      },
    }),
    contained: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.primary.main,
      // "&:disabled": {
      //   border: "1px solid #BDBDBD",
      //   color: Colors.TEXT_LIGHT_2,
      //   backgroundColor: Colors.GREY_300,
      // },
    }),
    outlined: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.text.secondary,

      // "&:disabled": {
      //   border: "1px solid #BDBDBD",
      //   color: Colors.TEXT_LIGHT_2,
      //   backgroundColor: Colors.GREY_300,
      // },
    }),
  },
};
