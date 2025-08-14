import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const navigate = useNavigate();

  return (
    <MainContent>
      <h1>Todo List</h1>
      <CardGroup>
        <TodoCard>
          <h2>오늘 할 일</h2>
          <ul>
            <input type="checkbox" id="task1" />
            <li>React 프로젝트 구조 이해하기</li>
            <li>styled-components 사용법 익히기</li>
            <li>리액트 라우터로 페이지 이동 구현하기</li>
          </ul>
        </TodoCard>
      </CardGroup>

      <BackButton onClick={() => navigate("/board")}>돌아가기</BackButton>
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
  box-sizing: border-box; // 실제 화면 너비를 넘길 수 있으므로 border-box 속성 사용
`;

const CardGroup = styled.div`
  display: flex;
`;

const TodoCard = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BackButton = styled.button`
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
`;

export default TodoList;
