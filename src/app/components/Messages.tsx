'use client';

import { Flex } from '@chakra-ui/react';
import { Message } from './Message';

import { useWebSocketStore } from '../store/websocketStore';

export const Messages = () => {
  const { messages } = useWebSocketStore();
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
    </Flex>
  );
};
