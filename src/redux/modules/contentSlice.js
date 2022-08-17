// eslint-disable-next-line

// src/redux/modules/contentSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const getContent = createAsyncThunk(
  "content/getContent",
  async (extr, thunkAPI) => {
    try {
      const { data } = await axios.get("http://43.200.1.214:8080/api/content");
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
      const { data } = await axios.post("http://43.200.1.214:8080/api/content", args);
      // console.log("여기까지오냐?");
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContent = createAsyncThunk(
  "content/deleteContent",
  async (arg, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/content/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const updateContent = createAsyncThunk(
  "content/updateContent",
  async (arg, thunkAPI) => {
    try {
      const targetId = arg.id;
      axios.patch(`http://localhost:3001/content/${targetId}`, {
        title: arg.title,
        text: arg.text,
      });
      console.log("여기까지오냐?");
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getContent.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [postContent.fulfilled]: (state, action) => {
      // console.log("여기까지오냐?");
      state.list.push(action.payload);
    },
    [deleteContent.fulfilled]: (state, action) => {
      // console.log("여기까지오냐?");
    },
    [updateContent.fulfilled]: (state, action) => {
      const target = state.list.findIndex(
        (content) => content.id === action.payload.id
      );
      state.list.splice(target, 1, action.payload);
    },
  },
});

export const {} = contentSlice.actions;
export default contentSlice.reducer;
