import React, { useState } from "react";
import styled from "styled-components";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0~11
  const day = currentDate.getDate();

  // 해당 월의 첫날과 마지막 날 계산
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0(일)~6(토)
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate(); // 말일

  // 달력 배열 생성
  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) daysArray.push(null); // 빈칸
  for (let i = 1; i <= lastDateOfMonth; i++) daysArray.push(i);

  return (
    <CalendarContainer>
      <MonthTitle>
        {year}년 {month + 1}월
      </MonthTitle>
      <WeekDays>
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <WeekDay key={d}>{d}</WeekDay>
        ))}
      </WeekDays>
      <DatesGrid>
        {daysArray.map((date, idx) => (
          <DateCell key={idx} isToday={date === day}>
            {date || ""}
          </DateCell>
        ))}
      </DatesGrid>
    </CalendarContainer>
  );
};
  
const CalendarContainer = styled.div`
  width: 300px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MonthTitle = styled.h3`
  margin-bottom: 10px;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 5px;
`;

const WeekDay = styled.div`
  font-weight: bold;
  color: #555;
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const DateCell = styled.div`
  padding: 8px 0;
  border-radius: 5px;
  background-color: ${(props) => (props.isToday ? "#4a90e2" : "#f0f0f0")};
  color: ${(props) => (props.isToday ? "#fff" : "#333")};
`;

export default Calendar;
