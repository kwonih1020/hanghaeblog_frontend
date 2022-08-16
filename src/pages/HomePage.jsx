import React from "react";
import GlobalLayout from "../global/GlobalLayout";
import ContentListContainer from "../components/home/ContentListContainer";
import ContentCard from "../components/home/ContentCard";

const HomePage = () => {
  return (
    <div>
      <GlobalLayout>
        <ContentListContainer>
          <ContentCard />
        </ContentListContainer>
      </GlobalLayout>
    </div>
  );
};

export default HomePage;
