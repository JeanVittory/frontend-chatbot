'use client';

import { Flex } from '@chakra-ui/react';
import { UserLabel } from './UserLabel';
import { ChatUserOptions } from './ChatUserOptions';

export const Header = () => {
  return (
    <Flex
      position="fixed"
      width="100%"
      p=".8rem"
      alignItems="center"
      justifyContent="space-between"
      bgColor="#0D1322"
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    >
      <UserLabel />
      <ChatUserOptions />
    </Flex>
  );
};
