import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice/todosSlice";
import inputTodoSlice from "./inputTodoSlice/inputTodoSlice";

export const store = configureStore({
  reducer: { todosReducer, inputTodoSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
