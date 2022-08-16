import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./userActions";

// const navigate = Navigate();

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  is_Login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.is_Login = false;
      // console.log(typeof userInfo);
    },
    loader: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
      state.is_Login = true;
      // console.log(payload);
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.is_Login = false;
      // console.log(payload);
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, loader } = userSlice.actions;

export default userSlice.reducer;
