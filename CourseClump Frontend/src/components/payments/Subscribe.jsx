import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscriptionAction } from '../../redux/actions/UserAction';
import { toast } from 'react-hot-toast';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Subscribe = (user) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState();
  const subscribeHandler = async () => {
    const { data } = await axios.get(`${server}/paymentkey`);
    setKey(data.key);
    dispatch(buySubscriptionAction());
  };
  const { error, message, loading, subscriptionId } = useSelector(
    (state) => state.subscription
  );
  const { error: courseError } = useSelector((state) => state.course);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      console.log(subscriptionId.id);
      const openPopUp = () => {
        const options = {
          key: key, // Enter the Key ID generated from the Dashboard
          subscription_id: subscriptionId.id,
          name: 'CourseClump', //your business name
          description: 'Get access to all premium content',
          image: logo,
          callback_url: `${server}/paymentverification`,
          prefill: {
            //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            name: user.name, //your customer's name
            email: user.email,
            contact: '', //Provide the customer's phone number for better conversion rates
          },

          notes: {
            address: 'CourseClump Corporate Office',
          },
          theme: {
            color: '#ecc94b',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    courseError,
    error,
    message,
    subscriptionId,
    user.name,
    user.email,
    key,
    user._id,
  ]);
  return (
    <Container h={'95vh'} p={16}>
      <Heading textAlign={'center'} p={8}>
        Welcome
      </Heading>
      <VStack
        boxShadow={'lg'}
        alignItems={'stretch'}
        borderRadius={'lg'}
        spacing={0}>
        <Box bg={'yellow.400'} p={4} borderRadius={'8px 8px 0px 0px'}>
          <Text color={'black'}>Pro Pack - $299.00</Text>
        </Box>
        <Box p={4}>
          <VStack>
            <Text p={4}>Join pro pack and get access all the content.</Text>
            <Heading p={4} size={'md'}>
              $299.00
            </Heading>
            <Button
              isLoading={loading}
              onClick={subscribeHandler}
              w={'full'}
              my={6}
              colorScheme='yellow'>
              Buy Now
            </Button>
          </VStack>
        </Box>
        <Box
          bg={'blackAlpha.500'}
          spacing={0}
          p={4}
          borderRadius={'0px 0px 8px 8px'}
          color={'white'}>
          <Heading size={'sm'}>100% Refund At Cancellation</Heading>
          <Text fontSize={10}>Terms and Conditions apply*</Text>
        </Box>
      </VStack>
      <VStack marginTop={'20px'}>
        <Link to={'/profile'}>
          <Button p={5} spacing={32} variant={'link'} colorScheme={'yellow'}>
            <BiArrowBack />
            &nbsp;Go Back
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Subscribe;
