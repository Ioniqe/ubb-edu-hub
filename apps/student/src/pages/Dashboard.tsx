import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import { WelcomeMessage } from "../components/homepage";

const Dashboard = () => {
  const { theme } = useAppTheme();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        flex={3}
        sx={{
          m: 2,
          ml: 0,
        }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          flex={1}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 3,
          }}
        >
          <WelcomeMessage />
        </Box>

        <Box
          width={"100%"}
          height={"100%"}
          flex={3}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 4,
            my: 2,
          }}
        >
          <Typography variant={"h1"}>Hello</Typography>
        </Box>

        <Box
          width={"100%"}
          height={"100%"}
          flex={4}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 4,
          }}
        >
          <Typography variant={"h1"}>Hello</Typography>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        width={"100%"}
        flex={1}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 2,
          m: 2,
          mr: 0,
        }}
      ></Box>
    </Box>
  );
};

export default Dashboard;
