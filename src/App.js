// eslint-disable-next-line

// import logo from './logo.svg';

import React, { useEffect } from "react";
import GlobalRouter from "./global/GlobalRouter";
import GlobalHeader from "./global/GlobalHeader";
import GlobalFooter from "./global/GlobalFooter";

const App = () => {
  return (
    <>
      <GlobalHeader />
      <GlobalRouter />
      <GlobalFooter />
    </>
  );
};

export default App;
