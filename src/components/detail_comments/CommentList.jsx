// eslint-disable-next-line

import { React, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../../redux/modules/contentSlice";
import { useParams } from "react-router-dom";
import { deleteContent } from "../../redux/modules/contentSlice";

const CommentList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const param = parseInt(params.id);
  const contents = useSelector((state) => state.content.list);
  const currentContent = contents.filter((cur) => cur.id == param);
  const comments = currentContent.map((abc) => abc.comments);

  const contents = useSelector((state) => state.content.list);

  const currentContent = contents.filter((cur) => cur.id == param);

  const comments = currentContent.map((abc) => abc.comments);

  // 수정 삭제용 콘솔
  // console.log(contents);
  // console.log(currentContent);
  // console.log(comments);
  // console.log(comments[0]);
  // const commentsIds = comments[0].map((abc) => abc.contentId);
  // console.log(commentsIds);

  // useEffect(() => {
  //   dispatch(getContent());
  // }, [dispatch]);

  const deleteHandler = () => {
    dispatch(deleteContent(comments[0].id));
  };

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <StCommentList>
      CommentList
      {comments[0] &&
        comments[0].map((comment, index) => {
          return (
            <div key={index}>
              <StCommentsBody>
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
                    }}
                  >
                    삭제
                  </button>
                </StCommentButtons>
              </StCommentsBody>
            </div>
          );
        })}
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
