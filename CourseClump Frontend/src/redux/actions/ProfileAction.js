import { server } from '../store';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });
    const { data } = await axios.put(
      `${server}/updateprofile`,
      { name, email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'updateProfileSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};

export const updatePassword = (oldPassword, newPassword) => async dispatch => {
  try {
    dispatch({ type: 'updatePasswordRequest' });
    const { data } = await axios.put(
      `${server}/updatepassword`,
      { oldPassword, newPassword },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'updatePasswordSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'updatePasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const updateProfilePicture = file => async dispatch => {
  try {
    dispatch({ type: 'updatePPictureRequest' });
    const { data } = await axios.put(
      `${server}/updateprofilepicture`,
      { file },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'updatePPictureSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'updatePPictureFail',
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = email => async dispatch => {
  try {
    dispatch({ type: 'forgetPasswordRequest' });
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'forgetPasswordSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword =
  (password, repassword, token) => async dispatch => {
    try {
      dispatch({ type: 'resetPasswordRequest' });
      const { data } = await axios.put(
        `${server}/resetpassword/${token}`,
        { password, repassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      dispatch({ type: 'resetPasswordSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'resetPasswordFail',
        payload: error.response.data.message,
      });
    }
  };
export const removeFromPlaylistAction = id => async dispatch => {
  try {
    dispatch({ type: 'removeFromPlaylistRequest' });
    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'removeFromPlaylistSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'removeFromPlaylistFail',
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscriptionAction = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });
    const { data } = await axios.delete(`${server}/cancelsubscription`, {
      withCredentials: true,
    });

    dispatch({ type: 'cancelSubscriptionSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
