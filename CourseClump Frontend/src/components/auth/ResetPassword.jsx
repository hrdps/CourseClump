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
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { resetPassword } from '../../redux/actions/ProfileAction';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const params = useParams();
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
      setPassword('');
      setRePass('');
    }
  }, [dispatch, error, message]);
  const submitHandler = e => {
    e.preventDefault();
    dispatch(resetPassword(password, rePass, params.token));
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Reset Password</Heading>
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={4}>
            <FormLabel htmlFor="password" children="Enter New Password" />
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
            <FormLabel htmlFor="repassword" children="Re-enter Your Password" />
            <Input
              id="repassword"
              required
              value={rePass}
              placeholder="*******"
              onChange={e => setRePass(e.target.value)}
              type="text"
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

export default ResetPassword;
