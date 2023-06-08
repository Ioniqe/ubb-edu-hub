import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { Colors, useAppTheme } from "ui";
import { RoadmapsTabContent } from "../components";

// TODO rename every interest to skill
const Roadmaps = () => {
  const { theme } = useAppTheme();

  const skills: Topic[] = [
    { name: "Artificial Intelligence", color: Colors.ACCENT_YELLOW },
    { name: "Leadership", color: Colors.ACCENT_SALMON },
    { name: "Teamwork", color: Colors.ACCENT_BLUE },
  ]; // TODO fetch

  // TODO add overall progress

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomAppThemeProvider>
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          overflowY: "scroll",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          width={"100%"}
          height={"90%"}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} width={"100%"}>
            <MuiTabs value={value} onChange={handleChange}>
              {skills.map((topic: Topic, index: number) => (
                <Tab label={topic.name} value={index} key={index} />
              ))}
            </MuiTabs>
          </Box>

          <RoadmapsTabContent skill={skills[value]} />
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Roadmaps;
