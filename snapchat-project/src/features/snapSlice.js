import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  targetImage: null,
};

export const snapSlice = createSlice({
  name: "snap",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },

    selectImage: (state, action) => {
      state.targetImage = action.payload;
    },
    resetImage: (state) => {
      state.targetImage = null;
    },
  },
});

export const { login, logout, selectImage, resetImage } = snapSlice.actions;

export const selectTargetImage = (state) => state.snap.targetImage;
export const selectUser = (state) => state.snap.user;

export default snapSlice.reducer;
