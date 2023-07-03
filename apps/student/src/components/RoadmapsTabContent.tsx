import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Topic } from "../types";
import Graph from "./Graph";

type RoadmapsTabContentProps = {
  skill: Topic;
};

export const RoadmapsTabContent = ({ skill }: RoadmapsTabContentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    setHeight(ref.current?.clientHeight ?? 460);
    setWidth(ref.current?.clientWidth ?? 500);
  }, []);

  return (
    <Box width={"100%"} height={"100%"} ref={ref}>
      <Graph width={width} height={height} skill={skill} />
    </Box>
  );
};
