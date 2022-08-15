// eslint-disable-next-line

// import logo from './logo.svg';

import React, { useEffect } from "react";
import GlobalRouter from "./global/GlobalRouter";
import GlobalHeader from "./global/GlobalHeader";
import GlobalFooter from "./global/GlobalFooter";
// import { getCookie } from "./shared/cookie";
// import { useDispatch } from "react-redux";
// import { loginUser } from "./redux/modules/userSlice";

const App = () => {
  // const dispatch = useDispatch();

  // //useEffect로 쿠키에 토큰 있을시 로그인 체크
  // useEffect(() => {
  //   if (getCookie("is_login") !== undefined) {
  //     dispatch(loginUser(true));
  //   }
  // });
  return (
    <>
      <GlobalHeader />
      <GlobalRouter />
      <GlobalFooter />
    </>
  );
};

export default App;
