import React from "react";
import ContentCard from "./ContentCard";
import styled from "styled-components";

const ContentListContainer = () => {
  return (
    <StListWrapper>ContentListContainer


      <ContentCard/>



    </StListWrapper>
  )
};

export default ContentListContainer;



const StListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  border-style: solid;
  border-width: 3px;
  margin: auto;
  width: 700px;
  height: 700px;
  padding: 24px; 
`