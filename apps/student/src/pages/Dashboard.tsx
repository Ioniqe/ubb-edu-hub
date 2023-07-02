import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppTheme } from "ui";
import {
  Focus,
  OverallProgress,
  Profile,
  UpcomingEvents,
  WelcomeMessage,
} from "../components/homepage";
import { SkillsProgress } from "../components/homepage/SkillsProgress";

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
              p: 2,
              my: 2,
              mr: 1,
            }}
          >
            <Focus />
          </Box>

          <Box
            display={"flex"}
            flex={1}
            flexDirection={"column"}
            sx={{
              borderRadius: "18px",
              backgroundColor: theme.palette.background.paper,
              p: 2,
              my: 2,
              ml: 1,
            }}
          >
            <Typography
              variant={"subtitle1"}
              color={theme.palette.primary.main}
              pb={2}
            >
              Your overall progress this semester
            </Typography>

            <OverallProgress />
          </Box>
        </Box>

        <Box
          width={"100%"}
          height={"100%"}
          flex={4}
          sx={{
            borderRadius: "18px",
            backgroundColor: theme.palette.background.paper,
            p: 2,
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
            overflowY: "scroll",
          }}
        >
          <UpcomingEvents />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
