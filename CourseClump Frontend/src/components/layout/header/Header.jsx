import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/UserAction';
import { useDispatch } from 'react-redux';

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    onClose();
    dispatch(logoutUser());
  };
  return (
    <>
      <Button
        onClick={onOpen}
        position={'fixed'}
        top={6}
        left={6}
        width={12}
        height={12}
        colorScheme={'yellow'}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={2}>BUNDLE COURSES</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} spacing={2}>
              <LinkButton onclose={onClose} />
              <LinkButton
                onclose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onclose={onClose}
                title="Request a Course"
                url="/request-course"
              />
              <LinkButton onclose={onClose} title="Contact Us" url="/contact" />
              <LinkButton onclose={onClose} title="About" url="/about" />
            </VStack>
            {isAuthenticated ? (
              <>
                <VStack
                  position={'absolute'}
                  bottom={'2rem'}
                  justifyContent={'space-evenly'}
                  width="80%"
                >
                  <HStack>
                    <Link to="/profile">
                      <Button
                        onClick={onClose}
                        colorScheme="gray"
                        variant={'ghost'}
                      >
                        Profile
                      </Button>
                    </Link>

                    <Link>
                      <Button
                        onClick={logoutHandler}
                        colorScheme="red"
                        variant={'ghost'}
                      >
                        <RiLogoutBoxLine />
                        &nbsp;Logout
                      </Button>
                    </Link>
                  </HStack>
                  {user && user.role === 'admin' && (
                    <Link to="/admin/dashboard">
                      <Button
                        onClick={onClose}
                        colorScheme="purple"
                        variant={'ghost'}
                      >
                        <RiDashboardFill />
                        &nbsp;Dashboard
                      </Button>
                    </Link>
                  )}
                </VStack>
              </>
            ) : (
              <>
                <HStack
                  position={'absolute'}
                  bottom={'2rem'}
                  justifyContent={'space-evenly'}
                  width="80%"
                >
                  <Link to="/login">
                    <Button onClick={onClose} colorScheme="yellow">
                      Login
                    </Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/register">
                    <Button onClick={onClose} colorScheme="yellow">
                      Sign Up
                    </Button>
                  </Link>
                </HStack>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <ColorModeSwitcher />
    </>
  );
};

const LinkButton = ({ url = '/ ', title = 'Home', onclose }) => (
  <Link to={url}>
    <Button onClick={onclose} variant={'ghost'}>
      {title}
    </Button>
  </Link>
);

export default Header;
