// eslint-disable-next-line

// src/redux/modules/contentSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const getContent = createAsyncThunk(
  "content/getContent",
  async (kim, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/content");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const postContent = createAsyncThunk(
  "content/postContent",
  async (args, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/content", args);
      console.log("여기까지오냐?");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// console.log(getContent)

export const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // [getContent.pending]: (state) => {
    //   state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    // },
    [getContent.fulfilled]: (state, action) => {
      state.list = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [postContent.fulfilled]: (state, action) => {
      console.log("여기까지오냐?");
      state.list.push(action.payload);
      // console.log(state)

      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    // [getContent.rejected]: (state, action) => {
    //   state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
    //   state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    // },
  },
});

export const {} = contentSlice.actions;
export default contentSlice.reducer;
