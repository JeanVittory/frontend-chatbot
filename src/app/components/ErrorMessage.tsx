import { Box, Flex } from '@chakra-ui/react';

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box color="white">{message}</Box>
    </Flex>
  );
};
