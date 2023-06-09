import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { useAppTheme } from "../theme";

type BoardProps = {
  labelColor: string | null;
  children: React.ReactNode;
  label?: string;
};

export const Board = ({ label, labelColor, children }: BoardProps) => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { theme } = useAppTheme();

  const color = useMemo(
    () =>
      labelColor && labelColor.length > 0
        ? labelColor
        : theme.palette.primary.main,
    [labelColor, theme]
  );

  useEffect(
    () => setContainerHeight(containerRef.current?.offsetHeight ?? null),
    [containerRef]
  );

  return (
    <Box
      height={"fit-content"}
      position={"relative"}
      sx={{
        backgroundColor: theme.palette.text.secondary,
        borderRadius: "16px",
        m: 1,
      }}
    >
      <Box
        ref={containerRef}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        width={"32px"}
        position={"absolute"}
        left={0}
        sx={{
          backgroundColor: color,
          borderBottomLeftRadius: "16px",
          borderTopLeftRadius: "16px",
        }}
      >
        {label && (
          <Tooltip title={label} placement={"left"}>
            <Box sx={{ transform: "rotate(270deg)" }}>
              <Typography
                color={theme.palette.text.secondary}
                variant={"h4"}
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",

                  width: `calc(${containerHeight}px - 24px)` ?? "100%",
                  textAlign: "center",
                }}
              >
                {label}
              </Typography>
            </Box>
          </Tooltip>
        )}
      </Box>

      <Box height={"fit-content"} p={1} pl={6}>
        {children}
      </Box>
    </Box>
  );
};
