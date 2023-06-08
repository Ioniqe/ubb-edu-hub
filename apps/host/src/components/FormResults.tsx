import React, { useCallback, useEffect, useState } from "react";
import { Colors, useAppTheme } from "ui";
import { Box, Button, Typography } from "@mui/material";
import { BaseRoute } from "../enums";
import { useNavigate } from "react-router-dom";
import { HexColorPicker } from "react-colorful";

const skills = ["Artificial Intelligence", "Teamwork", "Leadership"];

export const FormResults = () => {
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [skillsColors, setSkillsColors] = useState<{ [skill: string]: string }>(
    {}
  );

  useEffect(() => {
    const _skillsColors = skills.reduce(
      (acc: { [skill: string]: string }, skill) => {
        acc[skill] = Colors.WHITE;
        return acc;
      },
      {}
    );

    setSkillsColors(_skillsColors);
  }, [skills]);

  const onSubmit = useCallback(() => {
    // TODO POST to back

    console.log(skillsColors);
    navigate("/" + BaseRoute.STUDENT);
  }, [skillsColors]);

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

        {skills.map((skill, index) => (
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
              {skill}
            </Typography>

            <HexColorPicker
              color={skillsColors[skill]}
              onChange={(newColor) =>
                setSkillsColors({ ...skillsColors, [skill]: newColor })
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
