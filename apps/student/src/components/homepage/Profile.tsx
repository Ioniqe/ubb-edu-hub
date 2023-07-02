import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";

import useUserQuery from "../../queries/userQuery";

export const Profile = () => {
  const { theme } = useAppTheme();

  const userQuery = useUserQuery();

  if (!userQuery.data) {
    return null;
  }

  return (
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
          {`${userQuery.data.firstName} ${userQuery.data.lastName}`}
        </Typography>

        <Typography variant={"caption"} color={theme.palette.text.primary}>
          {userQuery.data.email}
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
        {userQuery.data.firstName?.[0].toUpperCase() +
          "" +
          userQuery.data.lastName?.[0].toUpperCase()}
      </Box>
    </Box>
  );
};
