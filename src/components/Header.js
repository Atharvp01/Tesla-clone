import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <NavContainer>
      <Img
        src="/images/logo.svg"
        alt="tesla-logo"
        style={{ background: "none" }}
      />
      <NavMenu>
        <span>
          <a href="#">Model 3</a>
        </span>
        <span>
          <a href="#section1">Model Y</a>
        </span>
        <span>
          <a href="#">Model S</a>
        </span>
        <span>
          <a href="#">Model X</a>
        </span>
        <span>
          <a href="#">Solar Roof</a>
        </span>
        <span>
          <a href="#">Solar Panel</a>
        </span>
      </NavMenu>
      <NavMenuRight>
        <span>
          <a href="#">Shop</a>
        </span>
        <span>
          <a href="#">Account</a>
        </span>
        <span>
          <a href="#">Menu</a>
        </span>
      </NavMenuRight>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`;

const Img = styled.img`
  width: 110px;
  margin: 10px 0 0 30px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    padding-right: 35px;
    color: black;
    text-decoration: none;
  }
`;

const NavMenuRight = styled(NavMenu)``;

export default Header;
