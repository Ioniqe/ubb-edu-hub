import { Components, Theme } from "@mui/material";

import { Button } from "./button";
import { TextField } from "./text-field";
import { FilledInput } from "./filled-input";
import { InputLabel } from "./input-label";
import { Select } from "./select";

export const components: Components<Theme> = {
  MuiButton: Button,
  MuiTextField: TextField,
  MuiFilledInput: FilledInput,
  MuiInputLabel: InputLabel,
  // MuiSelect: Select,
};
