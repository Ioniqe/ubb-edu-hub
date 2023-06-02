import React, { useState } from "react";
import { Box, Chip } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";

type FiltersProps = {
  filters: string[];
};

export const Filters = ({ filters }: FiltersProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

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
