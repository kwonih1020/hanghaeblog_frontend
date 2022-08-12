// src/redux/modules/contentSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [{
  
      id: 1,
      title: "기본 입니다",
      body: "기본 내용",
    
}];

export const getContentAsync = createAsyncThunk(
    "content/getContent", 
    async () => {
  const response = await axios.get("http://localhost:3001/content");
  return response.data
});

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: {
    // [getContent.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    [getContentAsync.fulfilled]: (state, {payload}) => {
      console.log("getContent");
      return [...payload]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    // [getContent.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
  },
});

export const {} = contentSlice.actions;
export default contentSlice.reducer;
