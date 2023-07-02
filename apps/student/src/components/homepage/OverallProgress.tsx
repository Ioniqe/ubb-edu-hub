import React, { useMemo } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { LoadingScreen, useAppTheme } from "ui";
import useSubjectsQuery from "../../queries/useSubjectsQuery";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { OverviewSkillsProgress } from "../../types";
import useChallengesQuery from "../../queries/useChallengesQuery";

const data = [
  {
    name: "Artificial Intelligence (skill)",
    uv: 70,
    fill: "#8884d8",
  },
  {
    name: "Teamwork (skill)",
    uv: 100,
    fill: "#83a6ed",
  },
  {
    name: "Leadership (skill)",
    uv: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "Artificial Intelligence (subject)",
    uv: 30,
    fill: "#82ca9d",
  },
  {
    name: "CMES (subject)",
    uv: 8.63,
    fill: "#a4de6c",
  },
  {
    name: "Mathematics (challenges)",
    uv: 0,
    fill: "#d0ed57",
  },
  {
    name: "CMES (challenges)",
    uv: 50,
    fill: "#ffc658",
  },
];

// TODO improve
const CustomTooltip = ({ active, payload }: any) => {
  const { theme } = useAppTheme();

  if (active && payload && payload.length) {
    const p = payload[0].payload;
    return (
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          p: 1,
          px: 2,
          backgroundColor: theme.palette.text.secondary,
          color: theme.palette.primary.main,
          borderRadius: "16px",
        }}
      >
        <Typography variant={"caption"}>
          {p.name + ": " + p.uv + "%"}
        </Typography>
      </Box>
    );
  }

  return null;
};

export const OverallProgress = () => {
  // TODO fetch data

  const { theme } = useAppTheme();
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  const { data: skills, isLoading: skillsLoading } = useQuery(
    ["skillsDetailed", { firebaseId }],
    () =>
      api<OverviewSkillsProgress[]>({
        url: "/skills",
        method: "GET",
        params: {
          userId: firebaseId,
          detailed: true,
        },
      }),
    {
      select: (response) => response.data,
    }
  );
  const challengesQuery = useChallengesQuery();
  const { data: subjects, isLoading: subjectsLoading } = useSubjectsQuery();

  const progressData = useMemo(() => {
    const skillData = (skills || []).map((skill) => ({
      name: `${skill.name} (Skill)`,
      fill: skill.color,
      uv: skill.steps.length,
    }));
    const subjectData = (subjects || []).map((subject) => ({
      name: `${subject.name} (Subject)`,
      fill: subject.color,
      uv: 5,
    }));
    const challengesData = (challengesQuery.data || []).map((challenge) => ({
      name: `${challenge.name} (Challenge)`,
      fill: challenge.color,
      uv: 5,
    }));
    return [...skillData, ...subjectData, ...challengesData];
  }, [skills, subjects]);

  console.log(progressData);

  if ((!skills || !subjects) && !skillsLoading && !subjectsLoading) {
    return null;
  }

  return skillsLoading || subjectsLoading ? (
    <LoadingScreen />
  ) : (
    <ResponsiveContainer width="100%" height="100%" debounce={300}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="100%"
        barSize={10}
        data={progressData}
      >
        <RadialBar
          label={{ position: "insideStart", fill: theme.palette.primary.main }}
          background
          dataKey="uv"
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
