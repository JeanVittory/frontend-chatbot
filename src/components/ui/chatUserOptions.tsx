'use client';

import { signOut } from 'next-auth/react';
import { IoCallOutline } from 'react-icons/io5';
import { PiVideoCamera } from 'react-icons/pi';
import { HiDotsVertical } from 'react-icons/hi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Flex, Box } from '@chakra-ui/react';

export const ChatUserOptions = () => {
  return (
    <Flex gapX="2rem">
      <Box>
        <IoCallOutline size="1.2rem" color="#F3F4F6" />
      </Box>
      <Box>
        <PiVideoCamera size="1.2rem" color="#F3F4F6" />
      </Box>
      <Box>
        <HiDotsVertical size="1.2rem" color="#F3F4F6" />
      </Box>
      <Box
        cursor={{
          base: 'auto',
          md: 'pointer',
        }}
      >
        <RiLogoutBoxRLine
          size="1.2rem"
          color="#F3F4F6"
          onClick={() => signOut({ callbackUrl: '/' })}
        />
      </Box>
    </Flex>
  );
};
