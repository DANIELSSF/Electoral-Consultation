import { configureStore } from '@reduxjs/toolkit';
import { votacionSlice } from './votacion/votacionSlice';

export const store = configureStore({
  reducer: {
    votacion: votacionSlice.reducer,
  },
});
