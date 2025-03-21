import { Box } from '@chakra-ui/react';
import { BsFillSendFill } from 'react-icons/bs';

export const Input = () => {
  return (
    <form
      style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}
    >
      <Box
        backgroundColor="#1F2937"
        padding=".5rem"
        ml="2rem"
        rounded="1rem"
        border="1px solid rgba(255, 255, 255, 0.3)"
        width="100%"
      >
        <input type="text" placeholder="Type a message..." />
      </Box>
      <button
        type="submit"
        style={{ backgroundColor: '#494ACA', padding: '.3rem' }}
      >
        <BsFillSendFill size="20" />
      </button>
    </form>
  );
};
