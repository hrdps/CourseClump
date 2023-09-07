import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToPlaylistAction,
  getCourses,
} from '../../redux/actions/CourseAction';
import Loader from '../loader/Loader';
import { toast } from 'react-hot-toast';
import { loadUser } from '../../redux/actions/UserAction';

const Course = ({
  id,
  views,
  creator,
  title,
  description,
  lectureCount,
  addtoPlaylist,
  imgSrc = 'https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg',
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imgSrc} boxSize="60" alt="text" />
      <Heading
        textAlign={['center', 'left']}
        noOfLines={3}
        maxW="200px"
        size={'sm'}
      >
        {title}
      </Heading>
      <Text noOfLines={2}>{description}</Text>
      <HStack>
        <Text fontWeight={600} size="xs">
          Creator
        </Text>
        <Text size="xs">{creator}</Text>
      </HStack>
      <Heading size="xs">{`Views - ${views}`}</Heading>
      <Heading size="xs">{`Lectures - ${lectureCount}`}</Heading>
      <Stack direction={['column', 'row']}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          onClick={() => addtoPlaylist(id)}
          variant={'ghost'}
          colorScheme="yellow"
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addtoPlaylistHandler = async id => {
    await dispatch(addToPlaylistAction(id));
    dispatch(loadUser());
  };

  const catagories = [
    'Web Development',
    'Artificial Intellegence',
    'Generative AI',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const { courses, error, message } = useSelector(state => state.course);
  const { loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getCourses(keyword, category));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);
  return (
    <Container minH={'95vh'} minW={'container.lg'} paddingY={'8'}>
      <Heading m={8}>All Courses</Heading>
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        padding={8}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {catagories.map((item, index) => (
          <Button
            colorScheme="yellow"
            variant={category === item ? 'solid' : 'outline'}
            onClick={() => {
              if (category === item) setCategory('');
              else setCategory(item);
            }}
            minW={'60'}
            key={index}
          >
            <Text>{item}</Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        alignItems={['center', 'flex-start']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
      >
        {loading ? (
          <Loader />
        ) : courses && courses.length > 0 ? (
          courses.map(item => (
            <Course
              id={item._id}
              views={item.views}
              creator={item.creator}
              title={item.title}
              description={item.description}
              lectureCount={item.numOfVideos}
              addtoPlaylist={addtoPlaylistHandler}
              imgSrc={item.poster.url}
              key={item._id}
            />
          ))
        ) : (
          <div>No Courses Found</div>
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
