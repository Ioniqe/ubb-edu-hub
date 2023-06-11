import React from "react";
import { Box, Typography } from "@mui/material";
import { Card, Colors, useAppTheme } from "ui";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { useQuery } from "@tanstack/react-query";
import { Subject } from "../types/subject";
import api from "ui/util/api";

const Subjects = () => {
  // TODO fetch subjects
  const { theme } = useAppTheme();

  const subjectsQuery = useQuery(
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

  if (!subjectsQuery.data) {
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
        <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          {subjectsQuery.data.map((subject, index) => (
            <Card
              label={subject.name}
              labelColor={Colors.ACCENT_YELLOW}
              key={index}
            >
              <Typography variant={"caption"}>
                {subject.descriptiveLink}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Subjects;
