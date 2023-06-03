import React, { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import { CustomAppThemeProvider } from "ui/CustomAppThemeProvider";
import { Topic } from "../types";
import { ChecklistsTabContent } from "../components";
import { Colors, useAppTheme } from "ui";

const Checklists = () => {
  const { theme } = useAppTheme();

  const interests: Topic[] = [
    { name: "Artificial Intelligence", color: Colors.ACCENT_YELLOW },
    { name: "Leadership", color: Colors.ACCENT_SALMON },
    { name: "Teamwork", color: Colors.ACCENT_BLUE },
  ]; // TODO fetch

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CustomAppThemeProvider>
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
            {interests.map((topic: Topic, index: number) => (
              <Tab label={topic.name} value={index} key={index} />
            ))}
          </MuiTabs>
        </Box>

        <ChecklistsTabContent interest={interests[value]} />
      </Box>
    </CustomAppThemeProvider>
  );
};

export default Checklists;
