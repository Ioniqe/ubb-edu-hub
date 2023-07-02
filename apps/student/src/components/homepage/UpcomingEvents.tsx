import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { Board, useAppTheme } from "ui";
import { UpcomingEvent } from "../../types";
import { format, parseISO } from "date-fns";
import { DayPicker } from "react-day-picker";
import styles from "react-day-picker/dist/style.module.css";
import "./calendar-styles.css";
import api from "ui/util/api";
import { useQuery } from "@tanstack/react-query";

export const UpcomingEvents = () => {
  const { theme } = useAppTheme();

  const upcomingEventsQuery = useQuery(
    ["upcomingEvents"],
    () =>
      api<UpcomingEvent[]>({
        url: "/calendar-events",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  const dates = useMemo(
    () => upcomingEventsQuery.data?.map((event) => new Date(event.date)),
    [upcomingEventsQuery.data]
  );
  if (!upcomingEventsQuery.data) {
    return null;
  }

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
        {upcomingEventsQuery.data.map((event, index) => (
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
                {event.title}
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
