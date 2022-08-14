import React from "react";
// import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { postContent } from "../../redux/modules/contentSlice";
import { useNavigate } from "react-router-dom";

const ContentAddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = useState({
    imageUrl: "",
    title: "",
    text: "",
  });
  
  
  

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value });
  };

  // const contentBox = {
    //   imageUrl: content.imageUrl,
    //   title: content.title,
    //   text: content.text,
    // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      content.imageUrl.trim() === "" ||
      content.title.trim() === "" ||
      content.text.trim() === ""
    ) {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(postContent(content));
    navigate("/")
    
  };
  
  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label />
          가나다
          <input
            name="imageUrl"
            onChange={onChangeHandler}
            placeholder="주소"
            value={content.imageUrl}
          ></input>
        </div>

        <div>
          <label />
          가나다
          <input
            name="title"
            onChange={onChangeHandler}
            placeholder="제목"
            value={content.title}
          ></input>
        </div>

        <div>
          <label />
          가나다
          <input
            name="text"
            onChange={onChangeHandler}
            placeholder="내용"
            value={content.text}
          ></input>
        </div>

        <div>
          <button>저장하기</button>
          
        </div>
      </form>
      <button onClick={() => navigate("/")}>취소</button>
    </div>
  );
};

export default ContentAddForm;


// onClick={() => navigate("/")}

// const StAddFormBoxInputs = styled.input`
//   width: 100px;
//   height: 50px;
//   border-radius: 14px;
/* margin: auto;
  display: flex; */
// `
