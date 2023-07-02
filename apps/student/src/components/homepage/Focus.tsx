import { Box, Typography } from "@mui/material";
import React from "react";
import { TopicQuickView } from "../../types/topic-quick-view";
import { Board, useAppTheme } from "ui";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Challenge } from "../../types/challenge";
import { Assignment } from "../../types/assignment";

type SubsectionProps = {
  subsectionTitle: string;
  topics: TopicQuickView[];
};

const Subsection = ({ subsectionTitle, topics }: SubsectionProps) => {
  const { theme } = useAppTheme();

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"inherit"}
      flexDirection={"column"}
      justifyContent={"start"}
    >
      <Typography variant={"caption"} color={theme.palette.text.primary} pt={2}>
        {subsectionTitle}
      </Typography>

      <Box
        display={"flex"}
        width={"100%"}
        height={"70px"}
        flexDirection={"column"}
        sx={{ overflowY: "scroll" }}
      >
        {topics.map((_topic: TopicQuickView, index: number) => (
          <Board
            key={index}
            labelColor={_topic.color ?? theme.palette.primary.main}
          >
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
                {_topic.name}
              </Typography>
              <Typography variant={"caption"}>{_topic.title}</Typography>
            </Box>
          </Board>
        ))}
      </Box>
    </Box>
  );
};

export const Focus = () => {
  const { theme } = useAppTheme();

  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;
  const challengesQuery = useQuery(
    ["challenges", firebaseId],
    () =>
      api<Challenge[]>({
        url: "/challenges",
        method: "GET",
        params: {
          firebaseId: firebaseId,
          filters: {
            completed: false,
          },
        },
      }),
    {
      select: (response) => response.data,
    }
  );

  const assignmentsQuery = useQuery(
    ["assignments", firebaseId],
    () =>
      api<Assignment[]>({
        url: "/assessments",
        method: "GET",
        params: {
          firebaseId: firebaseId,
          filters: {
            completed: false,
          },
        },
      }),
    {
      select: (response) => response.data,
    }
  );

  if (!assignmentsQuery.data) {
    return null;
  }

  if (!challengesQuery.data) {
    return null;
  }

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"start"}
    >
      <Typography variant={"subtitle1"} color={theme.palette.primary.main}>
        Your focus this semester
      </Typography>
      <Subsection
        subsectionTitle={"Active Challenges"}
        topics={challengesQuery.data.map((el) => ({
          title: "",
          name: el.name,
          color: el.color,
        }))}
      />
      <Subsection
        subsectionTitle={"Active Assignments"}
        topics={assignmentsQuery.data.map((el) => ({
          title: el.description,
          name: el.title,
          color: el.color,
        }))}
      />
    </Box>
  );
};
