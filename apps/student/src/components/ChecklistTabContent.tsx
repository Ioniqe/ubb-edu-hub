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
import { Board, useAppTheme } from "ui";

type ChecklistsTabContentProps = {
  interest: Topic;
};

export const ChecklistTabContent = ({
  interest,
}: ChecklistsTabContentProps) => {
  // TODO fetch checklists about interest
  const { theme } = useAppTheme();

  const [checklist, setChecklist] = useState([...Array(14)]);
  const [addingNewChecklist, setAddingNewChecklist] = useState(false);
  const [newChecklistTitle, setNewChecklistTitle] = useState("");
  const [newChecklistDetails, setNewChecklistDetails] = useState("");

  const color = useMemo(
    () => interest.color ?? theme.palette.primary.main,
    [interest.color, theme]
  );

  const handleAdd = useCallback(() => {
    // TODO request
    setChecklist((_checklist) => [..._checklist, _checklist.length]);

    setNewChecklistTitle("");
    setNewChecklistDetails("");
    setAddingNewChecklist(false);
  }, []);

  const handleCheckboxChange = useCallback((item) => {
    // TODO request
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"fit-content"}
      flex={"auto"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        flex={"auto"}
      >
        {checklist
          .map((u, i) => i)
          .map((_, index) => (
            <Board
              label={interest.name}
              labelColor={interest.color}
              key={index}
            >
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant={"h3"}>
                  EEE Macarens EEE Macarens EEE Macarens EEE Macarens EEE
                  Macarens EEE Macarens EEE Macarens EEE Macarens
                </Typography>

                <Checkbox
                  onChange={() => handleCheckboxChange(_)}
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

      {addingNewChecklist ? (
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
              disabled={
                !newChecklistDetails.length || !newChecklistTitle.length
              }
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
