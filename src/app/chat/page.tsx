import { Box } from '@chakra-ui/react';
import { InputMessage } from '../components/InputMessage';
import { Messages } from '../components/Messages';
import { ErrorMessage } from '../components/ErrorMessage';
import { checkBackendHealth } from '../utils/checkBackendHealth';

export default async function Chat() {
  const isHealthy = await checkBackendHealth();

  if (!isHealthy)
    return (
      <ErrorMessage message="Something went wrong with the server. Please try again later." />
    );
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
