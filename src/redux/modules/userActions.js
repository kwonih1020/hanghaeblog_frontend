import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ loginId, password, passwordConfirm }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      await axios.post(
        "http://43.200.1.214:8080/api/member/signup",
        { loginId, password, passwordConfirm },
        config
      );
    } catch (error) {
      // return custom error message from API if any
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ loginId, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // const res = await axios.post(
      const response = await axios.post(
        "http://43.200.1.214:8080/api/member/login",
        { loginId, password },
        config
      );
      // store user's token in local storage
      // localStorage.setItem("userToken", response.headers.authorization);
      localStorage.setItem("userToken", response.headers.authorization);
      console.log(response);
      // return res;
      return response;
    } catch (error) {
      // return custom error message from API if any
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }
    }
  }
);
