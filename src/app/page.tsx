import { InputMessage } from '@/components/ui/inputMessage';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
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
