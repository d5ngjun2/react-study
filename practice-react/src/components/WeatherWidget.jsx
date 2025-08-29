import React, { useEffect, useState } from "react";
import styled from "styled-components";

const weatherIcons = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌦️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  71: "❄️",
  73: "❄️",
  75: "❄️",
  80: "🌧️",
  81: "🌧️",
  82: "🌧️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️",
};

const regions = [
  { name: "서울", lat: 37.5665, lon: 126.978 },
  { name: "경기", lat: 37.4138, lon: 127.5183 },
  { name: "부산", lat: 35.1796, lon: 129.0756 }, // 예시 추가
];

const WeatherWidget = () => {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    const fetchAllWeather = async () => {
      try {
        const dataArr = await Promise.all(
          regions.map(async (region) => {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${region.lat}&longitude=${region.lon}&current_weather=true`
            );
            const data = await res.json();
            return { name: region.name, weather: data.current_weather };
          })
        );
        setWeathers(dataArr);
      } catch (err) {
        console.error("날씨 정보를 불러오는데 실패했습니다.", err);
      }
    };

    fetchAllWeather();
  }, []);

  if (weathers.length === 0) return <p>날씨 정보를 불러오는 중...</p>;

  return (
    <WidgetContainer>
      {weathers.map((region, idx) => (
        <div key={idx}>
          <CityTitle>
            {region.name} 날씨 {weatherIcons[region.weather.weathercode]}
          </CityTitle>
          <StatsContainer>
            <StatCard>
              <StatTitle>🌡️ 온도</StatTitle>
              <StatValue>{region.weather.temperature}°C</StatValue>
            </StatCard>
            <StatCard>
              <StatTitle>💨 풍속</StatTitle>
              <StatValue>{region.weather.windspeed} km/h</StatValue>
            </StatCard>
          </StatsContainer>
        </div>
      ))}
    </WidgetContainer>
  );
};

// 스타일링은 기존과 동일
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px 30px;
  border-radius: 15px;
  background: linear-gradient(135deg, #f0f8ff, #cce7ff);
  color: #333;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
`;

const CityTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: #ffffffcc;
  padding: 15px 20px;
  border-radius: 10px;
  min-width: 120px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const StatValue = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export default WeatherWidget;
