import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import {
  Focus,
  Profile,
  UpcomingEvents,
  WelcomeMessage,
} from "../components/homepage";
import { SkillsProgress } from "../components/homepage/SkillsProgress";

const Dashboard = () => {
  const { theme } = useAppTheme();

  // TODO fetch necessary data INCLUDING name and email and other profile stuff (based on UID)
  // console.log(JSON.parse(sessionStorage.getItem("token")).state.user.uid);

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
          display={"flex"}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-between"}
          flex={3}
        >
          <Box
            display={"flex"}
            flex={2}
            sx={{
              borderRadius: "18px",
              backgroundColor: theme.palette.background.paper,
              p: 4,
              my: 2,
              mr: 1,
            }}
          >
            <Focus />
          </Box>

          <Box
            display={"flex"}
            flex={1}
            sx={{
              borderRadius: "18px",
              backgroundColor: theme.palette.background.paper,
              p: 4,
              my: 2,
              ml: 1,
            }}
          >
            <Typography variant={"h4"}>Hello</Typography>
          </Box>
        </Box>

        <Box
          width={"100%"}
          height={"100%"}
          flex={4}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <SkillsProgress />
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        width={"100%"}
        justifyContent={"space-between"}
        flex={1}
        sx={{ m: 2, mr: 0 }}
      >
        <Box
          height={"8%"}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 2,
          }}
        >
          <Profile />
        </Box>

        <Box
          height={"90%"}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 2,
          }}
        >
          <UpcomingEvents />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
