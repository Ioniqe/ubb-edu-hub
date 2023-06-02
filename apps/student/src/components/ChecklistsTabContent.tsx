import React from "react";
import { Box, Typography } from "@mui/material";
import { Topic } from "../types";
import { Board } from "ui";

type ChecklistsTabContentProps = {
  interest: Topic;
};

export const ChecklistsTabContent = ({
  interest,
}: ChecklistsTabContentProps) => {
  // TODO fetch cehcklists about interest

  return (
    <Box width={"100%"} height={"100%"}>
      <Board label={interest.name} labelColor={interest.color}>
        <Typography variant={"h1"}>
          EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
          Macarens EEE Macarens EEE Macarens
        </Typography>
      </Board>
    </Box>
  );
};
