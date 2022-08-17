// eslint-disable-next-line

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../elements/Button";
import axios from "axios";

const GlobalHeadder = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  // console.log(userInfo);

  const loginId = localStorage.getItem("loginId");

  // 로그아웃
  const logout = async () => {
    const confirm = window.confirm("Are you Sure?");
    if (confirm === true) {
      const userToken = localStorage.getItem("userToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${userToken}`,
        refreshToken: `${refreshToken}`,
      };
      axios.post(
        "http://43.200.1.214:8080/api/member/logout",
        {},
        {
          headers: headers,
        }
      );
      window.localStorage.clear();
      window.location.replace("/");
    } else if (confirm === false) {
      return;
    }
  };

  return (
    <StGlobalHeader>
      {children}
      <Link to="/">
        <LogoContainer></LogoContainer>
      </Link>

      <LoginContainer>
        <div>{userInfo ? `${loginId}님께서 로그인중` : "로그인하세요!"}</div>
        <div className="cta">
          {userInfo ? (
            <Button className="button" onClick={logout} size="medium">
              로그아웃
            </Button>
          ) : (
            <NavHeaderUser>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}>
                로그인 /
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}>
                &nbsp;회원가입
              </Link>
            </NavHeaderUser>
          )}
        </div>
      </LoginContainer>
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
  border-bottom: 1px solid black;
  margin: auto;
  padding: 20px;
`;

const LogoContainer = styled.div`
  background-image: url(/logo.png);
  background-size: cover;
  background-position: center;
  width: 109px;
  padding: 17.5px 0;
  cursor: pointer;
  margin: 0;
`;

const NavHeaderUser = styled.div`
  display: flex;
`;

const LoginContainer = styled.div`
  display: block;
`;
