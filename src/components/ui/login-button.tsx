import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import { ReactElement } from 'react';

export const LoginButton = ({
  provider,
  icon,
}: {
  provider: string;
  icon: ReactElement;
}) => {
  return (
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
      onClick={() => signIn(provider)}
    >
      {icon}
    </Button>
  );
};
