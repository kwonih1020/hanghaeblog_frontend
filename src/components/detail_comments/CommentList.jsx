import { React, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getComment } from "../../redux/modules/commentSlice"
import { useParams } from "react-router-dom";


const CommentList = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const param = parseInt(params.id)
  
  const comments = useSelector((state) => state.comment.list);
  
  const commentUrl = comments.filter((cur) => cur.contentId == param)

  // console.log(param)
  console.log(comments)
  console.log(commentUrl)

  // const commentPP = comment[param].{commentId}

  // console.log(commentPP)

  

  
  
  // console.log(commentUrl)

  useEffect(() => {
    dispatch(getComment());
  },[dispatch]);



  return (
  <StCommentList>CommentList
    
      {commentUrl.map((comment,index) => {
        return(
          <div key={index}>

            <StCommentsBody>
              {comment.commentText}
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
border-radius: 10px;
border: 1px solid rgb(2, 19, 19);
margin: auto;
display: flex;
flex-direction: column;
`
