import { createSlice } from "@reduxjs/toolkit";
export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    compose: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openCompose: (state) => {
      state.compose = true;
    },
    closeCompose: (state) => {
      state.compose = false;
    },
  },
});

export const { selectMail, openCompose, closeCompose } = mailSlice.actions;

export const selectCompose = (state) => state.mail.compose;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
