import React from "react";
import { useGetByIdQuery } from "../../lib/apiSlice/postsApi";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../lib/slices/postSlice";

const PostModal = () => {
  const { postId } = useSelector((state) => state.post);
  const { data } = useGetByIdQuery(postId);
  const dispatch = useDispatch();
  function handlerCloseModal() {
    dispatch(setModal(false));
  }
  return (
    <div
      onClick={handlerCloseModal}
      className="fixed w-full h-screen bg-black/[50%] left-0 flex items-center justify-center"
    >
      <div
        className="bg-white max-w-[500px] px-8 py-10 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-medium text-4xl/[100%] capitalize">
          {data?.title}
        </h1>
        <p className="text-gray-600 text-lg font-light">{data?.body}</p>
      </div>
    </div>
  );
};

export default PostModal;
