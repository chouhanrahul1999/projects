import React, { useEffect, useRef, useState } from "react";
import { Eraser, Pencil, PencilIcon, RectangleHorizontal } from "lucide-react";
import { Circle } from "lucide-react";
import { IconButton } from "./IconButton";
import { Game } from "../draw/Game";

 export type Tool = "circle" | "rect" | "pencil" | "eraser";

export function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Game>();
  const [selectedTool, setSelectedTool] = useState<Tool>("circle");

  useEffect(() => {
    //@ts-ignore
   game?.setTool(selectedTool);
  }, [selectedTool, game])

  useEffect(() => {
    if (canvasRef.current) {
      const g = new Game(canvasRef.current, roomId, socket);
      setGame(g);

      return () => {
        g.destroy();
      }
    }
  }, [canvasRef]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      <Topbar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
  );
}

function Topbar({
  selectedTool,
  setSelectedTool,
}: {
  selectedTool: Tool;
  setSelectedTool: (s: Tool) => void;
}) {
  return (
    <div className="absolute top-2 left-4/10 backdrop-blur-lg bg-gray-800 rounded-xl">
      <div className="px-4 flex gap-4 py-2 border-none text-gray-50">
        <IconButton
          activated={selectedTool === "pencil"}
          icon={<PencilIcon />}
          onClick={() => {
            setSelectedTool("pencil");
          }}
        />
          <IconButton
            activated={selectedTool === "circle"}
            icon={<Circle />}
            onClick={() => {
              setSelectedTool("circle");
            }}
          />
        <IconButton
          activated={selectedTool === "rect"}
          icon={<RectangleHorizontal />}
          onClick={() => {
            setSelectedTool("rect");
          }}
        />
        <IconButton
          activated={selectedTool === "eraser"}
          icon={<Eraser />}
          onClick={() => {
            setSelectedTool("eraser");
          }}
        />
      </div>
    </div>
  );
}
