import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import WelcomeImage from "../../assets/images/home.svg";

export const WelcomeMessage = () => {
  const { theme } = useAppTheme();
  const name = "Maria"; // TODO fetch name

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        width={"60%"}
        height={"100%"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography
          variant={"subtitle1"}
          fontSize={"24px"}
          color={theme.palette.primary.main}
        >
          Welcome back, <strong>{name}</strong>!
        </Typography>

        <Typography
          sx={{ typography: "body" }}
          color={theme.palette.text.primary}
        >
          {`Here is your progress on this semester's tasks!`}
        </Typography>
      </Box>

      <Box
        component={"img"}
        alt={"Welcome Image"}
        src={WelcomeImage}
        width={"20%"}
      />
    </Box>
  );
};
