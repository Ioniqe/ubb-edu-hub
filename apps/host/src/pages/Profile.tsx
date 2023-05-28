import React from "react";
import { Box } from "@mui/material";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import { useAppTheme, Wrapper } from "ui";

const Profile = () => {
  const { theme } = useAppTheme();
  return (
    <Wrapper
      title={"Student"}
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <Box sx={{ color: theme.palette.highlight.primary }}>The Profile</Box>
    </Wrapper>
  );
};

export default Profile;
