import axios from "axios";
const API_URL = "http://localhost:8080/api/member";

const signup = (loginId, password, passwordConfirm) => {
  return axios.post(API_URL + "/signup", {
    loginId,
    password,
    passwordConfirm,
  });
};

const login = async (loginId, password) => {
  const response = await axios.post(API_URL + "/signin", {
    loginId,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  signup,
  login,
  logout,
};
export default authService;
