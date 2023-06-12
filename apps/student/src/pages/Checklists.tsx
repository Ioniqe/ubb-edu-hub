import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { Topic } from "../types";
import { ChecklistTabContent } from "../components";
import { Colors, useAppTheme } from "ui";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";

const Checklists = () => {
  const { theme } = useAppTheme();

  const skillsQuery = useQuery(
    ["skills"],
    () =>
      api<Topic[]>({
        url: "skills",
        method: "GET",
      }),
    {
      select: (response) => response.data,
    }
  );

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!skillsQuery.data) {
    return;
  }

  return (
    <CustomAppThemeProvider>
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
          borderRadius: "18px",
          backgroundColor: theme.palette.background.paper,
          p: 4,
          overflowY: "scroll",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
        >
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", mb: 2, flex: 0 }}
            width={"100%"}
            height={"20%"}
          >
            <MuiTabs value={value} onChange={handleChange}>
              {skillsQuery.data.map((topic: Topic, index: number) => (
                <Tab label={topic.name} value={index} key={index} />
              ))}
            </MuiTabs>
          </Box>

          <ChecklistTabContent interest={skillsQuery.data[value]} />
        </Box>
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Checklists;
