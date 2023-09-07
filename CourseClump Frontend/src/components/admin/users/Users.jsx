import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeRoleAction,
  deleteUserAction,
  getAdminUsers,
} from '../../../redux/actions/AdminAction';
import { toast } from 'react-hot-toast';

const Users = ({ user }) => {
  const dispatch = useDispatch();
  const { users, message, error } = useSelector(state => state.admin);
  const updateHandler = async userId => {
    await dispatch(changeRoleAction(userId));
    dispatch(getAdminUsers());
  };
  const deleteButtonHandler = async userId => {
    await dispatch(deleteUserAction(userId));
    dispatch(getAdminUsers());
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);
  return (
    <Grid minH={'95vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    user={user}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler, user }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active'
          ? 'Active'
          : 'Not Active'}
      </Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            isDisabled={user._id === item._id ? true : false}
            onClick={() => updateHandler(item._id)}
            variant={'outline'}
            color="purple.500"
          >
            Change Role
          </Button>

          <Button
            isDisabled={user._id === item._id ? true : false}
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
