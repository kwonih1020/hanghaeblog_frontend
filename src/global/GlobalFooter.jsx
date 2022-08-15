import React from "react";
import styled from "styled-components";

const GlobalFooter = ({ children }) => {
  return <StGlobalFooter>{children}</StGlobalFooter>;
};

export default GlobalFooter;

const StGlobalFooter = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-style: solid;
  border-width: 3px;
  margin: auto;
`;