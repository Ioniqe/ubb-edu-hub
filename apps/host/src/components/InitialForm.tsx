import React, { useCallback, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { MultiSelect, SimpleSelect, useAppTheme } from "ui";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import api from "ui/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

type InitialFormProps = {
  gotoNextStep: () => void;
};

interface PredefinedSkills {
  name: string;
  type: string;
}

type Subject = {
  name: string;
  descriptiveLink: string;
  color: string;
};

export const InitialForm = ({ gotoNextStep }: InitialFormProps) => {
  const { theme } = useAppTheme();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // TODO
  const [subjects, setSubjects] = useState<string[]>([]);
  const [prefersHardSkills, setPrefersHardSkills] = useState<string>("");
  const [prefersSoftSkills, setPrefersSoftSkills] = useState<string>("");

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

  const uploadFileMutation = useMutation(["uploadFile"], () =>
    api({
      url: "/nlp/file",
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: {
        file: file,
      },
    })
  );

  const sendInformationMutation = useMutation(["sendInformation"], () =>
    api({
      url: "nlp",
      method: "POST",
      params: {
        userId: JSON.parse(sessionStorage.getItem("token") || "").state.uid,
      },
      data: {
        subjects: subjects,
        hardSkills: prefersHardSkills,
        softSkills: prefersSoftSkills,
      },
    })
  );

  const subjectQuery = useQuery(
    ["subjects"],
    () =>
      api<Subject[]>({
        url: "/subjects",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  const predefinedSkillsQuery = useQuery(
    ["predefined-skills"],
    () =>
      api<PredefinedSkills[]>({
        url: "/predefined-skills",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  const onSubmit = useCallback(() => {
    // TODO POST to back
    uploadFileMutation.mutate();
    sendInformationMutation.mutate();

    gotoNextStep();
  }, [gotoNextStep]);

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
          options={
            subjectQuery.data
              ? subjectQuery.data.map((subject) => subject.name)
              : []
          }
          selectedOptions={subjects}
          setSelectedOptions={setSubjects}
        />

        <SimpleSelect
          label={"What Hard skilldo you prefer?"}
          options={
            predefinedSkillsQuery.data
              ? predefinedSkillsQuery.data
                  .filter((e) => e.type === "HARD")
                  .map((e) => e.name)
              : []
          }
          selectedOption={prefersHardSkills}
          setSelectedOption={setPrefersHardSkills}
        />

        <SimpleSelect
          label={"What soft skill do you prefer?"}
          options={
            predefinedSkillsQuery.data
              ? predefinedSkillsQuery.data
                  .filter((e) => e.type === "SOFT")
                  .map((e) => e.name)
              : []
          }
          selectedOption={prefersSoftSkills}
          setSelectedOption={setPrefersSoftSkills}
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
