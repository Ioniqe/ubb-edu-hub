import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BaseRoute } from "../enums";
import { Colors, MultiSelect, useAppTheme } from "ui";
import { useNavigate } from "react-router-dom";

const subjectOptions = [
  "Artificial Intelligence",
  "Informatics",
  "Mathematics",
];

export const InitialForm = () => {
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState<string[]>([]);

  const onSubmit = () => navigate("/" + BaseRoute.STUDENT);

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
        border: "1px solid" + Colors.ACCENT_YELLOW,
        p: 5,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ textAlign: "center" }}
      >
        <Typography variant={"h3"} color={theme.palette.primary.main}>
          {`Let us know what you're looking for`}
        </Typography>

        <Typography variant={"h4"} color={theme.palette.text.primary}>
          {`Tell us what you want to focus on and learn in order to get the most out of your degree`}
        </Typography>
      </Box>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <MultiSelect
          label={"What do you want to focus on?"}
          options={subjectOptions}
          selectedOptions={subjects}
          setSelectedOptions={setSubjects}
        />
      </Box>

      <Button
        onClick={onSubmit}
        variant={"contained"}
        sx={{ width: "30%" }}
        disabled={false}
      >
        Submit
      </Button>
    </Box>
  );
};