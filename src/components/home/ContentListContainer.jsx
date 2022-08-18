// eslint-disable-next-line

import React from "react";
import ContentCard from "./ContentCard";
import styled from "styled-components";

const ContentListContainer = () => {
  return (
    <StListWrapper>
      <ContentCard />
    </StListWrapper>
  );
};

export default ContentListContainer;

const StListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  max-width: 60%;
  min-width: 50%;
  height: 700px;
  padding: 24px;
  padding-bottom: 200px;
  overflow-y: scroll;
`;
