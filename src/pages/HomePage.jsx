// import { React, useEffect, useState } from "react";
import React from "react";
import GlobalLayout from "../global/GlobalLayout";
import GlobalHeadder from "../global/GlobalHeader";
// import { useSelector, useDispatch } from "react-redux";
// import { getContentAsync } from "../redux/modules/contentSlice";
import ContentListContainer from "../components/home/ContentListContainer";
import ContentCard from "../components/home/ContentCard";

const HomePage = () => {
  // const dispatch = useDispatch();
  // const content = useSelector((state) => state.content);
  // const [check, setCheck] = useState(false);
  // console.log(content);

  // useEffect(() => {
  //   dispatch(getContentAsync());
  // }, [check]);

  return (
    <div>
      <GlobalLayout>
        <ContentListContainer>
        </ContentListContainer>
      </GlobalLayout>
    </div>
  );
};

export default HomePage;
