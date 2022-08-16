import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/userSlice";
import axios from "axios";

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
      <div>여긴 로고</div>
      <header>
        <div className="header-status">
          <span>{userInfo ? `Logged in` : "You're not logged in"}</span>
          <div className="cta">
            {userInfo ? (
              <button className="button" onClick={() => dispatch(logout())}>
                Logout
              </button>
            ) : (
              <nav className="container navigation">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Register</NavLink>
              </nav>
            )}
          </div>
        </div>
      </header>
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

// const NavHeaderUser = styled.div`
//   display: flex;
// `;
