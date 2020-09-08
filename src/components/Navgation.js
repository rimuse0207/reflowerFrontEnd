import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  width: 13rem;
  height: 15rem;
  top: 45px;
  font-size: 1.2rem;
  padding-top: 3rem;
`;

const NavUL = styled.ul`
  li:hover {
    background-color: #bcbfbe;
  }
`;
const NavLi = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: unset;
  border: none;
`;

const Navgation = () => {
  return (
    <Nav>
      <NavUL>
        <NavLi>메뉴</NavLi>
        <NavLi>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            꽃 검색
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/read" style={{ textDecoration: "none", color: "black" }}>
            관찰 일기 보기
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/write" style={{ textDecoration: "none", color: "black" }}>
            관찰 일기 쓰기
          </Link>
        </NavLi>
        <NavLi>
          <Link
            to="/flowerload"
            style={{ textDecoration: "none", color: "black" }}
          >
            꽃길 찾기
          </Link>
        </NavLi>
        <NavLi onClick={() => window.open("https://www.naver.com")}>
          도움말
        </NavLi>
        <NavLi>만든이</NavLi>
      </NavUL>
    </Nav>
  );
};

export default Navgation;
