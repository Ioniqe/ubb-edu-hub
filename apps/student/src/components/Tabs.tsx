import React from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { SyntheticEvent } from "react";
import { useState } from "react";
import { TabItem } from "./TabItem";
import { Topic } from "../types";

type TabsProps = {
  topics: Topic[];
  filters: string[];
};

export const Tabs = ({ topics, filters }: TabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={value} onChange={handleChange}>
          {topics.map((topic: Topic, index: number) => (
            <Tab label={topic.name} value={index} key={index} />
          ))}
        </MuiTabs>
      </Box>

      <TabItem topic={topics[value]} filters={filters} />
    </Box>
  );
};
