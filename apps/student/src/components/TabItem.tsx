import React, { useState } from "react";
import { Topic } from "../types";
import { Box, Chip, Typography } from "@mui/material";
import { Card, Colors } from "ui";

type TabItemProps = {
  topic: Topic;
  filters: string[];
};

export const TabItem = ({ topic, filters }: TabItemProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const isFilterSelected = (filter: string) => selectedFilter === filter;

  const handleChipClick = (filter: string) => {
    if (isFilterSelected(filter)) {
      setSelectedFilter(null);
      return;
    }
    setSelectedFilter(filter);
  };

  console.log(selectedFilter);

  return (
    <Box width={"100%"} height={"100%"}>
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
            size={"small"}
            label={filter}
            variant={isFilterSelected(filter) ? "filled" : "outlined"}
            onClick={() => handleChipClick(filter)}
            sx={{ mr: 1, mt: 0.5 }}
          />
        ))}
      </Box>

      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
        {[...Array(4)]
          .map((u, i) => i)
          .map((_, index) => (
            <Card
              label={"Subject 1"}
              labelColor={Colors.ACCENT_YELLOW}
              key={index}
            >
              <Typography variant={"caption"}>
                Hello there traveler, I seek to find the sword of Saruman
              </Typography>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
