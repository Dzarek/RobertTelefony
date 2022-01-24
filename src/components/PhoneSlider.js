import React, { useState, useEffect } from "react";
import styled from "styled-components";

import smartphone1 from "../images/phones/smartphones/iPhone12Pro-1.jpg";
import smartphone2 from "../images/phones/smartphones/motorolaMotoG60s-1.jpg";
import smartphone3 from "../images/phones/smartphones/oppoReno6Pro-1.jpg";
import smartphone4 from "../images/phones/smartphones/samsungGalaxyS20-1.jpg";
import smartphone5 from "../images/phones/smartphones/smartfonXIAOMI11Lite-1.jpg";

import oldphone1 from "../images/phones/seniorphones/maxcom-classic-mm139.jpg";
import oldphone2 from "../images/phones/seniorphones/maxcom-classic-mm244.jpg";
import oldphone3 from "../images/phones/seniorphones/maxcom-classic-mm320.jpg";
import oldphone4 from "../images/phones/seniorphones/maxcom-classic-mm330-3g.jpg";
import oldphone5 from "../images/phones/seniorphones/maxcom-comfort-mm730.jpg";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const PhoneSlider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 800;

  return (
    <Wrapper className="phonesView">
      <ReactCompareSlider
        portrait={isMobile ? true : false}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={
              isMobile
                ? {
                    background: "rgb(150, 2, 2)",
                    color: "white",
                    transform: "rotate(90deg)",
                  }
                : {
                    background: "rgb(150, 2, 2)",
                    color: "white",
                    transform: "rotate(0deg)",
                  }
            }
          />
        }
        itemOne={
          <div className="phonesImages smartphonesView">
            <h3>Smartfony</h3>
            <img src={smartphone1} alt="" />
            <img src={smartphone2} alt="" />
            <img src={smartphone3} alt="" />
            <img src={smartphone4} alt="" />
            <img src={smartphone5} alt="" />
          </div>
        }
        itemTwo={
          <div className="phonesImages oldphonesView">
            <img src={oldphone1} alt="" />
            <img src={oldphone2} alt="" />
            <img src={oldphone3} alt="" />
            <img src={oldphone4} alt="" />
            <img src={oldphone5} alt="" />
            <h3>Telefony Seniorów</h3>
          </div>
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 5vh auto;
  @media screen and (max-width: 800px) {
    height: 80vh;
  }

  .phonesImages {
    border-radius: 10px;
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    overflow-x: hidden;
    img {
      width: 12vw;
    }
    h3 {
      color: white;
      letter-spacing: 3px;
      font-family: "Stick No Bills", sans-serif;
      font-size: 2rem;
      background: var(--mainRed);
      padding: 5px 10px;
    }
    h3:nth-child(1) {
      border-radius: 0 10px 10px 0;
      margin-top: 35vh;
    }
    h3:nth-last-child(1) {
      border-radius: 10px 0 0 10px;
      margin-bottom: 35vh;
    }
    @media screen and (max-width: 800px) {
      height: 80vh;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      img {
        width: 40%;
      }
      h3 {
        letter-spacing: 0px;
        font-size: 1.5rem;
        padding: 5px 10px;
        width: 100%;
      }
      h3:nth-child(1) {
        border-radius: 10px 10px 0 0;
        margin-top: 0vh;
        align-self: flex-start;
      }
      h3:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
        margin-bottom: 0vh;
        align-self: flex-end;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .oldphonesView {
      background: #222;
    }
  }
`;

export default PhoneSlider;
