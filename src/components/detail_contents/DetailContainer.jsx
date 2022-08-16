// eslint-disable-next-line

import React from "react";
import styled from "styled-components";
import ContentDetailContainer from "./ContentDetailContainer";
import CommentSection from "../detail_comments/CommentSection";

const DetailContainer = () => {
  return (
    <StDetailContainer>
      DetailContainer
      <ContentDetailContainer />
      <CommentSection />
    </StDetailContainer>
  );
};

export default DetailContainer;

const StDetailContainer = styled.div`
  width: 700px;
  height: 800px;
  border-radius: 10px;
  border: 4px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: column;
`;
