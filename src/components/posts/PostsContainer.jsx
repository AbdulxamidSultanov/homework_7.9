import React from "react";
import { useGetAllQuery } from "../../lib/apiSlice/postsApi";
import Post from "./Post";

const PostsContainer = () => {
  const { data, isLoading, error } = useGetAllQuery();
  if (isLoading)
    return (
      <div className=" h-screen flex items-center justify-center">
        <i className="fa-solid fa-spinner fa-spin text-4xl"></i>
      </div>
    );
  if (error)
    return (
      <div className="flex h-screen items-center justify-center flex-col">
        <i className="fa-solid fa-bug text-4xl fa-bounce"></i>
        <p className="text-4xl">Somthing went wrong!</p>
      </div>
    );
  return (
    <div className="grid grid-cols-3 mt-12 gap-4">
      {data &&
        data.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
    </div>
  );
};

export default PostsContainer;
