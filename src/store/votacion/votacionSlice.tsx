import { createSlice } from '@reduxjs/toolkit';
import { IVerify, IVotacion } from '../../elections/interfaces';

export const votacionSlice = createSlice({
  name: 'votacion',
  initialState: {
    status: 'checking',
    errorMessage: undefined,
    isLoading: true,
    user: null,
  } as IVotacion,

  reducers: {
    checking: (state) => {
      state.status = 'checking';
      state.errorMessage = undefined;
      state.user = null;
    },

    onVisit: (state) => {
      state.isLoading = false;
      state.status = 'votante';
      state.errorMessage = undefined;
      state.user = null;
    },

    onLogin: (state, { payload }) => {
      state.isLoading = false;
      state.status = 'authenticated';
      state.errorMessage = undefined;
      state.user = payload as IVerify;
    },

    onVoting: (state, { payload }) => {
      state.isLoading = false;
      state.status = 'votante';
      state.errorMessage = undefined;
      state.user = payload as IVerify;
    },

    onLogout: (state) => {
      state.isLoading = false;
      state.status = 'not-authenticated';
      state.errorMessage = undefined;
      state.user = null;
    },

    isErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },

    onJudge: (state, { payload }) => {
      state.isLoading = false;
      state.status = 'jurado';
      state.user = payload;
      state.errorMessage = undefined;
    },

    onLoading: (state) => {
      state.isLoading = true;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  checking,
  clearErrorMessage,
  isErrorMessage,
  onJudge,
  onLoading,
  onLogin,
  onLogout,
  onVisit,
  onVoting,
} = votacionSlice.actions;
