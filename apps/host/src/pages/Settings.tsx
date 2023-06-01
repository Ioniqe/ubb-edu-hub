import React from "react";
import { Box, Button } from "@mui/material";
import { BaseRoute } from "../enums";
import { routes } from "../constants";
import { useAppTheme, Wrapper } from "ui";

export const Settings = () => {
  const { switchColorMode } = useAppTheme();

  return (
    <Wrapper
      title={"Student"} // verify if student
      customBaseRoute={`/${BaseRoute.STUDENT}`}
      customRoutes={[...Object.values(routes[BaseRoute.STUDENT])]}
      standardRoutes={[...Object.values(routes[BaseRoute.STANDARD])]}
    >
      <Box>The Settings</Box>
      <Button variant={"contained"} onClick={switchColorMode}>
        Change theme
      </Button>
    </Wrapper>
  );
};
