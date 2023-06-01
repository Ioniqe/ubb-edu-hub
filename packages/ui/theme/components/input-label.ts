import { Colors } from "../../enums";

export const InputLabel = {
  styleOverrides: {
    root: {
      color: Colors.TEXT,
      "&.Mui-focused": {
        color: `${Colors.MAIN_BLUE} !important`,
        borderColor: "red !important",
      },
      "&.Mui-error": {
        color: `${Colors.RED_TEST} !important`,
      },
    },
  },
};
