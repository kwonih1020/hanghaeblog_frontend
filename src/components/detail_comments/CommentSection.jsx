// eslint-disable-next-line

import React from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  return (
    <StcommentSectionbox>
      <CommentList />
      <CommentForm />
    </StcommentSectionbox>
  );
};

export default CommentSection;

const StcommentSectionbox = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 10px;
  /* border: 1px solid rgb(2, 19, 19); */
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
