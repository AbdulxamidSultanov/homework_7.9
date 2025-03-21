import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import postsApi from "./apiSlice/postsApi";

export const store = configureStore({
  reducer: {
    post: postSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
