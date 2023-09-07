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
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/ProfileAction';

const ForgetPassword = () => {
  const [Email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(state => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      setEmail('');
    }
  }, [dispatch, error, message]);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(Email));
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Forget Password</Heading>
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel htmlFor="email" children="Enter Your Registered Email" />
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

          <Button isLoading={loading} my={4} type="submit" colorScheme="yellow">
            Reset Password
          </Button>
          <Box my={6}>
            Go back to&nbsp;
            <Link to="/login">
              <Button colorScheme="yellow" variant="link">
                Login
              </Button>
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default ForgetPassword;
