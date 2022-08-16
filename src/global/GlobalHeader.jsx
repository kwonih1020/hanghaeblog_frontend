import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/userSlice";
import Button from "../elements/Button";

const GlobalHeadder = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  // console.log(userInfo);

  const loginId = localStorage.getItem("loginId");

  const dispatch = useDispatch();

  return (
    <StGlobalHeader>
      {children}
      <LogoContainer>
        <NavLink to="/"></NavLink>
      </LogoContainer>
      <LoginContainer>
        <div>{userInfo ? `${loginId}님께서 로그인중` : "로그인하세요!"}</div>
        <div className="cta">
          {userInfo ? (
            <Button
              className="button"
              onClick={() => dispatch(logout())}
              size="medium">
              로그아웃
            </Button>
          ) : (
            <NavHeaderUser>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "black" }}>
                로그인 /
              </NavLink>
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}>
                &nbsp;회원가입
              </NavLink>
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
