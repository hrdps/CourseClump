import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, getlectures } from '../../../redux/actions/CourseAction';
import { toast } from 'react-hot-toast';
import {
  addCourseLecture,
  deleteCourse,
  deleteCourseLecture,
} from '../../../redux/actions/AdminAction';

const AdminCourses = () => {
  // const courses = [
  //   {
  //     _id: '3rfdfesrf3',
  //     title: 'React Course',
  //     category: 'Web Development',
  //     poster: {
  //       url: 'https://cdn.pixabay.com/photo/2023/07/01/11/40/old-tree-8100015_1280.jpg',
  //     },
  //     createdBy: 'Hrdps',
  //   },
  // ];
  // const lectures = [
  //   {
  //     _id: 'dsadsadsafgg3434',
  //     title: 'React Introduction',
  //     description: 'Web Development',
  //   },
  //   {
  //     _id: 'dgg3434',
  //     title: 'React Introduction',
  //     description: 'Web Development',
  //   },
  //   {
  //     _id: 'dsads3434',
  //     title: 'React Introduction',
  //     description: 'Web Development',
  //   },
  // ];
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const dispatch = useDispatch();
  const coureDetailsHandler = (courseId, title) => {
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };
  const deleteButtonHandler = courseId => {
    dispatch(deleteCourse(courseId));
  };
  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteCourseLecture(courseId, lectureId));
    dispatch(getlectures(courseId));
  };

  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    await dispatch(addCourseLecture(courseId, title, description, video));
    dispatch(getlectures(courseId));
  };
  const { courses, error, message } = useSelector(state => state.course);
  const {
    error: adminError,
    message: adminMessage,
    loading,
  } = useSelector(state => state.admin);

  useEffect(() => {
    dispatch(getCourses());

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (adminError) {
      toast.error(adminError);
      dispatch({ type: 'clearError' });
    }

    if (adminMessage) {
      toast.success(adminMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message, adminMessage, adminError]);
  return (
    <Grid minH={'95vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Courses"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  coureDetailsHandler={coureDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={courseId}
          courseTitle={courseTitle}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          loading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function Row({ item, coureDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>
        <Image w={24} src={item.poster.url} />
      </Td>

      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => coureDetailsHandler(item._id, item.title)}
            variant={'outline'}
            color="purple.500"
          >
            View Lectures
          </Button>

          <Button
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
