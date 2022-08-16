// eslint-disable-next-line

import React from "react";
import GlobalRouter from "./global/GlobalRouter";
import GlobalHeader from "./global/GlobalHeader";
import GlobalFooter from "./global/GlobalFooter";
import { loader } from "./redux/modules/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const handleLoader = () => {
    const userToken = localStorage.getItem("userToken");
    dispatch(loader(userToken));
  };

  window.addEventListener("load", handleLoader);

  return (
    <>
      <GlobalHeader />
      <GlobalRouter />
      <GlobalFooter />
    </>
  );
};

export default App;
