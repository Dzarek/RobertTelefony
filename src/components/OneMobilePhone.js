import React from "react";
import { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const OneMobilePhone = ({
  screen,
  proccessor,
  system,
  ram,
  memory,
  price,
  name,
  img,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Wrapper>
      <div className="oneMobilePhone">
        <div className="mobilePhoneImg">
          <Carousel
            className="imgAAA"
            infinite
            // autoPlay={4000}
            animationSpeed={2000}
            slidesPerPage={1}
            addArrowClickHandler
            // stopAutoPlayOnHover
            arrowRight={<IoMdArrowDropright className="arrowrRightFeaturesO" />}
            arrowLeft={<IoMdArrowDropleft className="arrowrLeftFeaturesO" />}
          >
            {img.map((item) => {
              return <img src={item} alt="" />;
            })}

            {/* <img src={img[0]} alt="" /> */}
          </Carousel>

          <div
            className={
              showDetails
                ? "mobilePhoneDetails showDetails"
                : "mobilePhoneDetails"
            }
          >
            <h5>
              Wyświetlacz: <span>{screen}</span>
            </h5>
            <h5>
              Procesor: <span>{proccessor}</span>
            </h5>
            <h5>
              System: <span>{system}</span>
            </h5>
            <h5>
              RAM: <span>{ram}</span>
            </h5>
            <h5>
              Pamięć: <span>{memory}</span>
            </h5>
            <h3>
              Cena: <span>{price}</span>
            </h3>
          </div>
        </div>
        <div className="nameAndDetails">
          <h3>{name}</h3>
          <button
            className="detailsBtn"
            // onClick={() => setShowDetails(!showDetails)}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
          >
            <h3>
              <CgDetailsMore />
            </h3>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: 10vh;
  font-family: "Francois One", sans-serif;

  .oneMobilePhone {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    width: 20vw;
    height: 55vh;
    position: relative;
    background: rgb(50, 2, 2);
    margin: 15vh 5vw;

    .mobilePhoneImg {
      width: 20vw;
      height: 48vh;
      position: relative;
      top: 0;
      left: 0;
      z-index: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: white;
      border-radius: 10px;
      .imgAAA {
        border-radius: 10px 10px 0 0;
        width: 20vw;
        height: 48vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        img {
          /* border-radius: 10px 10px 0 0; */
          width: 20vw;
          height: 48vh;
          /* position: absolute;
          top: 0;
          left: 0;
          z-index: 0; */
        }
      }
    }
    .nameAndDetails {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-size: 1rem;
      height: 7vh;
      letter-spacing: 1px;
      .detailsBtn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        :hover {
          font-size: 1.6rem;
        }
      }
    }

    .mobilePhoneDetails {
      width: 100%;
      height: 48vh;
      z-index: 1;
      font-size: 1.2rem;
      letter-spacing: 1px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 0 5%;
      background: rgba(0, 0, 0, 0.95);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 10px 10px 0 0;
      display: none;
      transition: 0.5s;
      span {
        color: rgb(120, 2, 2);
        text-shadow: none;
        text-transform: uppercase;
      }
    }

    .showDetails {
      display: flex;
    }
  }
`;

export default OneMobilePhone;
