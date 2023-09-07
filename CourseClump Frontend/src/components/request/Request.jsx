import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseRequest } from '../../redux/actions/OtherAction';
import { toast } from 'react-hot-toast';

const Request = () => {
  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(courseRequest(name, Email, course));
  };
  const { error, message, loading } = useSelector(state => state.other);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      setName('');
      setEmail('');
      setCourse('');
    }
  }, [dispatch, error, message]);
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Request New Course</Heading>
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
            <FormLabel htmlFor="course" children="Course Details" />
            <Textarea
              id="course"
              required
              value={course}
              placeholder="Enter Course Details"
              onChange={e => setCourse(e.target.value)}
              type="textbox"
              focusBorderColor="yellow.400"
            />
          </Box>

          <Button isLoading={loading} my={4} type="submit" colorScheme="yellow">
            Send Mail
          </Button>
          <Box my={6}>
            Check Available Courses&nbsp;
            <Link to="/courses">
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

export default Request;
