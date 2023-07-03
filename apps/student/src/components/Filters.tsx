import React from "react";
import { Box, Chip } from "@mui/material";

type FiltersProps = {
  filters: string[];
  selectedFilter: string | null;
  setSelectedFilter: (selectedFilter: string | null) => void;
};

export const Filters = ({
  filters,
  selectedFilter,
  setSelectedFilter,
}: FiltersProps) => {
  const isFilterSelected = (filter: string) => selectedFilter === filter;

  const handleChipClick = (filter: string) => {
    if (isFilterSelected(filter)) {
      setSelectedFilter(null);
      return;
    }
    setSelectedFilter(filter);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      px={1}
      py={2}
      sx={{ flexWrap: "wrap" }}
    >
      {[...filters].map((filter: string, index: number) => (
        <Chip
          key={index}
          label={filter}
          variant={isFilterSelected(filter) ? "filled" : "outlined"}
          onClick={() => handleChipClick(filter)}
        />
      ))}
    </Box>
  );
};
