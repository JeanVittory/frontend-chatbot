import { chatMessageAdapter } from '../adapters/chatMessage';
import { ENDPOINTS } from '../constants';
import { APIChatHistory, APIMessage, ChatHistory } from '../types/chatHistory';

export const getChatHistory = async (userId: string): Promise<ChatHistory> => {
  try {
    const response = await fetch(
      `${ENDPOINTS.BASE_URL}${ENDPOINTS.CHAT_HISTORY}${userId}`
    );
    const result: APIChatHistory = await response.json();
    const messages = result.message.map((message: APIMessage) => {
      return chatMessageAdapter(message);
    });
    return {
      message: messages,
    };
  } catch (error) {
    throw error;
  }
};
