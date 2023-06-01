export const Select = {
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
      "& .MuiSelect-select": {
        // Custom styles for the select element
        padding: 2,
        borderRadius: "8px",
        backgroundColor: "lightgray",
        color: "white",
      },
      "& .MuiSelect-icon": {
        // Custom styles for the select icon
        color: "red",
      },
    },
  },
};
