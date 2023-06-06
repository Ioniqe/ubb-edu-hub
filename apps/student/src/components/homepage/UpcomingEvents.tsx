import React from "react";
import { Box, Typography } from "@mui/material";
import { Board, useAppTheme } from "ui";
import { UpcomingEvent } from "../../types";
import { format, parseISO } from "date-fns";

export const UpcomingEvents = () => {
  // TODO fetch upcoming assignments and exams
  const { theme } = useAppTheme();

  const upcomingEvents: UpcomingEvent[] = [
    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-05-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Artificial Intelligence",
      date: "2023-08-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "CMES assignment 2",
      date: "2023-07-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-05-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Artificial Intelligence",
      date: "2023-08-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "CMES assignment 2",
      date: "2023-07-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-05-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Artificial Intelligence",
      date: "2023-08-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "CMES assignment 2",
      date: "2023-07-11T14:00:00",
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"fit-content"}
    >
      <Typography
        variant={"subtitle1"}
        fontSize={"1.2rem"}
        color={theme.palette.primary.main}
      >
        Upcoming Events
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"400px"}
        sx={{ overflowY: "scroll" }}
      >
        {upcomingEvents.map((event, index) => (
          <Board key={index} labelColor={null} label={event.type}>
            <Box
              display={"flex"}
              width={"100%"}
              height={"100%"}
              flexDirection={"column"}
              justifyContent={"start"}
            >
              <Typography
                sx={{ typography: "body" }}
                color={theme.palette.primary.main}
              >
                {event.name}
              </Typography>
              <Typography variant={"caption"}>
                {format(parseISO(event.date), "dd/MM/yyyy")}
              </Typography>
            </Box>
          </Board>
        ))}
      </Box>
    </Box>
  );
};
