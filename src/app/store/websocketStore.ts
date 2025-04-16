import { create } from 'zustand';
import { getChatHistory } from '../services/chatHistory';
import { Message } from '../types/chatHistory';

type WebSocketState = {
  socket: WebSocket | null;
  messages: Message[];
  connect: (url: string, userId: string) => void;
  sendMessage: (message: string) => void;
  error: boolean;
};

export const useWebSocketStore = create<WebSocketState>((set, get) => ({
  socket: null,
  messages: [],
  error: false,
  connect: (url: string, userId: string) => {
    const socket = new WebSocket(url);
    socket.onopen = async () => {
      try {
        const chatHistory = await getChatHistory(userId);
        set({ messages: [...get().messages, ...chatHistory.message] });
      } catch (error) {
        console.error(error);
      }
    };
    socket.onmessage = (event) => {
      set({ messages: [...get().messages, event.data] });
    };

    socket.onerror = () => {
      set({ error: true });
    };
    set({ socket });
  },
  sendMessage: (message: string) => {
    get().socket?.send(message);
  },
}));
