import React from "react";
import { Box, Typography } from "@mui/material";
import { Card, Colors } from "ui";

const Subjects = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      <Card label={"Subject 1"} labelColor={Colors.ACCENT_YELLOW}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={Colors.ACCENT_YELLOW}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={Colors.ACCENT_YELLOW}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={Colors.ACCENT_BLUE}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={Colors.ACCENT_SALMON}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={Colors.ACCENT_YELLOW}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={null}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>

      <Card label={"Subject 1"} labelColor={null}>
        <Typography variant={"caption"}>
          Hello there traveler, I seek to find the sword of Saruman
        </Typography>
      </Card>
    </Box>
  );
};

export default Subjects;
