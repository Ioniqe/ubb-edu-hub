import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import { Route } from "../types";
import { useAppTheme } from "../theme";

type MenuItemProps = {
  isActive: boolean;
  currentPath: string;
  route: Route;
};

const MenuItem = ({ isActive, currentPath, route }: MenuItemProps) => {
  const { theme } = useAppTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        py: 0.5,
      }}
    >
      <Divider
        flexItem
        orientation="vertical"
        color={isActive ? theme.palette.text.secondary : "transparent"}
        sx={{
          width: "3px",
          mr: 0,
          ml: -1,
          "&:hover": {
            color: isActive ? "transparent" : theme.palette.text.secondary,
          },
        }}
      />

      <Link
        href={currentPath}
        color={theme.palette.text.secondary}
        underline={"none"}
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 0.5,
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          transition: "0.2s linear",
          "&:hover": {
            backgroundColor: theme.palette.highlight.primary,
          },
        }}
      >
        <Box className="material-icons" sx={{ fontSize: "18px" }}>
          {route.iconName}
        </Box>
        <Typography sx={{ pl: 1 }}>{route.name}</Typography>
      </Link>
    </Box>
  );
};

export default MenuItem;
