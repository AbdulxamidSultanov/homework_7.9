import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProduct: [],
  setError: null,
  setLoader: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.slice = action.payload;
    },
    deleteProduct: (state, action) => {
      state.slice = action.payload;
    },
    setLoader: (state, action) => {
      state.slice = action.payload;
    },
    setError: (state, action) => {
      state.slice = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { addProduct, deleteProduct, setLoader, setError } =
  productsSlice.actions;
