import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Interior() {
  return (
    <InteriorContainer>
      <Fade direction="down" triggerOnce>
        <h1>Interior of the Future</h1>
      </Fade>
      <InteriorImg
        src="/images/new-interior.jpg"
        alt="tesla-interior"
      ></InteriorImg>
      <InteriorFeatures>
        <LeftDiv>
          <Fade direction="left" triggerOnce>
            <img src="/images/game.jpg" alt="game" />
            <h2>Stay Connected</h2>
            <p>
              Multi-device Bluetooth, wireless and USB-C charging for every
              passenger, with enough power to fast-charge your tablets and
              laptop.
            </p>
            <img src="/images/audio.jpg" alt="audio" />
          </Fade>
        </LeftDiv>
        <RightDiv>
          <Fade direction="right" triggerOnce>
            <h2>Game from Anywhere</h2>
            <p>
              Up to 10 teraflops of processing power enables in-car gaming
              on-par with today’s newest consoles. Wireless controller
              compatibility lets you game from any seat.
            </p>
            <img src="/images/connected.jpg" alt="connected" />
            <h2>Your Best Audio System</h2>
            <p>Best in class Music System with Dolby Atmos Sorround System</p>
          </Fade>
        </RightDiv>
      </InteriorFeatures>
    </InteriorContainer>
  );
}

const InteriorContainer = styled.div`
  text-align: center;
  background-color: black;
  color: #f9f9f9;
  padding-top: 2rem;
  overflow-x: hidden;
`;

const InteriorImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InteriorFeatures = styled.div`
  display: flex;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 150vh;
  img {
    width: 85%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 4rem;
    margin-top: 4rem;
  }

  h2 {
    margin-top: 2rem;
  }

  p {
    text-wrap: wrap;
    margin-top: 1rem;
    padding: 0px 4rem;
  }

  @media only screen and (max-width: 1120px) {
    height: 90vh;
    img {
      margin: 2rem auto;
    }

    h2 {
      margin: 2rem auto auto auto;
    }

    p {
      margin: 2rem auto;
    }
  }
`;

const RightDiv = styled(LeftDiv)`
  img {
    margin-left: 0px;
    padding-left: 0px;
  }

  h2 {
    margin-top: 5rem;
  }

  @media only screen and (max-width: 1120px) {
    margin-top: -2rem;
  }
`;

export default Interior;
