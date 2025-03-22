import { Avatar, Flex, Text } from '@chakra-ui/react';

export const UserLabel = () => {
  return (
    <Flex gapX=".5rem">
      <Avatar.Root size="lg">
        <Avatar.Fallback name="You" />
        <Avatar.Image />
      </Avatar.Root>
      <Flex flexDirection="column" justifyContent="center" gapY=".1rem">
        <Text as="h3" color="#F3F4F6" fontSize="1rem" lineHeight="1rem">
          Jean Carlo
        </Text>
        <Text as="p" color="#9CA3AF" fontSize=".8rem" lineHeight="1rem">
          Online
        </Text>
      </Flex>
    </Flex>
  );
};
