import React, { useMemo, useRef, useState } from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
import { useAppTheme } from "ui";
import { Box, Button, Typography } from "@mui/material";

type GraphProps = {
  width: number;
  height: number;
};

const data = {
  // TODO create type
  nodes: [
    {
      id: 1,
      name: "Enroll",
      completed: true,
    },
    {
      id: 2,
      name: "Assignment 1",
      completed: false,
    },
    {
      id: 3,
      name: "Quiz",
      completed: false,
    },
    {
      id: 4,
      name: "Assignment 2",
      completed: false,
    },
    {
      id: 5,
      name: "Team project",
      completed: false,
    },
    {
      id: 6,
      name: "Exam",
      completed: false,
    },
  ],

  links: [
    {
      source: 1,
      target: 2,
      subject: "Artificial Intelligence",
    },
    {
      source: 1,
      target: 3,
      subject: "CMES",
    },
    {
      source: 2,
      target: 4,
      subject: "Artificial Intelligence",
    },
    {
      source: 4,
      target: 5,
      subject: "Artificial Intelligence",
    },
    {
      source: 3,
      target: 5,
      subject: "CMES",
    },
    {
      source: 5,
      target: 6,
      subject: "CMES",
    },
  ],
};

const Graph = ({ width, height }: GraphProps) => {
  const { theme } = useAppTheme();
  const fgRef = useRef();

  const [fixedNodes, setFixedNodes] = useState(false);

  const overallProgress = useMemo(() => {
    const completed = data.nodes.filter(({ completed }) => completed).length;
    const total = data.nodes.length;
    return Math.floor(((completed + 1) / total) * 100);
  }, [data.nodes]);

  return (
    <Box width={"fit-content"} height={"fit-content"}>
      <Button onClick={() => setFixedNodes((prevState) => !prevState)}>
        {fixedNodes ? "Free node movement" : "Fixed node movement"}
      </Button>

      <Typography variant={"h4"}>
        Overall Progress: {overallProgress}%
      </Typography>

      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        width={width ?? 300}
        height={height ?? 200}
        nodeLabel={() => ""} // TODO
        nodeThreeObjectExtend={true}
        nodeThreeObject={(node: any) => {
          const sprite = new SpriteText(node.name);
          sprite.color = node.completed
            ? theme.palette.background.default
            : theme.palette.error.main;
          sprite.textHeight = 5;
          return sprite;
        }}
        linkThreeObjectExtend={true}
        linkThreeObject={(link: any) => {
          // extend link with text sprite
          const sprite = new SpriteText(`${link.subject}`);
          sprite.color = "lightgrey";
          sprite.textHeight = 4;
          return sprite;
        }}
        linkPositionUpdate={(sprite, { start, end }: any) => {
          const middlePos = Object.assign(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ...["x", "y", "z"].map((c) => ({
              [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
            }))
          );

          // Position sprite
          Object.assign(sprite.position, middlePos);
        }}
        onNodeDragEnd={(node) => {
          if (!fixedNodes) {
            node.fx = undefined;
            node.fy = undefined;
            node.fz = undefined;
            return;
          }
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        }}
        onEngineStop={() => {
          if (!fgRef.current) {
            return;
          }

          (fgRef.current as any).zoomToFit(400);
        }}
        cooldownTicks={100}
      />
    </Box>
  );
};

export default Graph;
