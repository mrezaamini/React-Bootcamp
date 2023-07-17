import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  capturedImage: null,
};

export const captureSlice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    setCapturedImage: (state, action) => {
      state.capturedImage += action.payload;
    },
    resetCapturedImage: (state) => {
      state.capturedImage = null;
    },
  },
});

export const { setCapturedImage, resetCapturedImage } = captureSlice.actions;

export const selectCapturedImage = (state) => state.capture.capturedImage;

export default captureSlice.reducer;
