import React from "react";
import { Box, Paper, Tab, Tabs as MuiTabs } from "@mui/material";
import { SyntheticEvent } from "react";
import { useState } from "react";

export const Tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const content_array = [
    <h1>First Tab</h1>,
    <h1>Second Tab</h1>,
    <h1>Third Tab</h1>,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={value} onChange={handleChange}>
          <Tab label="Item One" value={0} />
          <Tab label="Item Two" value={1} />
          <Tab label="Item Three" value={2} />
        </MuiTabs>
      </Box>

      <Paper>{content_array[value]}</Paper>
    </Box>
  );
};
