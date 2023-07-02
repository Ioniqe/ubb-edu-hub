import React, { useMemo } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import useSubjectsQuery from "../../queries/useSubjectsQuery";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { OverviewSkillsProgress } from "../../types";

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
  const skillsQuery = useQuery(
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
  // const challengesQuery = useChallengesQuery();
  const subjectsQuery = useSubjectsQuery();

  const progressData = useMemo(() => {
    const skillData = (skillsQuery.data || []).map((skill) => ({
      name: `${skill.name} (Skill)`,
      fill: skill.color,
      uv: skill.steps.length,
    }));
    const subjectData = (subjectsQuery.data || []).map((subject) => ({
      name: `${subject.name} (Subject)`,
      fill: subject.color,
      uv: 5,
    }));
    return [...skillData, ...subjectData];
  }, [skillsQuery.data, subjectsQuery.data]);

  console.log(progressData);

  if (!skillsQuery.data || !subjectsQuery.data) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
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
