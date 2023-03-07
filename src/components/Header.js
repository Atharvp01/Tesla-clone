import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleComponent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <NavContainer>
      <Img src="/images/logo.svg" alt="tesla-logo" />
      <NavMenu>
        <Link to="/models">Model S</Link>
        <Link to="/model3">Model 3</Link>
        <Link to="/modelx">Model X</Link>
        <Link to="/modely">Model Y</Link>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </NavMenu>
      <NavMenuRight>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <button onClick={toggleComponent}>Menu</button>
      </NavMenuRight>
      <MobileMenu>
        <button onClick={toggleComponent}>Menu</button>
      </MobileMenu>
      <Sidenav visible={isVisible}>
        <Fade direction="right" triggerOnce="true">
          <ul>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
            <li>Existing Inventory</li>
            <li>Used Inventory</li>
            <li>Trade-In</li>
            <li>Demo Drive</li>
            <li>Insurance</li>
            <li>Powerwall</li>
          </ul>
        </Fade>
      </Sidenav>
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
  cursor: pointer;
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
  button {
    margin-right: 15px;
    border: 1px solid black;
    background-color: transparent;
    padding: 5px;
    border-radius: 3px;
    color: black;
    cursor: pointer;
    font-size: 14px;
    font-weight: 550;
    backdrop-filter: blur(5px);
    z-index: 3;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 1120px) {
    display: flex;
    width: 90px;
    align-items: center;
    justify-content: center;
    button {
      border: 1px solid black;
      background-color: transparent;
      padding: 5px;
      border-radius: 3px;
      color: black;
      cursor: pointer;
      font-size: 14px;
      font-weight: 550;
      backdrop-filter: blur(5px);
      z-index: 3;
    }
  }
`;

const Sidenav = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: #f9f9f9;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 200px;
  @media only screen and (min-width: 1120px) {
    width: 300px;
  }
  z-index: 2;
  transition: 0.2s all ease-in;
  ul {
    margin-top: 50px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  li {
    list-style: none;
    margin-top: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Header;
