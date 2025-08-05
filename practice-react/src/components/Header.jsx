import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContent>
      <HeaderLink to="/">
        <Item>
          <h2>My Application</h2>
        </Item>
      </HeaderLink>
      <ItemGroup>
        <HeaderLink to="/">
          <Item>Home</Item>
        </HeaderLink>
        <HeaderLink to="/board">
          <Item>Board</Item>
        </HeaderLink>
        <HeaderLink to="/todolist">
          <Item>ToDoList</Item>
        </HeaderLink>
        <HeaderLink to="/login">
          <Item>Login</Item>
        </HeaderLink>
        <HeaderLink to="/signup">
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
`;

const ItemGroup = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
  margin-left: auto; // 오른쪽으로 정렬
  padding-right: 32px; // 오른쪽 여백
`;

const Item = styled.div`
  margin: 0 10px;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #61dafb;
  }
`;

export default Header;
