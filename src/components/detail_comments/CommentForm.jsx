// eslint-disable-next-line

import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postComments } from "../../redux/modules/commentSlice";

const CommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  console.log(comment);

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comment === "") {
      return alert("내용을 입력해 주세요.");
    }
    dispatch(
      postComments({
        contentId: parseInt(id),
        commentText: comment,
      })
    );
    setComment(""); // 작동안함
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <StComentMakeBox>
        <StCommentInPut
          name="commentText"
          onChange={onChangeHandler}
          placeholder="댓글 작성"
          value={comment}></StCommentInPut>

        <button>댓글 등록하기</button>
      </StComentMakeBox>
    </form>
  );
};

export default CommentForm;

const StComentMakeBox = styled.div`
  width: 450px;
  height: 60px;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StCommentInPut = styled.input`
  width: 320px;
  height: 30px;
  border-radius: 10px;
  margin: auto;
  display: flex;
`;
