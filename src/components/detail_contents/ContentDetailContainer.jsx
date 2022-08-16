// eslint-disable-next-line

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

const ContentDetailContainer = () => {
  const content = useSelector((state) => state.content.list);
  const params = useParams();
  const param = parseInt(params.id);
  const contentUrl = content.find((cur) => cur.id === param);

  // console.log(param)
  // console.log(params.id)

  return (
    <StContentDetailContainerBox>
      <div>ContentDetailContainer</div>

      <StImageUrlBox>
        <div>{contentUrl.imageUrl}</div>
        <h1>{contentUrl.title}</h1>
        <h2>{contentUrl.text}</h2>
      </StImageUrlBox>
    </StContentDetailContainerBox>
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
`;

const StImageUrlBox = styled.div`
  width: 450px;
  height: 250px;
  /* border-radius: 10px; */
  border: 2px solid rgb(2, 19, 19);
  margin: auto;
  display: flex;
  flex-direction: column;
`;
