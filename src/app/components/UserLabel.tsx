// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

export const UserLabel = () => {
  const { data } = useSession();
  return (
    <Flex gapX=".5rem">
      <Avatar.Root size="lg">
        <Avatar.Fallback name="You" />
        <Avatar.Image src={data?.user.image ? data?.user.image : 'hello'} />
      </Avatar.Root>
      <Flex flexDirection="column" justifyContent="center" gapY=".1rem">
        <Text as="h3" color="#F3F4F6" fontSize="1rem" lineHeight="1rem">
          {data?.user.name}
        </Text>
        <Text as="p" color="#9CA3AF" fontSize=".8rem" lineHeight="1rem">
          Online
        </Text>
      </Flex>
    </Flex>
  );
};
