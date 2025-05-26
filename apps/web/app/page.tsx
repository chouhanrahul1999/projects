"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <input
          style={{
            padding: 10
          }}
          type="text"
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          placeholder="Room id"
        />

        <button
          style={{
            padding: 10,
            gap: 4
          }}
          onClick={() => {
            router.push(`/room/${roomId}`);
          }}
        >
          Join room
        </button>
      </div>
    </div>
  );
}
