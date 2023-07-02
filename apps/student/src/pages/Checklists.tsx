import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { Topic } from "../types";
import { ChecklistTabContent } from "../components";
import { LoadingScreen, useAppTheme } from "ui";

import useSkillsQuery from "../queries/useSkillsQuery";

const Checklists = () => {
  const { theme } = useAppTheme();

  const { data: skills, isLoading } = useSkillsQuery();

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!skills && !isLoading) {
    return;
  }

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
            flexDirection={"column"}
            width={"100%"}
            height={"100%"}
          >
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", mb: 2, flex: 0 }}
              width={"100%"}
              height={"20%"}
            >
              <MuiTabs value={value} onChange={handleChange}>
                {skills.map((topic: Topic, index: number) => (
                  <Tab label={topic.name} value={index} key={index} />
                ))}
              </MuiTabs>
            </Box>

            <ChecklistTabContent interest={skills[value]} />
          </Box>
        )}
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Checklists;
