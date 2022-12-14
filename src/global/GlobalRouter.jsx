// eslint-disable-next-line

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormPage from "../pages/FormPage";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/content/:id" element={<DetailPage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default GlobalRouter;
