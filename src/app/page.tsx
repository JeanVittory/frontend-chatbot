import { InputMessage } from '@/components/ui/inputMessage';
import { Box, Flex } from '@chakra-ui/react';
import { UserLabel } from '@/components/ui/userLabel';
import { ChatUserOptions } from '@/components/ui/chatUserOptions';

export default function Home() {
  return (
    <Box>
      <Flex
        p=".8rem"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#0D1322"
        borderBottom="1px solid rgba(255, 255, 255, 0.1)"
      >
        <UserLabel />
        <ChatUserOptions />
      </Flex>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        padding="1rem"
        bgColor="#0D1322"
        borderTop="1px solid rgba(255, 255, 255, 0.1)"
      >
        <InputMessage />
      </Box>
    </Box>
  );
}
