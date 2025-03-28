import { UserMessage } from '@/app/types/userMessage';
import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

export const Message = ({ isHuman, message, createdAt }: UserMessage) => {
  const date = dayjs(createdAt).format('DD MMM YYYY, hh:mm A');
  return (
    <Box
      mt="1rem"
      color="white"
      bgColor={isHuman ? '#4F46E5' : '#1F2937'}
      width={{
        base: '60%',
        md: '48%',
      }}
      padding=" .5rem .8rem"
      rounded={isHuman ? '20px 3px 20px 20px' : '3px 20px 20px 20px'}
      wordWrap="break-word"
      alignSelf={isHuman ? 'end' : 'flex-start'}
    >
      <Text as="p">{message}</Text>
      <Box fontSize="xs" color="#9CA3AF" textAlign="right">
        {date}
      </Box>
    </Box>
  );
};
