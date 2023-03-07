import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section(props) {
  return (
    <Wrap bgImage={props.Img}>
      <Title>
        <Fade cascade="true" direction="down" triggerOnce="true">
          <h1>{props.title}</h1>
          <p style={{ fontWeight: 410, paddingTop: "10px" }}>
            {props.description}
          </p>
        </Fade>
      </Title>
      <Fade cascade="true" direction="down" triggerOnce="true">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.leftButtonText && (
            <ButtonGroup>
              <LeftButton>{props.leftButtonText}</LeftButton>
              {props.rightButtonText && (
                <RightButton>{props.rightButtonText}</RightButton>
              )}
            </ButtonGroup>
          )}

          {!props.leftButtonText && !props.rightButtonText && (
            <Fade delay={500} direction="down" triggerOnce>
              <Specifications>
                <div>
                  <h2>{props.range}</h2>
                  <span>{props.rangeText}</span>
                </div>
                <div>
                  <h2>{props.acceleration}</h2>
                  <span>{props.accelerationText}</span>
                </div>
                <div>
                  <h2>{props.topSpeed}</h2>
                  <span>{props.topSpeedText}</span>
                </div>
                {props.peakPower && (
                  <div id="div1">
                    <h2>{props.peakPower}</h2>
                    <span>{props.peakPowerText}</span>
                  </div>
                )}
                <button id="div2">Order Now</button>
              </Specifications>
            </Fade>
          )}

          {props.downArrow && (
            <DownArrow
              src="/images/down-arrow.svg"
              alt="down-arrow-image"
            ></DownArrow>
          )}
        </div>
      </Fade>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
  background: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 14vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 50px;
  }
`;

const LeftButton = styled.button`
  border: none;
  font-weight: bold;
  border-radius: 4px;
  color: #ffffff;
  background-color: rgba(23, 26, 32, 0.8);
  margin: 10px 20px 10px 20px;
  padding: 16px 110px;
  opacity: 0.85;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
  @media only screen and (min-width: 600px) {
    padding: 13px 90px;
    margin: 10px 10px 30px 20px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #e7e7e7;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  margin-bottom: 5px;
  animation: animateDown infinite 1.5s;
  @media only screen and (max-width: 1120px) {
    margin-bottom: 20px;
  }
`;

const Specifications = styled.div`
  color: #f9f9f9;
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  max-height: 50px;
  margin-bottom: 50px;
  div {
    margin: 0px 10px 500px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1120px) {
    & #div1 {
      display: none;
    }
    & #div2 {
      display: none;
    }
    margin-bottom: 100px;
  }
`;

export default Section;
