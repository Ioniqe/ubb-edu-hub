import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppTheme } from "../theme";

type SelectProps = {
  label: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

// TODO make MultipleSelect and SimpleSelect one component
export const SimpleSelect = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}: SelectProps) => {
  const { theme } = useAppTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <FormControl sx={{ m: 1, width: { xs: "100%", md: "47%" } }}>
      <Typography
        sx={{ typography: "body" }}
        color={theme.palette.primary.main}
      >
        {label}
      </Typography>

      <Select value={selectedOption} label="" onChange={handleChange}>
        {options.map((_option) => (
          <MenuItem key={_option} value={_option}>
            {_option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
