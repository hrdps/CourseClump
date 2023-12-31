import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/me`, { withCredentials: true });

    dispatch({ type: 'loadUserSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logoutUser = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({ type: 'logoutSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const registerUser = (name, email, password, file) => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });
    const { data } = await axios.post(
      `${server}/register`,
      { name, email, password, file },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
  }
};
export const buySubscriptionAction = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });
    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    dispatch({ type: 'buySubscriptionSuccess', payload: data });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
