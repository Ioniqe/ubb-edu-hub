import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Topic } from "../types";
import { Filters } from "./Filters";
import { Card, useAppTheme } from "ui";

type ChallengesTabContentProps = {
  interest: Topic;
  filters: string[];
};

export const ChallengesTabContent = ({
  interest,
  filters,
}: ChallengesTabContentProps) => {
  // TODO fetch array of challenges details for given interest
  const { theme } = useAppTheme();

  return (
    <Box width={"100%"} height={"100%"}>
      <Filters filters={filters} />

      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
        {[...Array(4)]
          .map((u, i) => i)
          .map((_, index) => (
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
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>{" "}
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>{" "}
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>{" "}
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
                  <Typography variant={"caption"}>
                    Hello there traveler, I seek to find the sword of Saruman
                  </Typography>
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
                    mb: 3,

                    "&:hover": {
                      // filter: "blur(4px)",
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
    </Box>
  );
};
