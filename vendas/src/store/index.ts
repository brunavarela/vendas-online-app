import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import globalReducer from './reducers/globalReducer';

export const store =  configureStore({
  reducer: {
    globalReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
