import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { LoadingScreen, useAppTheme } from "ui";
import { RoadmapsTabContent } from "../components";

import useSkillsQuery from "../queries/useSkillsQuery";

const Roadmaps = () => {
  const { theme } = useAppTheme();
  const [value, setValue] = useState(0);

  const { data: skills, isLoading } = useSkillsQuery();

  if (!skills && !isLoading) {
    return;
  }

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
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Box
            display={"flex"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            width={"100%"}
            height={"90%"}
          >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              width={"100%"}
            >
              <MuiTabs value={value} onChange={handleChange}>
                {skills.map((topic: Topic, index: number) => (
                  <Tab label={topic.name} value={index} key={index} />
                ))}
              </MuiTabs>
            </Box>

            <RoadmapsTabContent skill={skills[value]} />
          </Box>
        )}
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Roadmaps;
