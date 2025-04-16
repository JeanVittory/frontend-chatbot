import { Box } from '@chakra-ui/react';
import { InputMessage } from '@/app/components/InputMessage';
// import { WebsocketProvider } from '../providers/WebsocketProvider';
import { Messages } from '../components/Messages';

export default async function Chat() {
  return (
    <Box>
      <Messages />
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
