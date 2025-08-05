import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <MainContent>
      <h1>리액트 공부용 애플리케이션</h1>
      <p>여기는 홈페이지 입니다.</p>
      <p>날씨나 캘린더 위젯을 추가할 예정입니다.</p>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export default Home;
