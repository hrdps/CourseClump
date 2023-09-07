import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/ProfileAction';

import { loadUser } from '../../redux/actions/UserAction';

const UpdateProfile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.profile);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };

  return (
    <Container py="16" minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my="16"
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type={'text'}
            focusBorderColor="yellow.500"
          />{' '}
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w="full"
            colorScheme={'yellow'}
            type="submit"
          >
            Update
          </Button>
          <Link to="/profile">
            <Button p={5} spacing={32} variant={'link'} colorScheme={'yellow'}>
              <BiArrowBack />
              &nbsp;Go Back
            </Button>
          </Link>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
