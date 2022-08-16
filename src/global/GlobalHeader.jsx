import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/userSlice";
import Button from "../elements/Button";
// import axios from "axios";

const GlobalHeadder = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  // const { is_Login } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const getStorage = localStorage.getItem("userToken");

  // const config = {
  //   headers: {
  //     authorization: getStorage,
  //   },
  // };

  // const confirmToken = () =>
  //   axios.post("http://43.200.1.214:8080/api/member", config);

  // console.log(confirmToken);
  // useEffect(() => {
  //   dispatch(confirmToken);
  // }, [dispatch]);

  // console.log(userInfo);

  return (
    <StGlobalHeader>
      {children}
      <LogoContainer>
        <NavLink to="/"></NavLink>
      </LogoContainer>
      <LoginContainer>
        <div>{userInfo ? `로그인중` : "로그인하세요!"}</div>
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
