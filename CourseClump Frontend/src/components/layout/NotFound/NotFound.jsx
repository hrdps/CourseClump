import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container h={'95vh'} p={16}>
      <Heading textAlign={'center'} p={8} size={'lg'}>
        ERROR 404
      </Heading>
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}
      >
        <Box p={4}>
          <VStack>
            <Text p={4}>OOPS, PAGE NOT FOUND</Text>
            <Heading p={0} size={'3xl'} color={'red.400  '}>
              <BiErrorAlt />
            </Heading>
            <Link to="/">
              <Button variant={'ghost'} w={'full'} my={6} colorScheme="yellow">
                Go to Home
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default NotFound;
