import React from "react";
import { useDispatch } from "react-redux";
import { setModal, setPost } from "../../lib/slices/postSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  function modalHendler(id) {
    dispatch(setPost(id));
    dispatch(setModal(true));
  }
  return (
    <div
      onClick={() => modalHendler(post.id)}
      className={`flex gap-4 w-full border border-black flex-col justify-center items-start px-4 py-2`}
    >
      <h2 className="capitalize text-2xl font-bold">{post.title}</h2>
      <p className="text-lg  overflow-hidden overflow-ellipsis w-full text-nowrap">
        {post.body}
      </p>
    </div>
  );
};

export default Post;
