import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Topic } from "../types";
import { Filters } from "./Filters";
import { Card, LoadingScreen, useAppTheme } from "ui";
import useChallengesQuery from "../queries/useChallengesQuery";

type ChallengesTabContentProps = {
  interest: Topic;
  filters: string[];
};

export const ChallengesTabContent = ({
  interest,
  filters,
}: ChallengesTabContentProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { theme } = useAppTheme();
  const { data: challenges, isLoading } = useChallengesQuery(
    interest,
    selectedFilter?.toLowerCase().split(" ").join("_") ?? undefined
  );

  if (!challenges && !isLoading) {
    return null;
  }

  return (
    <Box width={"100%"} height={"100%"}>
      <Filters
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          {challenges.map((_, index) => (
            <Card label={interest.name} labelColor={interest.color} key={index}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
              >
                <Box flex={"auto"} height={"100%"} sx={{ overflowY: "scroll" }}>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                </Box>

                <Button
                  onClick={() => console.log("complete")}
                  sx={{
                    flex: 0,
                    backgroundColor: interest.color,
                    color: theme.palette.text.secondary,
                    transition: "0.1s linear",
                    borderRadius: "20px",
                    width: "70%",
                    mt: 1,
                    mb: 2,

                    "&:hover": {
                      backgroundColor: interest.color,
                      color: theme.palette.text.secondary,
                      boxShadow: `0px 0px 16px 0px ${interest.color}`,
                    },
                  }}
                >
                  Complete
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};
