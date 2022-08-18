// eslint-disable-next-line

import { React, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../redux/modules/commentSlice";
import { useParams } from "react-router-dom";
import { deleteContent } from "../../redux/modules/contentSlice";

const CommentList = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const comments = useSelector(
    (state) => state.contentSlice.singleContent.comments
  );
  // console.log(comments);

  useEffect(() => {
    dispatch(getComments(parseInt(id)));
  }, [dispatch]);

  const deleteHandler = () => {
    dispatch(deleteContent(comments.id));
  };

  return (
    <StCommentList>
      <StCommentsBody>
        CommentList
        {comments &&
          comments.map((comment, i) => {
            return (
              <div key={i}>
                {comment.id}
                {comment.author}
                {comment.commentText}
                <StCommentButtons>
                  <button>수정</button>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      const result = window.confirm("진짜로 삭제하시겠습니까?");
                      if (result) {
                        return deleteHandler();
                      } else {
                        return;
                      }
                    }}>
                    삭제
                  </button>
                </StCommentButtons>
              </div>
            );
          })}
      </StCommentsBody>
    </StCommentList>
  );
};

export default CommentList;

const StCommentList = styled.div`
  width: 450px;
  height: 250px;
  border-radius: 10px;
  border: 4px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow-y: scroll;
`;

const StCommentsBody = styled.div`
  width: 430px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

const StCommentButtons = styled.div`
  width: 96px;
  height: 30px;
  display: flex;
`;