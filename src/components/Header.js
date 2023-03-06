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
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </NavMenu>
      <NavMenuRight>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
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
    cursor: pointer;
    z-index: 1;
  }
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const NavMenuRight = styled(NavMenu)`
  @media only screen and (max-width: 1120px) {
    ${
      "" /* display: flex;
    align-items: center; */
    }
  }
`;

export default Header;
