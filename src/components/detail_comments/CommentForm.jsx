import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { postContent } from "../../redux/modules/contentSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentForm = () => {
  const params = useParams();
  const param = parseInt(params.id);

  const [comment, setComment] = useState({
    contentId: param,
    commentText: "",
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (comment.commentText.trim() === "") {
      return alert("내용을 입력해 주세요.");
    }
    dispatch(postContent(comment));
  };

  console.log(comment);

  return (
    <form onSubmit={onSubmitHandler}>
      <StComentMakeBox>
        <StCommentInPut
          name="commentText"
          onChange={onChangeHandler}
          // placeholder="url 주소를 입력해 주세요."
          // value={comment.commentText}
        ></StCommentInPut>

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
  /* border: 4px solid rgb(2, 19, 19); */
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StCommentInPut = styled.input`
  width: 320px;
  height: 30px;
  border-radius: 10px;
  /* border: 4px solid rgb(2, 19, 19); */
  margin: auto;
  display: flex;
  /* flex-direction: row;
  justify-content: center; */
`;
