import { configureStore } from '@reduxjs/toolkit';
// 学習: todoReducerは任意の名前でexport defaultでexportしたものが入る。
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    // 学習: todosはtodoReducerのキーとしてconfigureStoreに渡す。ここで定義する。
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;