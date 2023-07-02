import React from "react";
import { Box, Typography } from "@mui/material";
import { LoadingScreen, useAppTheme } from "ui";

import useUserQuery from "../../queries/userQuery";

export const Profile = () => {
  const { theme } = useAppTheme();

  const { data: user, isLoading } = useUserQuery();

  if (!user && !isLoading) {
    return null;
  }

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      px={4}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Typography variant={"subtitle1"} color={theme.palette.primary.main}>
          {`${user.firstName} ${user.lastName}`}
        </Typography>

        <Typography variant={"caption"} color={theme.palette.text.primary}>
          {user.email}
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
        {user.firstName?.[0].toUpperCase() +
          "" +
          user.lastName?.[0].toUpperCase()}
      </Box>
    </Box>
  );
};
