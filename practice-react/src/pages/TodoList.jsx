import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const TodoList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const maxTodos = 5; // 최대 Todo 개수

  const handleAddTodo = (todo) => {
    if (todos.length >= maxTodos) {
      alert("최대 5개까지만 등록할 수 있습니다.");
      return;
    }
    setTodos([...todos, todo]); // 리스트에 추가
    setNewTodo(""); // 입력 초기화
    closeModal(); // 모달 닫기
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainContent>
      <h1>Todo List</h1>
      <CardGroup>
        <TodoCard>
          <Title>오늘 할 일</Title>
          <Divider />

          <CardList>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </CardList>
        </TodoCard>
      </CardGroup>

      <ButtonGroup>
        <CreateButton onClick={() => openModal()}>생성하기</CreateButton>
        <BackButton onClick={() => navigate("/")}>홈으로</BackButton>
      </ButtonGroup>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="할 일을 등록하세요!"
        onAddTodo={handleAddTodo}
      >
        <input
          type="text"
          placeholder="Todo 입력"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Modal>
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
  // 카드 스타일링
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 250px;
  height: 300px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  margin-bottom: 15px;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  text-align: left;

  li {
    margin: 10px 0;
    font-size: 16px;
    color: #555;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
`;

const CreateButton = styled.button`
  margin-top: 20px;
  background-color: #008cba;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    background-color: #005f5f;
    cursor: pointer;
  }
`;

const Divider = styled.hr`
  border: none; /* 기본 테두리 제거 */
  height: 2px; /* 선 두께 */
  background-color: #333; /* 선 색상 */
  width: 80%; /* 길이 */
  margin: 10px auto; /* 위아래 여백 + 가운데 정렬 */
  border-radius: 1px; /* 모서리 둥글게 */
`;

export default TodoList;
