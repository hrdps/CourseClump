import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { IoIosCreate } from 'react-icons/io';
import { MdVideoLibrary } from 'react-icons/md';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      alignItems={['flex-start', 'flex-start']}
      padding={'10vh 5vh 5vh 5vh'}
      spacing={10}
      boxShadow={'-2px 0px 10px rgba(107,70,193,0.5)'}
    >
      <Link to="/admin/dashboard">
        <Button
          variant={'link'}
          colorScheme={
            location.pathname === '/admin/dashboard' ? 'purple' : 'black'
          }
        >
          <MdDashboard />
          &nbsp; Dashboard
        </Button>
      </Link>
      <Link to="/admin/createcourse">
        <Button
          variant={'link'}
          colorScheme={
            location.pathname === '/admin/createcourse' ? 'purple' : 'black'
          }
        >
          <IoIosCreate />
          &nbsp; Create Course
        </Button>
      </Link>
      <Link to="/admin/courses">
        <Button
          variant={'link'}
          colorScheme={
            location.pathname === '/admin/courses' ? 'purple' : 'black'
          }
        >
          <MdVideoLibrary />
          &nbsp; Courses
        </Button>
      </Link>
      <Link to="/admin/users">
        <Button
          variant={'link'}
          colorScheme={
            location.pathname === '/admin/users' ? 'purple' : 'black'
          }
        >
          <FiUsers />
          &nbsp; Users
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;
