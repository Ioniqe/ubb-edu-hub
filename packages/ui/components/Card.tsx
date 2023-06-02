import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useAppTheme } from "../theme";
type CardProps = {
  label: string;
  labelColor: string | null;
  children: React.ReactNode;
};

export const Card = ({ label, labelColor, children }: CardProps) => {
  const { theme } = useAppTheme();

  const color = labelColor ?? theme.palette.primary.main;

  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      height={"fit-content"}
      width={{ xs: "100%", sm: "50%", lg: "33%", xl: "25%" }}
      p={1}
      mb={5}
    >
      <Box
        position={"absolute"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: color,
          borderRadius: "400px",
          width: { xs: "50%", md: "70%" },
          height: "40px",
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
        top={"14px"}
        left={{ xs: "30%", md: "17%" }}
        position={"absolute"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: color,
          borderRadius: "400px",
          width: { xs: "50%", md: "70%" },
          height: "40px",
          zIndex: 1,

          filter: "blur(0.5rem)",
        }}
      />

      <Box
        position={"relative"}
        top={"25px"}
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
