import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useAppTheme } from "../theme";
import { Colors } from "../enums";

type CardProps = {
  label: string;
  children: React.ReactNode;
};

export const Card = ({ label, children }: CardProps) => {
  const { theme } = useAppTheme();
  const color = Colors.ACCENT_YELLOW; // TODO get color from server

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"fit-content"}
      width={"fit-content"}
      m={1}
    >
      <Box
        position={"absolute"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: color,
          borderRadius: "400px",
          width: "250px",
          height: "50px",
          zIndex: 2,

          px: 4,
        }}
      >
        <Tooltip title={label}>
          <Typography
            color={theme.palette.text.secondary}
            variant={"h4"}
            sx={{
              display: "-webkit-box",
              "-webkit-line-clamp": "1",
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
            }}
          >
            {label}
          </Typography>
        </Tooltip>
      </Box>
      <Box
        top={"7px"}
        left={"35px"}
        position={"absolute"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: color,
          borderRadius: "400px",
          width: "250px",
          height: "50px",
          zIndex: 1,

          filter: "blur(0.5rem)",
        }}
      />

      <Box
        position={"relative"}
        top={"25px"}
        width={"300px"}
        height={"400px"}
        sx={{
          backgroundColor: theme.palette.text.secondary,
          color: theme.palette.primary.main,
          borderRadius: "16px",
          p: "16px",
          pt: "48px",
        }}
      >
        <Box height={"100%"} width={"100%"} sx={{ overflowY: "scroll" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
