import { Colors } from "../../enums/colors";

// TODO
export const FilledInput = {
  styleOverrides: {
    root: {
      backgroundColor: Colors.MAIN_LIGHT,
      color: Colors.TEXT,
      borderRadius: "8px !important",
      border: `1.5px solid ${Colors.TEXT}`,
      "&.Mui-focused": {
        backgroundColor: `${Colors.MAIN_BLUE} !important`,
        color: Colors.TEXT,
      },
      "&.Mui-error": {
        border: `1px solid ${Colors.RED_TEST}`,
        backgroundColor: `${Colors.WHITE} !important`,
        color: Colors.TEXT,
      },
      "&.Mui-disabled": {
        backgroundColor: `${Colors.MAIN_LIGHT} !important`,
        borderColor: Colors.MAIN_LIGHT,
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
    },
  },
};
