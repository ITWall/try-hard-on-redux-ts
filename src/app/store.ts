import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { GithubAPI } from '../features/todo/api/GithubAPI';
import taskReducer  from '../features/todo/slice/Task';
import ReqresApi from '../features/usersManagement/api/ReqresApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    [GithubAPI.reducerPath]: GithubAPI.reducer,
    [ReqresApi.reducerPath]: ReqresApi.reducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReqresApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
