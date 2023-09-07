import { server } from '../store';
import axios from 'axios';

export const createCourse =
  (title, description, category, createdBy, file) => async dispatch => {
    try {
      dispatch({ type: 'createCourseRequest' });
      const { data } = await axios.post(
        `${server}/createcourse`,
        { title, description, category, createdBy, file },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      dispatch({ type: 'createCourseSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'createCourseFail',
        payload: error.response.data.message,
      });
    }
  };
export const deleteCourse = id => async dispatch => {
  try {
    dispatch({ type: 'deleteCourseRequest' });
    const { data } = await axios.delete(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'deleteCourseSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'deleteCourseFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteCourseLecture = (courseID, lectureID) => async dispatch => {
  try {
    dispatch({ type: 'deleteLectureRequest' });
    const { data } = await axios.delete(
      `${server}/deletelecture?courseID=${courseID}&lectureID=${lectureID}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteLectureSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'deleteLectureFail',
      payload: error.response.data.message,
    });
  }
};

export const addCourseLecture =
  (id, title, description, file) => async dispatch => {
    try {
      dispatch({ type: 'addLectureRequest' });
      const { data } = await axios.post(
        `${server}/course/${id}`,
        { title, description, file },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      dispatch({ type: 'addLectureSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'addLectureFail',
        payload: error.response.data.message,
      });
    }
  };

export const getAdminUsers = () => async dispatch => {
  try {
    dispatch({ type: 'getAdminUsersRequest' });
    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: 'getAdminUsersSuccess', payload: data.users });
  } catch (error) {
    dispatch({
      type: 'getAdminUsersFail',
      payload: error.response.data.message,
    });
  }
};
export const changeRoleAction = id => async dispatch => {
  try {
    dispatch({ type: 'changeRoleRequest' });
    const { data } = await axios.put(
      `${server}/admin/user/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'changeRoleSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'changeRoleFail',
      payload: error.response.data.message,
    });
  }
};

export const deleteUserAction = id => async dispatch => {
  try {
    dispatch({ type: 'deleteUserRequest' });
    const { data } = await axios.delete(
      `${server}/admin/user/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'deleteUserSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'deleteUserFail',
      payload: error.response.data.message,
    });
  }
};
export const getDashboardStats = () => async dispatch => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch({ type: 'getAdminStatsRequest' });

    const { data } = await axios.get(`${server}/admin/stats`, config);

    dispatch({ type: 'getAdminStatsSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'getAdminStatsFail',
      payload: error.response.data.message,
    });
  }
};
