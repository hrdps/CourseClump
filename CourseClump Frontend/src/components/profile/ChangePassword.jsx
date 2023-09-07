import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { updatePassword } from '../../redux/actions/ProfileAction';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/UserAction';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector(state => state.profile);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
      dispatch(loadUser());
      navigate('/profile');
    }
  }, [dispatch, error, message, navigate]);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updatePassword(oldPassword, newPassword));
  };

  return (
    <Container py="16" minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          children="Change Password"
          my="16"
          textAlign={['center', 'left']}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button
            isLoading={loading}
            w="full"
            colorScheme={'yellow'}
            type="submit"
          >
            Change
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

export default ChangePassword;
