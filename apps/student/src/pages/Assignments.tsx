import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { Topic } from "../types";
import { useAppTheme } from "ui";
import { Filter, mappedFilters } from "../enums";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { AssignmentsTabContent } from "../components";
import api from "ui/util/api";
import { useQuery } from "@tanstack/react-query";

const Assignments = () => {
  const { theme } = useAppTheme();

  const skillssQuery = useQuery(
    ["skills"],
    () =>
      api<Topic[]>({
        url: "skills",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  const filters: Filter[] = [
    Filter.ALL,
    Filter.COMPLETED,
    Filter.NOT_COMPLETED,
    Filter.COMING_UP,
  ];

  const [value, setValue] = useState(0);

  if (!skillssQuery.data) {
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          width={"100%"}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} width={"100%"}>
            <MuiTabs value={value} onChange={handleChange}>
              {skillssQuery.data.map((topic: Topic, index: number) => (
                <Tab label={topic.name} value={index} key={index} />
              ))}
            </MuiTabs>
          </Box>

          <AssignmentsTabContent
            interest={skillssQuery.data[value]}
            filters={filters.map((filter) => mappedFilters[filter])}
          />
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Assignments;
