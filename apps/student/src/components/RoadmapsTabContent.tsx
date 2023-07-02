import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { Topic } from "../types";
import Graph from "./Graph";

type RoadmapsTabContentProps = {
  skill: Topic;
};

export const RoadmapsTabContent = ({ skill }: RoadmapsTabContentProps) => {
  // TODO fetch progress details for given interest + progress overall!!
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

const data = {
  status: "success",
  results: [
    {
      nodes: [
        {
          id: "JavaScript / TypeScript",
          fillColor: "#fa6502",
        },
      ],
      links: [
        {
          source: "Erase a character",
          target: "JavaScript / TypeScript",
          value: "How would you erase a character from a string?",
        },
        {
          source: "Palindrome",
          target: "JavaScript / TypeScript",
          value: "Write code that will perform a palindrome check.",
        },
      ],
    },
  ],
};

const mockedRoadmaps = {
  nodes: [
    {
      id: "id_1", // step_id
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 50,
      y: 100,
    },
    {
      id: "id_2",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 100,
      y: 100,
    },
    {
      id: "id_3",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 150,
      y: 100,
    },
    {
      id: "id_4",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 200,
      y: 100,
    },
    {
      id: "id_5",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 250,
      y: 100,
    },
    {
      id: "id_6",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
      x: 300,
      y: 100,
    },

    {
      id: "id_7",
      height: 1,
      size: 24,
      color: "rgb(97, 105, 287)",
      x: 50,
      y: 200,
    },
    {
      id: "id_8",
      height: 1,
      size: 24,
      color: "rgb(97, 105, 287)",
      x: 70,
      y: 200,
    },
    {
      id: "id_9",
      height: 1,
      size: 24,
      color: "rgb(97, 105, 287)",
      x: 300,
      y: 200,
    },
  ],
  links: [
    {
      source: "id_1", // step_id
      target: "id_2", // next_step_id
      distance: 150,
    },
    {
      source: "id_2",
      target: "id_3",
      distance: 150,
    },
    {
      source: "id_3",
      target: "id_4",
      distance: 150,
    },
    {
      source: "id_4",
      target: "id_5",
      distance: 150,
    },
    {
      source: "id_5",
      target: "id_6",
      distance: 150,
    },

    {
      source: "id_7",
      target: "id_8",
      distance: 150,
    },
    {
      source: "id_8",
      target: "id_5",
      distance: 150,
    },
    {
      source: "id_5",
      target: "id_9",
      distance: 150,
    },
  ],
};
