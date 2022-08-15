import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";
import authService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const __signup = createAsyncThunk(
  "auth/__signup",
  async ({ loginId, password, passwordConfirm }, thunkAPI) => {
    try {
      const response = await authService.signup(
        loginId,
        password,
        passwordConfirm
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const __login = createAsyncThunk(
  "auth/__login",
  async ({ loginId, password }, thunkAPI) => {
    try {
      const data = await authService.login(loginId, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const __logout = createAsyncThunk("auth/__logout", async () => {
  authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [__signup.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [__signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [__login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [__logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
