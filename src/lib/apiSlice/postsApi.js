import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => "/posts",
    }),
    getById: build.query({
      query: (id) => `/posts/${id}`,
    }),
    getBySearch: build.query({
      query: (search) => `/posts/search?q=${search}`,
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery, useGetBySearchQuery } =
  postsApi;
export default postsApi;
