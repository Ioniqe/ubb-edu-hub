import React, { useCallback, useMemo, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Topic } from "../types";
import { Board, LoadingScreen, useAppTheme } from "ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Checklist } from "../types/checklist";

type ChecklistsTabContentProps = {
  interest: Topic;
};

export const ChecklistTabContent = ({
  interest,
}: ChecklistsTabContentProps) => {
  const { theme } = useAppTheme();

  const {
    data: checklists,
    isLoading,
    refetch,
  } = useQuery(
    ["checklists", { interest }],
    () =>
      api<Checklist[]>({
        url: "checklists",
        method: "GET",
        params: { skillId: interest.id },
      }),
    {
      select: (response) => response.data,
    }
  );

  const addChecklistMutation = useMutation(
    ["newChecklist"],
    (checklist: Checklist) =>
      api<Checklist>({
        url: "checklists",
        method: "POST",
        data: {
          ...checklist,
          skillId: interest.id,
        },
      }),
    {
      onSuccess: () => refetch(),
    }
  );

  const updateChecklistMutation = useMutation(
    ["updateChecklist"],
    (checklist: Checklist) =>
      api<Checklist>({
        url: "checklists/update",
        method: "PATCH",
        params: {
          id: checklist.id,
          checked: !checklist.checked,
        },
      }),
    {
      onSuccess: () => refetch(),
    }
  );

  const [addingNewChecklist, setAddingNewChecklist] = useState(false);
  const [newChecklistTitle, setNewChecklistTitle] = useState("");
  const [newChecklistDetails, setNewChecklistDetails] = useState("");

  const color = useMemo(
    () => interest.color ?? theme.palette.primary.main,
    [interest.color, theme]
  );

  const handleAdd = () => {
    console.log("aa");
    addChecklistMutation.mutate({
      title: newChecklistTitle,
      description: newChecklistDetails,
    });

    setNewChecklistTitle("");
    setNewChecklistDetails("");
    setAddingNewChecklist(false);
  };

  const handleCheckboxChange = useCallback((item) => {
    updateChecklistMutation.mutate(item);
  }, []);

  const newItem = (
    <Board labelColor={interest.color}>
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"space-between"}
        >
          <TextField
            variant={"standard"}
            label={"Title"}
            onChange={(e) => setNewChecklistTitle(e.target.value)}
            value={newChecklistTitle}
          />

          <TextField
            variant={"standard"}
            label={"Details"}
            multiline
            onChange={(e) => setNewChecklistDetails(e.target.value)}
            value={newChecklistDetails}
          />
        </Box>

        <Button
          disabled={!newChecklistDetails.length || !newChecklistTitle.length}
          sx={{
            mr: 2,
            ml: 7,
            mt: 2,
            minWidth: "100px",
            height: "40px",
            backgroundColor: color,
            color: theme.palette.text.secondary,
            borderRadius: "16px",

            "&:hover": {
              backgroundColor: color,
              color: theme.palette.text.secondary,
              boxShadow: `0px 0px 8px 0px ${color}`,
            },
          }}
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
    </Board>
  );

  if (!checklists && !isLoading) {
    return null;
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"fit-content"}
      flex={"auto"}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          flex={"auto"}
        >
          {checklists.map((checklistItem, index) => (
            <Board labelColor={interest.color} key={index}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant={"h3"}>
                  {checklistItem.description}
                </Typography>

                <Checkbox
                  checked={checklistItem.checked}
                  onChange={() => handleCheckboxChange(checklistItem)}
                  sx={{
                    color,
                    "&.Mui-checked": {
                      color,
                    },
                  }}
                />
              </Box>
            </Board>
          ))}
        </Box>
      )}

      {addingNewChecklist ? (
        newItem
      ) : (
        <IconButton
          onClick={() => setAddingNewChecklist(true)}
          sx={{
            flex: 0,
            mt: 2,
            mb: 3,
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
      )}
    </Box>
  );
};
