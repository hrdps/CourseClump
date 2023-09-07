import { HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'yellow.400' }) => {
  return (
    <VStack h={'100vh'} justifyContent={'center'}>
      <HStack>
        <Spinner
          speed="0.65s"
          thickness="2px"
          emptyColor="transparent"
          color={color}
          size="xl"
        />
      </HStack>
      <HStack>
        <Text color="yellow.600">Loading</Text>
      </HStack>
    </VStack>
  );
};

export default Loader;
