'use client';

import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <Flex
      width="100%"
      height="100vh"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      color="#FFFFFF"
    >
      <Box>
        <Text
          as="h2"
          letterSpacing="tighter"
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
            fontWeight: 'bold',

            background: 'linear-gradient(to bottom, #FFFFFF 40%, #B2BDCC 80%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            margin: 0,
            padding: 0,
            width: '800px',
            textAlign: 'center',
            lineHeight: '4.3rem',
          }}
        >
          Elevate Your Digital Experience
        </Text>
      </Box>
      <Box>
        <Text
          as="p"
          color="#B2BDCC"
          fontSize="20px"
          m="1.5rem 2.125rem"
          w="900px"
          textAlign="center"
        >
          Discover a new dimension of possibilities with our cutting-edge
          platform.
        </Text>
      </Box>
      <Button
        bgColor="#1E293B"
        _hover={{
          bgColor: '#64748B',
        }}
        color="#ffffff"
        border="1px solid rgba(255, 255, 255, 0.2)"
        fontWeight="bold"
        rounded="md"
        p="0.5rem 2rem"
        onClick={() => signIn()}
      >
        Sign In
      </Button>
    </Flex>
  );
}
