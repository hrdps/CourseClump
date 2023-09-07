import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/OtherAction';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, Email, message));
  };
  const {
    error,
    message: actionMessage,
    loading,
  } = useSelector(state => state.other);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (actionMessage) {
      toast.success(actionMessage);
      dispatch({ type: 'clearMessage' });
      setName('');
      setEmail('');
      setMessage('');
    }
  }, [dispatch, error, actionMessage]);
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Contact Us</Heading>
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Full Name" />
            <Input
              id="name"
              required
              value={name}
              placeholder="John Doe"
              onChange={e => setName(e.target.value)}
              type="name"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              id="email"
              required
              value={Email}
              placeholder="abc@mail.com"
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="message" children="Message" />
            <Input
              id="message"
              required
              value={message}
              placeholder="Enter your Message..."
              onChange={e => setMessage(e.target.value)}
              type="text"
              focusBorderColor="yellow.400"
            />
          </Box>

          <Button isLoading={loading} my={4} type="submit" colorScheme="yellow">
            Send Mail
          </Button>
          <Box my={6}>
            Request a Course?&nbsp;
            <Link to="/request-course">
              <Button colorScheme="yellow" variant="link">
                Click
              </Button>
            </Link>
            &nbsp;here!
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
