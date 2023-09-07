import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer(
  {},
  {
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    loadUserRequest: (state, action) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutRequest: (state, action) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = undefined;
      state.message = action.payload.message;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },
    registerRequest: (state, action) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
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

export const profileReducer = createReducer(
  {},
  {
    updateProfileRequest: (state, action) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePasswordRequest: (state, action) => {
      state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updatePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePPictureRequest: (state, action) => {
      state.loading = true;
    },
    updatePPictureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updatePPictureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    forgetPasswordRequest: (state, action) => {
      state.loading = true;
    },
    forgetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    forgetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state, action) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    resetPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromPlaylistRequest: (state, action) => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    removeFromPlaylistFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    cancelSubscriptionRequest: (state, action) => {
      state.loading = true;
    },
    cancelSubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    cancelSubscriptionFail: (state, action) => {
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

export const subscriptionReducer = createReducer(
  {},
  {
    buySubscriptionRequest: (state, action) => {
      state.loading = true;
    },
    buySubscriptionSuccess: (state, action) => {
      state.loading = false;
      state.subscriptionId = action.payload.subscription;
    },
    buySubscriptionFail: (state, action) => {
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
