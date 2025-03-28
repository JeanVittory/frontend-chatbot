import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { getServerSession } from 'next-auth';

export const UserLabel = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Flex gapX=".5rem">
      <Avatar.Root size="lg">
        <Avatar.Fallback name="You" />
        <Avatar.Image src={session.user.image} />
      </Avatar.Root>
      <Flex flexDirection="column" justifyContent="center" gapY=".1rem">
        <Text as="h3" color="#F3F4F6" fontSize="1rem" lineHeight="1rem">
          {session.user.name}
        </Text>
        <Text as="p" color="#9CA3AF" fontSize=".8rem" lineHeight="1rem">
          Online
        </Text>
      </Flex>
    </Flex>
  );
};
