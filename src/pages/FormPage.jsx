import React from "react";
import GlobalLayout from "../global/GlobalLayout";
import ContentAddForm from "../components/form/ContentAddForm";
import styled from "styled-components";

const FormPage = () => {
  return <GlobalLayout> Form 페이지 입니다.

    <StAddFormBox>


      <ContentAddForm/>
      
    </StAddFormBox>
    





  </GlobalLayout>;
};

export default FormPage;


const StAddFormBox = styled.div`
  width: 600px;
  height: 600px;
  border: 4px solid rgb(2, 19, 19);
  border-radius: 12px;
  margin: auto;
  display: flex;
`