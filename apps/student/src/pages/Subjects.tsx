import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Card, LoadingScreen, useAppTheme } from "ui";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { Subject } from "../types/subject";
import api from "ui/util/api";

const Subjects = () => {
  const { theme } = useAppTheme();

  const { data: subjects, isLoading } = useQuery(
    ["subjects"],
    () =>
      api<Subject[]>({
        url: "/subjects",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  if (!subjects && !isLoading) {
    return;
  }

  return (
    <CustomAppThemeProvider>
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          overflowY: "scroll",
        }}
      >
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
            {subjects.map((subject, index) => (
              <Card
                label={subject.name}
                labelColor={subject.color ?? theme.palette.primary.main}
                key={index}
              >
                <Typography sx={{ typography: "body" }}>
                  <a href={subject.descriptiveLink}>{subject.name}</a>
                </Typography>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Subjects;
