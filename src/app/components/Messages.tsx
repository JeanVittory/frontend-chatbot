'use client';

import { Flex } from '@chakra-ui/react';
import { Message } from './Message';
import { useEffect, useRef } from 'react';
import { useWebSocketStore } from '../store/websocketStore';
import { Spinner } from '@/components/ui/spinner';

export const Messages = () => {
  const { messages } = useWebSocketStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!messages.length) return <Spinner />;
  return (
    <Flex flexDirection="column" m="auto" maxWidth="800px" px="1rem" py="6rem">
      {messages &&
        messages.map((message) => {
          return (
            <Message
              createdAt={message.createdAt}
              key={message.id}
              isHuman={message.type === 'human'}
              message={message.content}
            />
          );
        })}
      <div ref={messagesEndRef} />
    </Flex>
  );
};
