import axios from "axios";
// import { useDispatch } from "react-redux";

const API_URL = "http://3.88.60.64:8080/api/member";
// const dispatch = useDispatch();

const signup = (loginId, password, passwordConfirm) => {
  return axios.post(API_URL + "/signup", {
    loginId,
    password,
    passwordConfirm,
  });
};

const login = async (loginId, password) => {
  const response = await axios.post(API_URL + "/login", {
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

// const loginCheck = () => {
//   return function (dispatch) {
//     const loginId = localStorage.getItem("loginId");
//     if (loginId) {
//       dispatch(login({ loginId: loginId }));
//     } else {
//       dispatch(logout());
//     }
//   };
// };

const authService = {
  signup,
  login,
  logout,
  // loginCheck,
};
export default authService;
