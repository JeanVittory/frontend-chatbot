import { Box, Flex } from '@chakra-ui/react';
import { InputMessage } from '@/components/ui/inputMessage';
import { UserLabel } from '@/components/ui/userLabel';
import { ChatUserOptions } from '@/components/ui/chatUserOptions';
import { Message } from '@/components/ui/message';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Chat() {
  const session = await getServerSession(authOptions);

  console.log(session);
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
      <Flex flexDirection="column" m="auto" maxWidth="800px" px="1rem">
        <Message isHuman={true} />
        <Message isHuman={false} />
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
