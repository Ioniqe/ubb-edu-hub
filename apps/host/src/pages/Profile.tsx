import React from "react";
import { Box, Typography } from "@mui/material";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import { LoadingScreen, useAppTheme, Wrapper } from "ui";
import useUserQuery from "../queries/userQuery";
import { User } from "../types/user";

export const Profile = () => {
  const { theme } = useAppTheme();
  const { data: user, isLoading } = useUserQuery();

  if (!user && !isLoading) {
    return null;
  }

  return (
    <Wrapper
      title={"Student"}
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Box
          display={"flex"}
          width={"100%"}
          height={"100%"}
          flexDirection={"column"}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.highlight.primary,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <Typography variant={"h3"}>
            Name: {(user as User).firstName}
          </Typography>
          <Typography variant={"h3"}>
            Last Name: {(user as User).lastName}
          </Typography>
          <Typography variant={"h3"}>Email: {(user as User).email}</Typography>
        </Box>
      )}
    </Wrapper>
  );
};
