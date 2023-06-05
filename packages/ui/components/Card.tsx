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
          borderRadius: "20px",
          width: { xs: "50%", md: "70%", lg: "50%" },
          height: "40px",
          zIndex: 2,

          px: 4,
          boxShadow: `8px 8px 24px 0px ${color}`,
        }}
      >
        <Tooltip title={label} placement={"top"}>
          <Typography
            color={theme.palette.text.secondary}
            variant={"h4"}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {label}
          </Typography>
        </Tooltip>
      </Box>

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
