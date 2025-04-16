import { create } from 'zustand';
import { getChatHistory } from '../services/chatHistory';
import { Message } from '../types/chatHistory';
import { v4 as uuidv4 } from 'uuid';

type WebSocketState = {
  socket: WebSocket | null;
  messages: Message[];
  connect: (url: string, userId: string) => void;
  sendMessage: (message: string) => void;
  error: boolean;
  isConnected: boolean;
};

export const useWebSocketStore = create<WebSocketState>((set, get) => ({
  socket: null,
  messages: [],
  error: false,
  isConnected: false,
  connect: (url: string, userId: string) => {
    const socket = new WebSocket(url);
    socket.onopen = async () => {
      try {
        socket.send(userId);
        const chatHistory = await getChatHistory(userId);
        set({
          messages: [...get().messages, ...chatHistory.message],
          isConnected: true,
        });
      } catch (error) {
        console.error(error);
        set({ error: true });
      }
    };
    socket.onmessage = (event) => {
      set({
        messages: [
          ...get().messages,
          {
            content: event.data,
            id: uuidv4(),
            createdAt: new Date(),
            type: 'ai',
          },
        ],
      });
    };

    socket.onerror = () => {
      set({ error: true });
    };
    set({ socket });
  },
  sendMessage: (message: string) => {
    const { isConnected, socket } = get();
    set({
      messages: [
        ...get().messages,
        {
          content: message,
          id: uuidv4(),
          createdAt: new Date(),
          type: 'human',
        },
      ],
    });
    if (socket && isConnected) {
      socket.send(message);
    }
  },
}));
