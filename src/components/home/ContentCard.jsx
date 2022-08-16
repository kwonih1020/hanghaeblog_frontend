// import React from "react";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../../redux/modules/contentSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContentCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = useSelector((state) => state.content.list);

  console.log(content);

  useEffect(() => {
    dispatch(getContent());
  }, [dispatch]);

  return (
    <StContentBoxs>
      <StContentContainer onClick={() => navigate("/add")}>
        <h1>(●'◡'●)</h1>
        <h1>
          <strong>+</strong>
        </h1>
      </StContentContainer>

      {content.map((content, index) => {
        return (
          <div onClick={() => navigate(`/content/${content.id}`)} key={index}>
            <StContentContainer>
              {/* <div>{content.imageUrl}</div> */}
              <h1>{content.title}</h1>
              <h2>{content.text}</h2>
            </StContentContainer>
          </div>
        );
      })}
    </StContentBoxs>
  );
};

export default ContentCard;

const StContentContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  border: 1px solid rgb(2, 19, 19);
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  color: black;
`;

const StContentBoxs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
