import React from "react";
import { Box, Typography } from "@mui/material";
import { Topic } from "../types";
import { Filters } from "./Filters";
import { Card } from "ui";

type ChallengesTabContentProps = {
  interest: Topic;
  filters: string[];
};

export const ChallengesTabContent = ({
  interest,
  filters,
}: ChallengesTabContentProps) => {
  // TODO fetch array of challenges details for given interest

  return (
    <Box width={"100%"} height={"100%"}>
      <Filters filters={filters} />

      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
        {[...Array(4)]
          .map((u, i) => i)
          .map((_, index) => (
            <Card label={interest.name} labelColor={interest.color} key={index}>
              <Typography variant={"caption"}>
                Hello there traveler, I seek to find the sword of Saruman
              </Typography>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
