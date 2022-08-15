// eslint-disable-next-line

import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commentSlice from "../modules/commentSlice";
import contentSlice from "../modules/contentSlice";
import authSlice from "../modules/authSlice";
import messageReducer from "../modules/messageSlice";

const reducer = combineReducers({
  commentSlice,
  contentSlice,
  message: messageReducer,
  auth: authSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
});

export default store;
