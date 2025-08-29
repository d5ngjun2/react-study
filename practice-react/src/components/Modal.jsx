import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, title, onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  if (!isOpen) return null;
  const handleAddTodo = () => {
    if (!inputValue) return;
    onAddTodo(inputValue); // 부모 TodoList에 데이터 전달
    console.log(inputValue);
    setInputValue(""); // Modal 내부 초기화
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Header>
          <Title>{title}</Title>
        </Header>

        <Body>
          <InputTodo
            type="text"
            placeholder="오늘은 무엇을 해볼까요?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Body>

        <Footer>
          <EnrollButton onClick={handleAddTodo}>등록</EnrollButton>
          <CancelButton onClick={onClose}>취소</CancelButton>
        </Footer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

// 스타일링
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #008cba;
  color: white;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const Body = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #333;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  gap: 10px;
  background-color: #f1f1f1;
`;

const EnrollButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
    cursor: pointer;
  }
`;

const InputTodo = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #008cba;
    outline: none;
  }
`;
