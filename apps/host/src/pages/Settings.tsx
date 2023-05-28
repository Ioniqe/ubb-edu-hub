import React from "react";
import { Box } from "@mui/material";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import { Wrapper } from "ui";

const Settings = () => {
  return (
    <Wrapper
      title={"Student"} // verify if student
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <Box>The Settings</Box>
    </Wrapper>
  );
};

export default Settings;
