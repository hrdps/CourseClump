import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './Home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import mainVideo from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '20', '38', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading size={'2xl'}>LEARN FROM THE EXPERTS</Heading>
            <Text>Find Valuable Content At Reasonable Price</Text>
            <Link to={'/courses'}>
              <Button size="lg" colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'lg'}
            alt="Image"
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box bg={'blackAlpha.800'} padding={16}>
        <Heading color="yellow.400" textAlign={'center'} font="body">
          OUR BRANDS
        </Heading>
        <HStack
          className="brand-icons"
          textAlign={'center'}
          justifyContent={'space-evenly'}
          marginTop={10}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2">
        <video
          controls
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          disablePictureInPicture
          disableRemotePlayback
          src={mainVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
