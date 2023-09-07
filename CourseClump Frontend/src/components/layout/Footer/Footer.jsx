import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={4} bg={'blackAlpha.900'}>
      <Stack direction={['column', 'row']} color={'white'}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading size={'md'}>All Rights Reserved</Heading>
          <Heading color='yellow.300' size='sm'>
            @ Hrdps
          </Heading>
        </VStack>
        <HStack spacing={[2, 10]} justifyContent={'center'} fontSize={50}>
          <a
            href='https://www.instagram.com/hrdps/'
            target='blank'
            rel='noreferrer'>
            <TiSocialInstagramCircular />
          </a>
          <a
            href='https://www.linkedin.com/in/hrdps/'
            target='blank'
            rel='noreferrer'>
            <TiSocialLinkedinCircular />
          </a>
          <a href='https://github.com/hrdps' target='blank' rel='noreferrer'>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
