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
      <BoardWrapper>
        <InputGroup>
          <input type="text" placeholder="검색어 입력"></input>
          <button>검색</button>
        </InputGroup>
        <BoardTable>
          <thead>
            <TableTop>
              <td>날짜</td>
              <td>카테고리</td>
              <td>제목</td>
              <td>작성자</td>
              <td>조회수</td>
            </TableTop>
          </thead>
          <tbody>
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
      </BoardWrapper>
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
  color: white;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const BoardWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const BoardTable = styled.table`
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding: 15px;
  color: black;
  background-color: #ffffff;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  td,
  th {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    border: 1px solid #dfdfdf;
    font-size: 15px;
    cursor: pointer;
  }

  th {
    font-weight: bold;
    background-color: #f2f2f2;
  }
`;

const InputGroup = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  margin-left: auto;
  margin-bottom: 20px;

  input {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #dfdfdf;
    margin-right: 10px;

    &:focus {
      border-color: #a3a3a3;
      outline: none;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 2px solid #dfdfdf;
    color: #000000;
    cursor: pointer;
    &:hover {
      background-color: #e9e9e9;
    }
  }
`;

const TableTop = styled.tr`
  background-color: #f2f2f2;
  font-weight: bold;
  color: black;

  td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 15px;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const AddBoardBtn = styled.button`
  width: 120px;
  font-size: 12px;
  height: 40px;
  margin: 20px auto;
  background-color: #ffffff;
  border: 2px solid #dfdfdf;
  color: #000000;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export default Board;
