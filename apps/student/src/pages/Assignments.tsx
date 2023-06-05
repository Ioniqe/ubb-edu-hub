import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { Colors, useAppTheme } from "ui";
import { Filter, mappedFilters } from "../enums";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { AssignmentsTabContent } from "../components";

const Assignments = () => {
  const { theme } = useAppTheme();

  const subjects: Topic[] = [
    { name: "Artificial Intelligence", color: Colors.ACCENT_PURPLE },
    { name: "CMES", color: Colors.ACCENT_BLUE_LIGHT },
    { name: "Mathematics", color: Colors.ACCENT_BLUE },
  ]; // TODO fetch

  const filters: Filter[] = [
    Filter.ALL,
    Filter.COMPLETED,
    Filter.NOT_COMPLETED,
    Filter.COMING_UP,
  ];

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
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} width={"100%"}>
            <MuiTabs value={value} onChange={handleChange}>
              {subjects.map((topic: Topic, index: number) => (
                <Tab label={topic.name} value={index} key={index} />
              ))}
            </MuiTabs>
          </Box>

          <AssignmentsTabContent
            interest={subjects[value]}
            filters={filters.map((filter) => mappedFilters[filter])}
          />
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Assignments;
