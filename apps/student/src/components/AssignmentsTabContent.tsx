import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Topic } from "../types";
import { Filters } from "./Filters";
import { Card, LoadingScreen, useAppTheme } from "ui";
import { useMutation } from "@tanstack/react-query";
import api from "ui/util/api";
import { Assignment } from "../types/assignment";
import useAssigmentsQuery from "../queries/useAssignmentsQuery";

type AssignmentsTabContentProps = {
  interest: Topic;
  filters: string[];
};

export const AssignmentsTabContent = ({
  interest,
  filters,
}: AssignmentsTabContentProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { theme } = useAppTheme();
  const {
    data: assignments,
    isLoading,
    refetch,
  } = useAssigmentsQuery(
    interest,
    selectedFilter?.toLowerCase().split(" ").join("_") ?? undefined
  );

  const completeAssignmentMutation = useMutation(
    ["updateAssignment"],
    (assignment: Assignment) =>
      api<Assignment>({
        url: "/assessments",
        method: "PATCH",
        params: { id: assignment.id },
        data: {
          completed: true,
        },
      }),
    {
      onSuccess: () => refetch(),
    }
  );

  if (!assignments && !isLoading) {
    return null;
  }

  const completeAssignment = (assignment: Assignment) => {
    console.log("completed");
    completeAssignmentMutation.mutate(assignment);
  };

  return (
    <Box width={"100%"} height={"100%"}>
      <Filters
        filters={filters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
          {(assignments ?? []).map((assignment, index) => (
            <Card
              label={assignment.title}
              labelColor={interest.color}
              key={index}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
              >
                <Box flex={"auto"} height={"100%"} sx={{ overflowY: "scroll" }}>
                  <Typography variant={"caption"}>
                    {assignment.description}
                  </Typography>
                </Box>

                {!assignment.completed && (
                  <Button
                    onClick={() => completeAssignment(assignment)}
                    sx={{
                      flex: 0,
                      backgroundColor: interest.color,
                      color: theme.palette.text.secondary,
                      transition: "0.1s linear",
                      borderRadius: "20px",
                      width: "70%",
                      mt: 1,
                      mb: 2,

                      "&:hover": {
                        backgroundColor: interest.color,
                        color: theme.palette.text.secondary,
                        boxShadow: `0px 0px 16px 0px ${interest.color}`,
                      },
                    }}
                  >
                    Complete
                  </Button>
                )}
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};
