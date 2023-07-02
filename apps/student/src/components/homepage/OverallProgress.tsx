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

  const { data: challenges, isLoading: challengesLoading } =
    useChallengesQuery();
  const { data: subjects, isLoading: subjectsLoading } = useSubjectsQuery();

  const progressData = useMemo(() => {
    const skillData = (skills || []).map((skill) => ({
      name: `${skill.name} (Skill)`,
      fill: skill.color ?? theme.palette.primary.main,
      uv: skill.steps.length,
    }));

    const subjectData = (subjects || []).map((subject) => ({
      name: `${subject.name} (Subject)`,
      fill: subject.color ?? theme.palette.primary.main,
      uv: 5,
    }));

    const challengesData = (challenges || []).map((challenge) => ({
      name: `${challenge.name} (Challenge)`,
      fill: challenge.color ?? theme.palette.primary.main,
      uv: 5,
    }));

    return [...skillData, ...subjectData, ...challengesData];
  }, [skills, subjects, challenges]);

  console.log(progressData);

  if (
    (!skills || !subjects || !challenges) &&
    !skillsLoading &&
    !subjectsLoading &&
    !challengesLoading
  ) {
    return null;
  }

  return skillsLoading || subjectsLoading || challengesLoading ? (
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
