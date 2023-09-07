import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/UserAction';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Welcome to Course Bundler</Heading>
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel htmlFor="email" children="Email" />
            <Input
              id="email"
              required
              value={email}
              placeholder="abc@mail.com"
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              id="password"
              required
              value={password}
              placeholder="*******"
              onChange={e => setPassword(e.target.value)}
              type="password"
              focusBorderColor="yellow.400"
            />
          </Box>
          <Box my={4}>
            <Link to="/forgetpassword">
              <Button variant="link" colorScheme="yellow">
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button my={4} type="submit" colorScheme="yellow">
            Login
          </Button>
          <Box my={6}>
            New User?&nbsp;
            <Link to="/register">
              <Button colorScheme="yellow" variant="link">
                Sign Up
              </Button>
            </Link>
            &nbsp;here!
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
