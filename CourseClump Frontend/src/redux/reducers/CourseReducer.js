import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  { courses: [], lectures: [] },
  {
    getCoursesRequest: (state, action) => {
      state.loading = true;
    },
    getCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLecturesRequest: (state, action) => {
      state.loading = true;
    },
    getLecturesSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    getLecturesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToPlaylistRequest: (state, action) => {
      state.loading = true;
    },
    addToPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addToPlaylistFail: (state, action) => {
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
