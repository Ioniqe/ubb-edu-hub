import React, { useMemo } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Topic } from "../types";
import { Board, useAppTheme } from "ui";

type ChecklistsTabContentProps = {
  interest: Topic;
};

export const ChecklistsTabContent = ({
  interest,
}: ChecklistsTabContentProps) => {
  // TODO fetch checklists about interest
  const { theme } = useAppTheme();

  const color = useMemo(
    () => interest.color ?? theme.palette.primary.main,
    [interest.color, theme]
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"fit-content"}
      flex={"auto"}
      pb={4}
    >
      <Board label={interest.name} labelColor={interest.color}>
        <Typography variant={"h1"}>
          EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
          Macarens EEE Macarens EEE Macarens
        </Typography>
      </Board>

      <Board label={interest.name} labelColor={interest.color}>
        <Typography variant={"h1"}>
          EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
          Macarens EEE Macarens EEE Macarens
        </Typography>
      </Board>

      <Board label={interest.name} labelColor={interest.color}>
        <Typography variant={"h1"}>
          EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
          Macarens EEE Macarens EEE Macarens
        </Typography>
      </Board>

      <Board label={interest.name} labelColor={interest.color}>
        <Typography variant={"h1"}>
          EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
          Macarens EEE Macarens EEE Macarens
        </Typography>
      </Board>

      <IconButton
        sx={{
          display: "flex",
          alignSelf: "flex-end",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          transition: "0.1s linear",
          backgroundColor: color,

          "&:hover": {
            backgroundColor: color,
            color: theme.palette.text.secondary,
            boxShadow: `0px 0px 16px 0px ${color}`,
          },
        }}
      >
        <Box
          className="material-icons"
          sx={{ fontSize: "40px", color: theme.palette.text.secondary }}
        >
          add
        </Box>
      </IconButton>
    </Box>
  );
};
