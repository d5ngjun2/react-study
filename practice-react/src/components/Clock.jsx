import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString();

  return (
    <CardContainer>
      <CardTitle>🕒 현재 시각</CardTitle>
      <TimeText>{formattedTime}</TimeText>
      <DateText>{formattedDate}</DateText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #ffffffcc;
  padding: 20px 25px;
  border-radius: 15px;
  min-width: 180px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-bottom: 15px;
`;

const TimeText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateText = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default Clock;
