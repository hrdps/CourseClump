import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  HStack,
  Heading,
  Input,
  Progress,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../redux/actions/UserAction';

export const fileUploadCss = {
  width: '110%',
  marginLeft: '-5%',
  cursor: 'pointer',
  backgroundColor: 'white',
  color: '#dbac00',
  border: 'none',
  height: '100%',
};

const cssforAvatar = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [image, setImage] = useState('');
  const [inputType, setInputType] = useState({
    input: 'password',
    btn: 'Show',
  });
  const [passwordStrength, setPasswordStrength] = useState({
    value: 60,
    color: 'red',
  });

  const avatarHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageURL(reader.result);
      setImage(file);
    };
  };
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(registerUser(Name, Email, password, image));
  };

  const handlePass = () => {
    if (inputType.input === 'password') {
      setInputType({ input: 'text', btn: 'Hide' });
    }
    if (inputType.input === 'text') {
      setInputType({ input: 'password', btn: 'Show' });
    }
  };

  const onchangeHandler = e => {
    let score = 0;
    let colorValue = 'red';
    if (/[a-z]/.test(e.target.value)) score += 1;
    if (/[A-Z]/.test(e.target.value)) score += 1;
    if (/[0-9]/.test(e.target.value)) score += 1;
    if (e.target.value.length >= 8) score += 1;
    if (
      e.target.value.includes('$') ||
      e.target.value.includes('#') ||
      e.target.value.includes('_') ||
      e.target.value.includes('@')
    )
      score += 1;
    setPassword(e.target.value);
    if (score === 3 || score === 4) colorValue = 'orange';
    if (score === 5) colorValue = 'green';
    setPasswordStrength({
      value: (e.target.value.length / 8) * 100,
      color: colorValue,
    });
  };
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={16}>
        <Heading>Registration</Heading>
        <form
          style={{ width: '100%' }}
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <Box spacing={'16'} justifyContent={'center'} display={'flex'}>
            <Avatar src={imageURL} size={'2xl'} />
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              id="name"
              required
              value={Name}
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
            <FormLabel htmlFor="password" children="Password" />
            <Stack>
              <HStack>
                <Input
                  id="password"
                  required
                  value={password}
                  placeholder="*******"
                  onChange={onchangeHandler}
                  type={inputType.input}
                  focusBorderColor="yellow.400"
                />
                <Button onClick={handlePass}>{inputType.btn}</Button>
              </HStack>
              <Progress
                borderRadius={'20px'}
                value={passwordStrength.value}
                colorScheme={passwordStrength.color}
              />
            </Stack>
          </Box>
          <Box my={4}>
            <FormLabel htmlFor="avatar" children="Choose Avatar" />
            <Input
              onChange={avatarHandler}
              type="file"
              id="avatar"
              accept="Image/*"
              required
              focusBorderColor="yellow.400"
              css={cssforAvatar}
            />
          </Box>
          <Button my={4} type="submit" colorScheme="yellow">
            Sign up
          </Button>
          <Box my={6}>
            Already a User?&nbsp;
            <Link to="/login">
              <Button colorScheme="yellow" variant="link">
                Login
              </Button>
            </Link>
            &nbsp;here!
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
