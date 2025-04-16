'use client';

import { Flex, Box, Text } from '@chakra-ui/react';
import { LOGIN_PROVIDERS } from '@/app/constants';
import { LoginButton } from '@/app/components/LoginButton';
import { useSession } from 'next-auth/react';
import { Spinner } from '@/components/ui/spinner';

export default function Login() {
  const providers = Object.values(LOGIN_PROVIDERS);
  const { status } = useSession();

  if (status === 'loading') return <Spinner />;

  if (status === 'authenticated') return <Spinner to="/chat" />;

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
      <Flex gap=".8rem">
        {providers.map((provider) => (
          <LoginButton
            key={provider.name}
            provider={provider.name}
            icon={provider.icon}
          />
        ))}
      </Flex>
    </Flex>
  );
}
