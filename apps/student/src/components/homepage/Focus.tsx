import { Box, Typography } from "@mui/material";
import React from "react";
import { TopicQuickView } from "../../types/topic-quick-view";
import { Board, Colors, useAppTheme } from "ui";

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
  // TODO fetch not completed challenges -> only title + interest + color
  // TODO fetch assignments that are coming up -> title + subject
  const { theme } = useAppTheme();

  const challenges: TopicQuickView[] = [
    {
      title: "Software engineering challenge",
      name: "Software engineering",
      color: Colors.ACCENT_SALMON,
    },
    {
      title: "Artificial Intelligence challenge",
      name: "Artificial Intelligence",
      color: Colors.ACCENT_YELLOW,
    },
    {
      title: "Artificial Intelligence challenge 2",
      name: "Artificial Intelligence",
      color: Colors.ACCENT_YELLOW,
    },
  ];

  const assignments: TopicQuickView[] = [
    {
      title: "Software Quality assignment",
      name: "Software engineering",
      color: null,
    },
    {
      title: "CMES assignment 2",
      name: "CMES",
      color: null,
    },
  ];

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

      <Subsection subsectionTitle={"Active Challenges"} topics={challenges} />
      <Subsection subsectionTitle={"Active Assignments"} topics={assignments} />
    </Box>
  );
};
