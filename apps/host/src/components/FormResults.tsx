import React, { useCallback, useEffect, useState } from "react";
import { Colors, useAppTheme } from "ui";
import { Box, Button, Typography } from "@mui/material";
import { BaseRoute } from "../enums";
import { useNavigate } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "ui/util/api";

type Skill = {
  id?: string;
  name: string;
  color: string | null;
};

export const FormResults = () => {
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [skillsColors, setSkillsColors] = useState<{ [skill: string]: string }>(
    {}
  );

  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  const skillsQuery = useQuery(
    ["skills", { firebaseId }],
    () =>
      api<Skill[]>({
        url: "/skills",
        method: "GET",
        params: {
          userId: firebaseId,
        },
      }),
    {
      select: (response) => response.data,
    }
  );

  const updateSkillsMutation = useMutation(
    ["updateSkills"],
    () =>
      Promise.all(
        (skillsQuery.data || []).map((skill) =>
          api({
            url: "/skills/update",
            method: "PATCH",
            data: {
              color: skillsColors[skill.name],
            },
            params: {
              id: skill.id,
              firebaseId: firebaseId,
            },
          })
        )
      ),
    {
      onSuccess: () => {
        navigate("/" + BaseRoute.STUDENT);
      },
    }
  );

  useEffect(() => {
    if (!skillsQuery.data) {
      return;
    }

    const _skillsColors = skillsQuery.data
      .map((e) => e.name)
      .reduce((acc: { [skill: string]: string }, skill) => {
        acc[skill] = Colors.WHITE;
        return acc;
      }, {});

    setSkillsColors(_skillsColors);
  }, [skillsQuery.data]);

  const onSubmit = useCallback(() => {
    updateSkillsMutation.mutate();
  }, [skillsColors]);

  if (!skillsQuery.data) {
    return null;
  }

  return (
    <Box
      height={"80%"}
      width={"80%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        borderRadius: "16px",
        backgroundColor: theme.palette.background.paper,
        px: 5,
        py: 8,
        overflowY: "scroll",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ textAlign: "center", mb: 4 }}
      >
        <Typography variant={"h3"} color={theme.palette.primary.main}>
          {`Please choose a color for each resulted skill`}
        </Typography>

        {skillsQuery.data.map((skill, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            my={4}
          >
            <Typography variant={"h4"} color={theme.palette.primary.main}>
              {skill.name}
            </Typography>

            <HexColorPicker
              color={skillsColors[skill.name]}
              onChange={(newColor) =>
                setSkillsColors({ ...skillsColors, [skill.name]: newColor })
              }
            />
          </Box>
        ))}
      </Box>

      <Button
        onClick={onSubmit}
        variant={"contained"}
        sx={{ width: "30%", mt: 4 }}
        disabled={false}
      >
        Submit
      </Button>
    </Box>
  );
};
