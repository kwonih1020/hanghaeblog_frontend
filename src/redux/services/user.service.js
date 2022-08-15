import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/member";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };
const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};
// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };
// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };
const userService = {
  // getPublicContent,
  getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};
export default userService;
