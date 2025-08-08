import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { IoMdLogIn } from "react-icons/io";
import { BsFillSignIntersectionFill } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContent>
      <HeaderLink to="/">
        <Item>
          <h2>Practice React⚛️</h2>
        </Item>
      </HeaderLink>
      <ItemGroup>
        <HeaderLink to="/">
          <IoHome />
          <Item>Home</Item>
        </HeaderLink>
        <HeaderLink to="/board">
          <FaClipboardList />
          <Item>Board</Item>
        </HeaderLink>
        <HeaderLink to="/todolist">
          <LuListTodo />
          <Item>ToDoList</Item>
        </HeaderLink>
        <HeaderLink to="/login">
          <IoMdLogIn />
          <Item>Login</Item>
        </HeaderLink>
        <HeaderLink to="/signup">
          <BsFillSignIntersectionFill />
          <Item>SignUp</Item>
        </HeaderLink>
      </ItemGroup>
    </HeaderContent>
  );
};

const HeaderContent = styled.div`
  width: auto;
  height: 90px;
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: flex-start;
  padding-left: 32px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }
`;

const ItemGroup = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
  margin-left: auto; // 오른쪽으로 정렬
  padding-right: 32px; // 오른쪽 여백

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    padding-right: 0;
  }
`;

const Item = styled.div`
  margin: 0 12px;
  line-height: 1; // 아이콘과 텍스트 간격 조정
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  align-items: center;
  &:hover {
    color: #61dafb;
    transition: color 0.3s ease;
  }
`;

export default Header;
