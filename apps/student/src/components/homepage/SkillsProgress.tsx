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
import { Board, LoadingScreen, useAppTheme } from "ui";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";

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
  const { theme } = useAppTheme();
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  const { data: skills, isLoading } = useQuery(
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

  const renderNode = (
    nodeIndex: number,
    totalNodes: number,
    completed: boolean,
    skillColor: string | null
  ) => {
    const color = skillColor ?? theme.palette.primary.main;
    const progress = Math.floor(((nodeIndex + 1) / totalNodes) * 100);

    completed = nodeIndex + 1 !== totalNodes;

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

  if (!skills && !isLoading) {
    return null;
  }

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

      {isLoading ? (
        <LoadingScreen />
      ) : (
        (skills || []).map(
          ({ name, color, steps }: OverviewSkillsProgress, index: number) => (
            <Board label={name} labelColor={color} key={index}>
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
                    <Connector color={color ?? theme.palette.primary.main} />
                  }
                >
                  {(steps || []).map((step, _index) => (
                    <Step key={_index}>
                      <Tooltip title={step.description} placement={"top"}>
                        <StepLabel
                          StepIconComponent={() =>
                            renderNode(
                              _index,
                              steps?.length || 0,
                              step.completed,
                              color
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
                            {step.description}
                          </Typography>
                        </StepLabel>
                      </Tooltip>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Board>
          )
        )
      )}
    </Box>
  );
};
