// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const refreshToken = localStorage.getItem("refreshToken")
  ? localStorage.getItem("refreshToken")
  : null;

let config = {
  headers: {
    authorization: userToken,
    refreshtoken: refreshToken,
  },
};

const initialState = {
  list: [],
};

export const getComments = createAsyncThunk(
  "comment/getComments",
  async (payload, thunkAPI) => {
    try {
      const targetId = payload;
      const response = await axios.get(
        `http://43.200.1.214:8080/api/content/${targetId}`
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (args, thunkAPI) => {
    try {
      // const commentList = await axios.get("http://localhost:3001/content")
      const { data } = await axios.post(
        "http://43.200.1.214:8080/api/content",
        args
      );
      console.log("여기까지오냐?");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// console.log(getContent)

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // [getContent.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    [getComments.fulfilled]: (state, action) => {
      state.list = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [postComment.fulfilled]: (state, action) => {
      console.log("여기까지오냐?");
      // state.list.push(action.payload);
      state.list = [...state.list, action.payload];
      // console.log(state)

      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    // [getContent.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
