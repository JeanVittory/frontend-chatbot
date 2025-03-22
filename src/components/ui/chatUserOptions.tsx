import { IoCallOutline } from 'react-icons/io5';
import { PiVideoCamera } from 'react-icons/pi';
import { HiDotsVertical } from 'react-icons/hi';
import { Flex } from '@chakra-ui/react';

export const ChatUserOptions = () => {
  return (
    <Flex gapX="2rem">
      <IoCallOutline size="1.2rem" color="#F3F4F6" />
      <PiVideoCamera size="1.2rem" color="#F3F4F6" />
      <HiDotsVertical size="1.2rem" color="#F3F4F6" />
    </Flex>
  );
};
