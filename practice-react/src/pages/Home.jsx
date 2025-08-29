import React from "react";
import styled from "styled-components";
import WeatherWidget from "../components/WeatherWidget";
import Calendar from "../components/Calendar";
import Clock from "../components/Clock";

const Home = () => {
  return (
    <MainContent>
      <WidgetRow>
        <Clock />
        <Calendar />
        <WeatherWidget />
      </WidgetRow>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 40px;
  gap: 20px;
  background: #ffffff;
`;

const WidgetRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* 화면 좁으면 아래로 내려가게 */
`;

export default Home;
