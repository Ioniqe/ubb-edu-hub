import React from "react";
import {
  Box,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Tooltip,
  Typography,
} from "@mui/material";
import { OverviewSkillsProgress } from "../../types";
import { Board, Colors, useAppTheme } from "ui";

const Connector = ({ color }: { color: string }) => {
  return (
    <StepConnector
      sx={{
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: "25%",
          left: "calc(-50% + 28px)",
          right: "calc(50% + 12px)",
        },
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: color,
        },
      }}
    />
  );
};

export const SkillsProgress = () => {
  // TODO fetch skills array

  const skills: OverviewSkillsProgress[] = [
    {
      skill: {
        name: "Artificial Intelligence",
        color: Colors.ACCENT_YELLOW,
      },
      steps: [
        {
          name: "Enroll",
          completed: true,
        },
        {
          name: "Assignment 1",
          completed: true,
        },
        {
          name: "Assignment 2",
          completed: true,
        },
        {
          name: "Assignment 3",
          completed: true,
        },
        {
          name: "ML Exam",
          completed: false,
        },
      ],
    },

    {
      skill: {
        name: "Teamwork",
        color: Colors.ACCENT_SALMON,
      },
      steps: [
        {
          name: "Enroll",
          completed: true,
        },
        {
          name: "Assignment 1",
          completed: false,
        },
        {
          name: "Team Assignment",
          completed: false,
        },
      ],
    },

    {
      skill: {
        name: "Leadership",
        color: Colors.ACCENT_PURPLE,
      },
      steps: [
        {
          name: "Enroll",
          completed: true,
        },
        {
          name: "Assignment 1",
          completed: false,
        },
        {
          name: "Assignment 2",
          completed: false,
        },
        {
          name: "Final Presentation",
          completed: false,
        },
      ],
    },

    {
      skill: {
        name: "Leadership",
        color: Colors.ACCENT_PURPLE,
      },
      steps: [
        {
          name: "Enroll",
          completed: true,
        },
        {
          name: "Assignment 1",
          completed: false,
        },
        {
          name: "Assignment 2",
          completed: false,
        },
        {
          name: "Final Presentation",
          completed: false,
        },
      ],
    },

    {
      skill: {
        name: "Leadership",
        color: Colors.ACCENT_PURPLE,
      },
      steps: [
        {
          name: "Enroll",
          completed: true,
        },
        {
          name: "Assignment 1",
          completed: false,
        },
        {
          name: "Assignment 2",
          completed: false,
        },
        {
          name: "Final Presentation",
          completed: false,
        },
      ],
    },
  ];

  const { theme } = useAppTheme();

  const renderNode = (
    nodeIndex: number,
    totalNodes: number,
    completed: boolean,
    skillColor: string | null
  ) => {
    const color = skillColor ?? theme.palette.primary.main;
    const progress = Math.floor(((nodeIndex + 1) / totalNodes) * 100);

    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"40px"}
        height={"40px"}
        sx={{
          borderRadius: "50%",
          backgroundColor: completed ? color : theme.palette.text.secondary,
          color: completed ? theme.palette.text.secondary : color,
          border: `1px solid ${color}`,
          ml: 2,
          fontSize: "12px",
        }}
      >
        {progress}%
      </Box>
    );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      width={"100%"}
    >
      <Typography
        variant={"subtitle1"}
        color={theme.palette.primary.main}
        pb={2}
      >
        Your progress on the chosen skills
      </Typography>

      {skills.map(({ skill, steps }: OverviewSkillsProgress, index: number) => (
        <Board label={skill.name} labelColor={skill.color} key={index}>
          <Box
            display={"flex"}
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
            justifyContent={"start"}
            p={2}
          >
            <Stepper
              alternativeLabel
              activeStep={1}
              connector={
                <Connector color={skill.color ?? theme.palette.primary.main} />
              }
            >
              {steps.map((step, _index) => (
                <Step key={_index}>
                  <Tooltip title={step.name} placement={"top"}>
                    <StepLabel
                      StepIconComponent={() =>
                        renderNode(
                          _index,
                          steps.length,
                          step.completed,
                          skill.color
                        )
                      }
                    >
                      <Typography
                        color={theme.palette.primary.main}
                        variant={"caption"}
                        fontWeight={400}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: "1",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",

                          textAlign: "center",
                        }}
                      >
                        {step.name}
                      </Typography>
                    </StepLabel>
                  </Tooltip>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Board>
      ))}
    </Box>
  );
};
