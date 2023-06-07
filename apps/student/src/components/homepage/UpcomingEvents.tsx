import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { Board, useAppTheme } from "ui";
import { UpcomingEvent } from "../../types";
import { format, parseISO } from "date-fns";
import { DayPicker } from "react-day-picker";
import styles from "react-day-picker/dist/style.module.css";
import "./calendar-styles.css";

export const UpcomingEvents = () => {
  // TODO fetch upcoming assignments and exams
  const { theme } = useAppTheme();

  const upcomingEvents: UpcomingEvent[] = [
    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-06-11T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-13T14:00:00",
    },
    {
      type: "EXAM",
      name: "Artificial Intelligence",
      date: "2023-06-20T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "CMES assignment 2",
      date: "2023-07-11T14:00:00",
    },
    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-06-23T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },

    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-06-23T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },

    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-06-23T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },

    {
      type: "ASSIGNMENT",
      name: "Artificial Intelligence",
      date: "2023-06-23T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },
    {
      type: "EXAM",
      name: "Software Egineering",
      date: "2023-06-29T14:00:00",
    },
  ];

  const dates = useMemo(
    () => upcomingEvents.map((event) => new Date(event.date)),
    [upcomingEvents]
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"inherit"}
    >
      <Box
        width={"fit-content"}
        height={"fit-content"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.text.secondary,
          p: 2,
          mb: 3,
        }}
      >
        <DayPicker
          mode="multiple"
          selected={dates}
          classNames={styles}
          modifiersClassNames={{ selected: "day_selected" }}
        />
      </Box>

      <Typography
        variant={"subtitle1"}
        color={theme.palette.primary.main}
        sx={{ pb: 2 }}
      >
        Upcoming Events
      </Typography>

      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
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
