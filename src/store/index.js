import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

const store = configureStore({
  reducer: {
    count: counterReducer,

  },
});

export default store;