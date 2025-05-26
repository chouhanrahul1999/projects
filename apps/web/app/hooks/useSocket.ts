import { useEffect, useState } from "react";
import { WS_URL } from "../config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlOGRiYTg3YS05ZWUwLTQyZGUtODVkMS1iNjBkMmVkNDhmNWUiLCJpYXQiOjE3NDcyMjYwNDB9.oaQ-U_qkrZeOzOW_BdP4TJm20MB8N9ZN3x5DN7RbHJ0`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws)
        }
    }, [])

    return {
        socket,
        loading
    }
}