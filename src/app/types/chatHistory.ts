export type ChatHistory = {
  message: Message[];
};

export type Message = {
  id: string;
  content: string;
  type: 'human' | 'system' | 'ai';
  createdAt: Date;
};

export type APIChatHistory = {
  message: APIMessage[];
};

export type APIMessage = {
  id: string;
  content: string;
  type: 'human' | 'system' | 'ai';
  date_time: Date;
};
