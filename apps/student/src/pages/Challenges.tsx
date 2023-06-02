import React from "react";
import { Box } from "@mui/material";
import { Tabs } from "../components";
import { Topic } from "../types";
import { Colors } from "ui";
import { Filter, mappedFilters } from "../enums";

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

  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      <Tabs
        topics={interests}
        filters={filters.map((filter) => mappedFilters[filter])}
      />
    </Box>
  );
};

export default Challenges;
