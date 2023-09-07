import { createReducer } from '@reduxjs/toolkit';

export const adminReducer = createReducer(
  { users: [] },
  {
    createCourseRequest: (state, action) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCourseRequest: (state, action) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteLectureRequest: (state, action) => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addLectureRequest: (state, action) => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAdminUsersRequest: (state, action) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    changeRoleRequest: (state, action) => {
      state.loading = true;
    },
    changeRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    changeRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state, action) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAdminStatsRequest: state => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.viewsCount = action.payload.viewsCount;
      state.subscriptionCount = action.payload.subscribersCount;
      state.usersCount = action.payload.usersCount;
      state.subscriptionPercentage = action.payload.subscribersPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.usersPercentage = action.payload.usersPercentage;
      state.subscriptionProfit = action.payload.subscribersProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  }
);
