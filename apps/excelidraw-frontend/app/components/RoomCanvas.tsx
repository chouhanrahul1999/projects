"use client";

import { useEffect, useState } from "react";
import { WS_URL } from "@/config";
import { Canvas } from "./Canvas";

export function RoomCanvas({ roomId }: { roomId: string }) {
  
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOGRiYTg3YS05ZWUwLTQyZGUtODVkMS1iNjBkMmVkNDhmNWUiLCJpYXQiOjE3NDcyMjYwNDB9.oaQ-U_qkrZeOzOW_BdP4TJm20MB8N9ZN3x5DN7RbHJ0`);

    ws.onopen = () => {
      setSocket(ws);
      ws.send(JSON.stringify({
        type: "join_room",
        roomId
      }))
    };
  }, []);


  if (!socket) {
    return <div>
      connecting to server...
    </div>
  }

  return (
    <div>
      <Canvas roomId={roomId} socket={socket} />
    </div>
  );
}
