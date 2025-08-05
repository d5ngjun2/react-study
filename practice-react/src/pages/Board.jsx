import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";

const Board = () => {
  const navigate = useNavigate();

  const AddBoard = () => {
    toast.info("게시글 작성 페이지로 이동합니다.");
  };

  return (
    <MainContent>
      <MainDiv>자유게시판</MainDiv>
      <BoardTable>
        <tbody>
          <tr>
            <td>날짜</td>
            <td>카테고리</td>
            <td>제목</td>
            <td>작성자</td>
            <td>조회수</td>
          </tr>
          <tr>
            <td>2025-08-01</td>
            <td>공지사항</td>
            <td>시스템 점검 안내</td>
            <td>관리자</td>
            <td>132</td>
          </tr>
        </tbody>
      </BoardTable>
      <BtnGroup>
        <AddBoardBtn onClick={AddBoard}>게시글 작성</AddBoardBtn>
      </BtnGroup>
    </MainContent>
  );
};

const MainContent = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: #ececec;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const MainDiv = styled.div`
  width: 800px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  background-color: rgb(255, 255, 255);
  color: black;
`;

const BoardTable = styled.table`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  color: black;
  background-color: #ffffff;
  justify-content: center;
  width: 80%;
  align-items: center;

  td {
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 16px;
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const AddBoardBtn = styled.button`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 120px;
  font-size: 12px;
  height: 40px;
  margin: 20px auto;
  background-color: #4caf50;
  color: white;
  border: none;

  &:hover {
    background-color: #45a049;
    border-style: none;
    outline: none;
    box-shadow: none;
    transform: scale(1.02);
  }
`;

const NavigateBtn = styled.button`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  width: 120px;
  height: 40px;
  margin: 20px 20px;
  background-color: #2196f3;
  color: white;
  border: none;

  &:hover {
    background-color: #0b7dda;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export default Board;
