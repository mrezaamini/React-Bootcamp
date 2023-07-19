import { configureStore } from "@reduxjs/toolkit";
import snapReducer from "../features/snapSlice";
import captureReducer from "../features/captureSlice";

export const store = configureStore({
  reducer: {
    snap: snapReducer,
    capture: captureReducer,
  },
});
