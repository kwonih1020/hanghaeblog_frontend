import { React, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../../redux/modules/contentSlice"
import { useParams } from "react-router-dom";


const CommentList = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const param = parseInt(params.id)
  
  const contents = useSelector((state) => state.content.list);
  
  
  const currentContent = contents.filter((cur) => cur.id == param)

  
  const comments = currentContent.map((abc) => abc.comments)

  // console.log(currentContent)

  // console.log(currentContent)

  // console.log(comments)
  // console.log(comments[0])

  
  // console.log(param)
  
  // console.log(currentContent)

  // const commentPP = comment[param].{commentId}

  // console.log(commentPP)

  
 
//  console.log(currentContent)
  
  
  // console.log(currentContent)

  useEffect(() => {
    dispatch(getContent());
  },[dispatch]);

  // console.log(comments)

  return (
  <StCommentList>CommentList
    
      {comments[0].map((comment,index) => {
        return(
          <div key={index}>

            <StCommentsBody>
                
              {comment.commentText}
              <StCommentButtons>
              <button>삭제</button>
              <button>수정</button>
              </StCommentButtons>
            </StCommentsBody>

          </div>
        )
      })}
    
      
  </StCommentList>
  )
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
  `

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
`


const StCommentButtons = styled.div`
width: 86px;
height: 30px;
/* border-radius: 3px;
/*border: 1px solid rgb(2, 19, 19);
margin: auto;

flex-direction: row;
justify-content: space-between;
align-content: center; */
display: flex;
`
