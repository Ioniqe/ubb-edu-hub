import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { LoadingScreen, useAppTheme } from "ui";
import { Filter, mappedFilters } from "../enums";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { AssignmentsTabContent } from "../components";
import useSkillsQuery from "../queries/useSkillsQuery";

const Assignments = () => {
  const { theme } = useAppTheme();

  const { isLoading, data: skills } = useSkillsQuery();

  const filters: Filter[] = [
    Filter.ALL,
    Filter.COMPLETED,
    Filter.NOT_COMPLETED,
    Filter.COMING_UP,
  ];

  const [value, setValue] = useState(0);

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

            <AssignmentsTabContent
              interest={skills[value]}
              filters={filters.map((filter) => mappedFilters[filter])}
            />
          </Box>
        )}
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Assignments;
