import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');
  return (
    <Container h={'95vh'} p={16}>
      <Heading textAlign={'center'} p={8} size={'lg'}>
        Payment Successful!
      </Heading>
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}
      >
        <Box bg={'yellow.400'} p={4} borderRadius={'8px 8px 0px 0px'}>
          <Text color={'black'}>You have subscribed to Pro Pack!</Text>
        </Box>
        <Box p={4}>
          <VStack>
            <Text p={4}>Congratulations you are a pro member now.</Text>
            <Heading p={0} size={'3xl'} color={'yellow.400  '}>
              <RiCheckboxCircleLine />
            </Heading>
            <Link to="/profile">
              <Button variant={'ghost'} w={'full'} my={6} colorScheme="yellow">
                Go to Profile
              </Button>
            </Link>
          </VStack>
        </Box>
        <Box
          bg={'blackAlpha.900'}
          spacing={0}
          p={4}
          borderRadius={'0px 0px 8px 8px'}
          color={'white'}
        >
          <Text fontSize={'xs'}>Reference ID: {reference}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
