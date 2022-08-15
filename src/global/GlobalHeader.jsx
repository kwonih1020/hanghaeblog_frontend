import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { __logout } from "../redux/modules/authSlice";

const GlobalHeadder = ({ children }) => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(__logout());
  }, [dispatch]);

  // useEffect(() => {
  //   // if (currentUser) {
  //   //   setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
  //   //   setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   // } else {
  //   //   setShowModeratorBoard(false);
  //   //   setShowAdminBoard(false);
  //   // }
  //   EventBus.on("logout", () => {
  //     logOut();
  //   });
  //   return () => {
  //     EventBus.remove("logout");
  //   };
  // }, [currentUser, logOut]);

  return (
    <StGlobalHeader>
      {children}
      <div>여긴 로고</div>
      <div>
        {currentUser ? (
          <div>
            <NavHeaderUser>
              <Link to={"/profile"} className="nav-link">
                {currentUser.loginId}
              </Link>
              <a href="/login" className="nav-link" onClick={logOut}>
                로그아웃
              </a>
            </NavHeaderUser>
          </div>
        ) : (
          <NavHeaderUser>
            <Link to={"/login"} className="nav-link">
              로그인 &nbsp;/
            </Link>
            <Link to={"/signup"} className="nav-link">
              &nbsp; 회원가입
            </Link>
          </NavHeaderUser>
        )}
      </div>
    </StGlobalHeader>
  );
};

export default GlobalHeadder;

const StGlobalHeader = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 3px;
  margin: auto;
`;

const NavHeaderUser = styled.div`
  display: flex;
`;
