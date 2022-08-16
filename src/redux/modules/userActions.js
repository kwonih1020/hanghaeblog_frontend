// eslint-disable-next-line

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const loginServer = process.env.EC2_API_URL_LOGIN;

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ loginId, password, passwordConfirm }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      const response = await axios.post(
        "http://43.200.1.214:8080/api/member/signup",
        { loginId, password, passwordConfirm },
        config
      );
      window.alert("회원가입 성공");
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      window.alert("회원가입 실패!");
      return thunkAPI.rejectWithValue();
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ loginId, password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://43.200.1.214:8080/api/member/login",
        { loginId, password },
        config
      );
      if (response.data.success === false) {
        window.alert(response.data.error.message);
        return thunkAPI.rejectWithValue();
      } else {
        // store user's token in local storage
        localStorage.setItem("userToken", response.headers.authorization);
        localStorage.setItem("loginId", response.data.data.loginId);
        console.log(response);
        window.alert("로그인 성공");
        return thunkAPI.fulfillWithValue(response);
      }
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
