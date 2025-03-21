import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: null,
  isModal: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.postId = action.payload;
    },
    setModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { setPost, setModal } = postSlice.actions;
