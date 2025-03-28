import { APIMessage } from '../types/chatHistory';

export const chatMessageAdapter = (message: APIMessage) => {
  const { content, type, date_time, id } = message;
  return {
    id,
    content,
    type,
    createdAt: new Date(date_time),
  };
};
