import { createSlice } from "@reduxjs/toolkit";

export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    roomNum: null,
  },

  reducers: {
    enterRoom: (state, action) => {
      state.roomNum = action.payload.roomNum;
    },
  },
});

export const { enterRoom } = channelSlice.actions;

export const selectRoomNum = (state) => state.channel.roomNum;

export default channelSlice.reducer;
