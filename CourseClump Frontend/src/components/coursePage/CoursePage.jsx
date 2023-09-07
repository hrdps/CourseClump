import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getlectures } from '../../redux/actions/CourseAction';

const CoursePage = ({ user }) => {
  const listStyle = {
    borderBottom: '1px solid rgb(0,0,0,0.2)',
    width: '100%',
    padding: '1rem',
    margin: 0,
  };
  const [lecture, setLecture] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getlectures(params.id));
  }, [dispatch, params.id]);
  const { lectures } = useSelector(state => state.course);
  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }
  return (
    <Grid
      margin={'10vh 0px 0px 0px'}
      minH={'85vh'}
      templateColumns={['1fr', '5fr 3fr']}
    >
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              controls
              controlsList=" nodownload noremoteplayback noplaybackrate"
              disablePictureInPicture
              disableRemotePlayback
              src={lectures[lecture].video.url}
            ></video>

            <Heading p={4} size={'md'}>{`#${lecture + 1} ${
              lectures[lecture].title
            }`}</Heading>
            <Text
              p={4}
              fontFamily="sans-serif"
            >{`${lectures[lecture].description}`}</Text>
          </Box>
          <VStack h={'70.6vh'} boxShadow={'lg'}>
            <Box overflowY={'auto'}>
              {lectures.map((item, index) => (
                <button
                  onClick={() => setLecture(index)}
                  style={listStyle}
                  key={item._id}
                >{`#${index + 1} ${item.title}`}</button>
              ))}
            </Box>
            <VStack>
              <Link to={'/profile'}>
                <Button>Go Back</Button>
              </Link>
            </VStack>
          </VStack>
        </>
      ) : (
        <>
          <VStack>
            <Heading>No Lectures Available</Heading>
          </VStack>
          <VStack>
            <Link to={'/profile'}>
              <Button>Go Back</Button>
            </Link>
          </VStack>
        </>
      )}
    </Grid>
  );
};

export default CoursePage;
