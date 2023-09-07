import { server } from '../store';
import axios from 'axios';

export const getCourses =
  (keyword = '', category = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'getCoursesRequest' });
      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`,
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'getCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'getCoursesFail',
        payload: error.response.data.message,
      });
    }
  };
export const addToPlaylistAction = id => async dispatch => {
  try {
    dispatch({ type: 'addToPlaylistRequest' });
    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      { id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'addToPlaylistSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'addToPlaylistFail',
      payload: error.response.data.message,
    });
  }
};

export const getlectures = id => async dispatch => {
  try {
    dispatch({ type: 'getLecturesRequest' });
    const { data } = await axios.get(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'getLecturesSuccess', payload: data.lectures });
  } catch (error) {
    dispatch({
      type: 'getLecturesFail',
      payload: error.response.data.message,
    });
  }
};
