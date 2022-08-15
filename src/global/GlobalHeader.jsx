import React from "react";
import styled from "styled-components";

const GlobalHeadder = ({ children }) => {
  return (
    <StGlobalHeader>
      {children}

      <div>여긴 로고</div>

      <button>이건 버튼</button>


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
