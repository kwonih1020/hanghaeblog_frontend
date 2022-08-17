import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, useParams } from "react-router-dom";
import { deleteContent, updateContent } from "../../redux/modules/contentSlice";
import { useState, useEffect } from "react";
import { getSingleContent } from "../../redux/modules/contentSlice";
import GlobalLayout from "../../global/GlobalLayout";

const ContentDetailContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const content = useSelector((state) => state.contentSlice.singleContent);
  console.log(content);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleContent(parseInt(id)));
  }, [id, dispatch]);

  const [isEdit, setIsEdit] = useState(false);

  const [newBody, setNewBody] = useState({
    imageUrl: "",
    title: "",
    text: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewBody({
      ...newBody,
      [name]: value,
    });
  };

  const onEditHandler = () => {
    if (isEdit) {
      dispatch(
        updateContent({
          id: parseInt(id),
          ...newBody,
        })
      );
    }
    setIsEdit(!isEdit);
    setNewBody({
      imageUrl: "",
      title: "",
      text: "",
    });
  };

  const onCancelButtonHandler = () => {
    setIsEdit(false);
  };

  const deleteHandler = () => {
    dispatch(deleteContent(parseInt(id)));
    navigate("/");
  };

  console.log(newBody);

  return (
    <>
      <GlobalLayout>
        <StContentDetailContainerBox>
          <div>ContentDetailContainer</div>
          {isEdit === false ? (
            <>
              <StImageUrlBox>
                <div>{content.imageUrl}</div>
              </StImageUrlBox>
              <div>
                <h1>{content.title}</h1>
                <h2>{content.text}</h2>
              </div>
              <div>
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
              </div>
            </>
          ) : (
            <>
              <StImageUrlBox>
                <input type="file" />
              </StImageUrlBox>
              <input
                // defaultValue={}
                type="text"
                name="title"
                value={newBody.title}
                onChange={onChangeHandler}
              />
              <br />
              <input
                // defaultValue={}
                value={newBody.text}
                name="text"
                type="text"
                onChange={onChangeHandler}
              />
              <button onClick={onCancelButtonHandler}>취소하기</button>
            </>
          )}
          <button onClick={onEditHandler}>
            {isEdit === false ? "수정하기" : " 저장하기"}
          </button>
        </StContentDetailContainerBox>
      </GlobalLayout>
    </>
  );
};

export default ContentDetailContainer;

const StContentDetailContainerBox = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 4px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StImageUrlBox = styled.div`
  width: 450px;
  height: 250px;
  border: 2px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: column;
`;