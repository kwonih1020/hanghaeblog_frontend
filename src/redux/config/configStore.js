// eslint-disable-next-line

// import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentSlice from "../modules/commentSlice";
import contentSlice from "../modules/contentSlice";
import userSlice from "../modules/userSlice";

const reducer = combineReducers({
  commentSlice,
  contentSlice,
  user: userSlice,
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(logger),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
