import React from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppTheme } from "../theme";

type MultiSelectProps = {
  label: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (option: string[]) => void;
};

export const MultiSelect = ({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}: MultiSelectProps) => {
  const { theme } = useAppTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;

    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: { xs: "100%", md: "47%" } }}>
      <Typography variant={"caption"} color={theme.palette.primary.main}>
        {label}
      </Typography>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        {options.map((_option) => (
          <MenuItem key={_option} value={_option}>
            {_option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
