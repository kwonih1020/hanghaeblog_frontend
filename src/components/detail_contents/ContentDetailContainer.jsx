
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, useParams } from "react-router-dom";
import { deleteContent, updateContent, getSingleContent } from "../../redux/modules/contentSlice";
import { useEffect, useState } from "react";

const ContentDetailContainer = () => {
  const navigate = useNavigate();
  const content = useSelector((state) => state.contentSlice.singleContent);
  console.log("컨텐츠 콘솔입니다.",content.title)
  
  const params = useParams();
  const param = parseInt(params.id);
  const dispatch = useDispatch();
  // const contentUrl = content.find((cur) => cur.id === param);

  const [isEdit, setIsEdit] = useState(false);
  const [updateTitle, SetUpdateTitle] = useState();
  const [updateText, SetUpdateText] = useState();



  useEffect(() => {
    dispatch(getSingleContent(param))
  },[])


  // const onSaveHandler = () => {
  //   dispatch(
  //     updateContent({
  //       ...contentUrl,
  //       id: contentUrl.id,
  //       title: updateTitle,
  //       text: updateText,
  //     })
  //   );
  //   setIsEdit(false);
  // };

  const onCansleButtonHandler = () => {
    setIsEdit(false);
  };

  const onEditHandler = () => {
    setIsEdit(true);
  };

  // const deleteHandler = () => {
  //   dispatch(deleteContent(contentUrl.id));
  //   navigate("/");
  // };

  return (
    <div>
      {isEdit ? (
        <StContentDetailContainerBox>
          <div>ContentDetailContainer</div>

          <StImageUrlBox>
            <input type="file" />
          </StImageUrlBox>

          <div>
            <input
              value={updateTitle}
              type="text"
              onChange={(event) => {
                SetUpdateTitle(event.target.value);
              }}
            />
            <br />
            <input
              value={updateText}
              onChange={(event) => {
                SetUpdateText(event.target.value);
              }}
              type="text"
            />
          </div>

          <div>
            {/* <button onClick={onSaveHandler}>저장하기</button> */}

            <button onClick={onCansleButtonHandler}>취소하기</button>
          </div>
        </StContentDetailContainerBox>
      ) : (
        <StContentDetailContainerBox>
          <div>ContentDetailContainer</div>

          <StImageUrlBox>
            {/* <div>{contentUrl.imageUrl}</div> */}
          </StImageUrlBox>

          <div>
            <h1>{content.title}</h1>
            <h2>{content.text}</h2>
          </div>

          <div>
            <button onClick={onEditHandler}>수정하기</button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                const result = window.confirm("진짜로 삭제하시겠습니까?");
                if (result) {
                  return 
                  // deleteHandler();
                } else {
                  return;
                }
              }}
            >
              삭제
            </button>
          </div>
        </StContentDetailContainerBox>
      )}
    </div>
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
