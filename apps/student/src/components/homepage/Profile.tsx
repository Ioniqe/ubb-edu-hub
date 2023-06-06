import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";

export const Profile = () => {
  const firstName = "Maria";
  const lastName = "Cioroian";
  const email = "bozdgioana@yahoo.com";

  const fullName = `${firstName} ${lastName}`;

  const { theme } = useAppTheme();

  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Typography
          variant={"subtitle1"}
          fontSize={"1.2rem"}
          color={theme.palette.primary.main}
        >
          {fullName}
        </Typography>

        <Typography variant={"caption"} color={theme.palette.text.primary}>
          {email}
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"40px"}
        height={"40px"}
        sx={{
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.paper,
          ml: 2,
        }}
      >
        {firstName[0].toUpperCase() + "" + lastName[0].toUpperCase()}
      </Box>
    </Box>
  );
};
