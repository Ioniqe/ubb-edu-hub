import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { Colors } from "ui";
import { Filter } from "../enums";
import { ChallengesTabContent } from "../components";

const Challenges = () => {
  const interests: Topic[] = [
    { name: "Artificial Intelligence", color: Colors.ACCENT_YELLOW },
    { name: "Leadership", color: Colors.ACCENT_SALMON },
    { name: "Teamwork", color: Colors.ACCENT_BLUE },
  ]; // TODO fetch

  const filters: Filter[] = [
    Filter.ALL,
    Filter.COMING_UP,
    Filter.COMPLETED,
    Filter.NOT_COMPLETED,
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      width={"100%"}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} width={"100%"}>
        <MuiTabs value={value} onChange={handleChange}>
          {interests.map((topic: Topic, index: number) => (
            <Tab label={topic.name} value={index} key={index} />
          ))}
        </MuiTabs>
      </Box>

      <ChallengesTabContent interest={interests[value]} filters={filters} />
    </Box>
  );
};

export default Challenges;
