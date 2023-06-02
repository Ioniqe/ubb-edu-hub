import React from "react";
import { Box, Typography } from "@mui/material";
import { Card, Colors } from "ui";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";

const Subjects = () => {
  // TODO fetch subjects

  return (
    <CustomAppThemeProvider>
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
    </CustomAppThemeProvider>
  );
};

export default Subjects;
