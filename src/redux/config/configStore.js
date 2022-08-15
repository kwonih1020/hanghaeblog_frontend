// eslint-disable-next-line

import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import comment from "../modules/commentSlice";
import content from "../modules/contentSlice";
import userSlice from "../modules/userSlice";

const reducer = combineReducers({
  comment,
  content,
  userSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
