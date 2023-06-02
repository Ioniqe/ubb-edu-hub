import React from "react";
import { Box, Typography } from "@mui/material";
import { Card, Colors } from "ui";

const Subjects = () => {
  // TODO fetch subjects

  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
      {[...Array(13)]
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
  );
};

export default Subjects;
