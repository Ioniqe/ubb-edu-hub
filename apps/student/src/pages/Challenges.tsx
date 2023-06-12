import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { useAppTheme } from "ui";
import { Filter, mappedFilters } from "../enums";
import { ChallengesTabContent } from "../components";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import useSkillsQuery from "../queries/useSkillsQuery";

const Challenges = () => {
  const { theme } = useAppTheme();

  const skillsQuery = useSkillsQuery();

  const filters: Filter[] = [
    Filter.ALL,
    Filter.COMPLETED,
    Filter.NOT_COMPLETED,
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!skillsQuery.data) {
    return null;
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          width={"100%"}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} width={"100%"}>
            <MuiTabs value={value} onChange={handleChange}>
              {skillsQuery.data.map((topic: Topic, index: number) => (
                <Tab label={topic.name} value={index} key={index} />
              ))}
            </MuiTabs>
          </Box>

          <ChallengesTabContent
            interest={skillsQuery.data[value]}
            filters={filters.map((filter) => mappedFilters[filter])}
          />
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Challenges;
