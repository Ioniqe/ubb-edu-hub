import { Colors } from "../../enums/colors";

// TODO
export const Button = {
  styleOverrides: {
    root: {
      height: 44,
      minWidth: 150,
      borderRadius: 8,
      fontWeight: 600,
      // "&:disabled": {
      //   color: Colors.TEXT_DISABLED,
      //   backgroundColor: Colors.GREY_300,
      // },
    },
    contained: {
      color: Colors.WHITE,
      // "&:disabled": {
      //   border: "1px solid #BDBDBD",
      //   color: Colors.TEXT_LIGHT_2,
      //   backgroundColor: Colors.GREY_300,
      // },
    },
  },
};
