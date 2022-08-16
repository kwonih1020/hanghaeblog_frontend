import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlobalFooter = ({ children }) => {
  return (
    <StGlobalFooter>
      {children}
      <FooterText>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          홈
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/add">
          게시글 작성
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          로그인
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/signup">
          회원가입
        </Link>
      </FooterText>
      <FooterGroup>
        <br />
        <span>팀 : 6조 &nbsp;</span>
        <br />
        <br />
        <span>항해주주총회 &nbsp;</span>
        <br />
        <br />
        <span>Copyright 2022@All Rights Reserved.</span>
      </FooterGroup>
    </StGlobalFooter>
  );
};

export default GlobalFooter;

const StGlobalFooter = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  background: #111;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const FooterText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin: 1rem 0 1rem 0;
  color: white;
`;

const FooterGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 1rem 0 1rem 0;
  color: white;
`;
