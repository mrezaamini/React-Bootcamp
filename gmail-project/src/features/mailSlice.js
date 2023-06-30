import { createSlice } from "@reduxjs/toolkit";
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    compose: false,
  },

  reducers: {
    openCompose: (state) => {
      state.compose = true;
    },
    closeCompose: (state) => {
      state.compose = false;
    },
  },
});

export const { openCompose, closeCompose } = mailSlice.actions;

export const selectCompose = (state) => state.mail.compose;

export default mailSlice.reducer;
