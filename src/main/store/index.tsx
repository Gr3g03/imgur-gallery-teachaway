import { configureStore } from '@reduxjs/toolkit';
import galeryReducer from './slices/galerySlice';
const store = configureStore({
  reducer: {
    galery: galeryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
