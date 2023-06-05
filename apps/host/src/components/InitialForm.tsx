import React, { useCallback, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BaseRoute } from "../enums";
import { MultiSelect, SimpleSelect, useAppTheme } from "ui";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const subjectOptions = [
  "Artificial Intelligence",
  "Informatics",
  "Mathematics",
];

export const InitialForm = () => {
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // TODO
  const [subjects, setSubjects] = useState<string[]>([]);
  const [prefersHardSkills, setPrefersHardSkills] = useState<string>("");
  const [file, setFile] = useState<File>();

  const onDropAccepted = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    minSize: 0,
    onDropAccepted,
    onDropRejected: (e) => console.log("error", e),
    accept: { "image/jpeg": [], "image/png": [], "application/pdf": [] },
  });

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

        <SimpleSelect
          label={"What do you prefer?"}
          options={["Yes", "No"]}
          selectedOption={prefersHardSkills}
          setSelectedOption={setPrefersHardSkills}
        />

        <SimpleSelect
          label={"What do you prefer?"}
          options={["Yes", "No"]}
          selectedOption={prefersHardSkills}
          setSelectedOption={setPrefersHardSkills}
        />
      </Box>

      <Box width={"100%"} mt={1}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"60px"}
          sx={{
            borderRadius: "8px",
            border: `1.5px dashed ${theme.palette.primary.main}`,

            "&:hover": {
              cursor: "pointer",
            },
          }}
          {...getRootProps()}
        >
          <Typography
            sx={{ typography: "body" }}
            color={theme.palette.primary.main}
          >
            Upload your letter of intent
          </Typography>

          <input
            aria-label="File Upload Input"
            disabled={loading}
            {...getInputProps()}
          />
        </Box>

        <Typography
          sx={{ typography: "body", mt: 1, textAlign: "end" }}
          color={theme.palette.primary.main}
        >
          {file ? `File name: ${file?.name}` : "no file uploaded yet"}
        </Typography>
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
