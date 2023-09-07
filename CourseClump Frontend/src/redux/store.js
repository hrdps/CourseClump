import { configureStore } from '@reduxjs/toolkit';
import {
  profileReducer,
  subscriptionReducer,
  userReducer,
} from './reducers/UserReducer';
import { courseReducer } from './reducers/CourseReducer';
import { adminReducer } from './reducers/AdminReducer';
import { otherReducer } from './reducers/OtherReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;
export const server = 'https://coursebundler-rp28.onrender.com/api/v1';
