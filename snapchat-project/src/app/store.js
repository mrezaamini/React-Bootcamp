import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import captureReducer from "../features/captureSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    capture: captureReducer,
  },
});
