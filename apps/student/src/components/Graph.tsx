import React, { useMemo, useRef, useState } from "react";
import { ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";
import { useAppTheme } from "ui";
import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Topic } from "../types";

type GraphProps = {
  width: number;
  height: number;
  skill: Topic;
};

interface Node {
  id: number;
  name: string;
  completed: boolean;
}
interface Link {
  source: number;
  target: number;
  subject: string;
}
interface GraphResponse {
  nodes: Node[];
  links: Link[];
}

const Graph = ({ width, height, skill }: GraphProps) => {
  const { theme } = useAppTheme();
  const fgRef = useRef();

  const [fixedNodes, setFixedNodes] = useState(false);

  const skillQuery = useQuery(
    ["skill/findOne", skill],
    () =>
      api<GraphResponse>({
        url: "skills/findOne",
        method: "GET",
        params: {
          id: skill.id,
        },
      }),
    { select: (response) => response.data }
  );

  const overallProgress = useMemo(() => {
    const completed = (skillQuery.data?.nodes || []).filter(
      ({ completed }) => completed
    ).length;
    const total = skillQuery.data?.nodes.length || 0;
    return Math.floor(((completed + 1) / total) * 100);
  }, [skillQuery.data]);

  if (!skillQuery.data) {
    return null;
  }

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
        graphData={skillQuery.data}
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
