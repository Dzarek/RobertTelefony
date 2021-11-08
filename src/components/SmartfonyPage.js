import styled from "styled-components";
import { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { smartphonesData } from "../data";
import OneMobilePhone from "./OneMobilePhone";
import SellPhone from "./SellPhone";

import { GiExitDoor } from "react-icons/gi";
import { GiEntryDoor } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { IoArrowUpCircle } from "react-icons/io5";

import smartfonCircle from "../images/smartphoneCircle.png";
import arrowSmartfon from "../images/arrowSmartfone.png";
import arrowSmartfonR from "../images/arrowSmartfoneR.png";
import shakingHands from "../images/shaking-hands.jpg";
import mobileMarks from "../images/MobileMarks.png";

const Smartfony = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showBuyNowMobile, setShowBuyNowMobile] = useState(false);
  const [data, setData] = useState(smartphonesData);

  return (
    <Wrapper id="smartfony">
      <div className="main-section smartfon-section">
        <h2 className="title">Smartfony</h2>
        <img
          className="smartfonCircle"
          src={smartfonCircle}
          alt="smartfon circle"
        />
        <img
          className="arrowSmartfonLeft"
          src={arrowSmartfon}
          alt="arrow left"
        />
        <img
          className="arrowSmartfonRight"
          src={arrowSmartfonR}
          alt="arrow right"
        />
        <div className="smartphone-container">
          <div className="sell-section">
            <button
              onClick={() => setShowModal1(true)}
              className="smartphone-btnL"
            >
              SPRZEDAŻ <br /> <GiEntryDoor />
            </button>
          </div>
          <div className="buy-section">
            <button
              onClick={() => setShowModal2(true)}
              className="smartphone-btnR"
            >
              SKUP <br /> <GiEntryDoor />
            </button>
          </div>
        </div>
        <div
          className={
            showModal1 ? "smartphone-modal" : "smartphone-modal no-modal1"
          }
        >
          <img className="modalBg" src={shakingHands} alt="modalBg" />
          <button onClick={() => setShowModal1(false)} className="btn-exit">
            <GiExitDoor />
          </button>
          {showBuyNowMobile && (
            <button
              onClick={() => setShowBuyNowMobile(false)}
              className="btn-exit2"
            >
              <IoArrowUpCircle />
            </button>
          )}
          <h1 className="modalContentTitle">SPRZEDAŻ</h1>
          <div
            className={
              !showBuyNowMobile
                ? "modal-content modalWithButton"
                : "modal-content noModalWithButton"
            }
          >
            <div className="modalWithButton">
              <section className="modalContentOne">
                <div className="modal-info">
                  <p>
                    W mojej ofercie znajdują się zarówno telefony nowe jak i
                    używane, z wyższych i niższych półek cenowych, a więc każdy
                    znajdzie coś dla siebie.
                  </p>
                </div>
                <div className="marksAndContact">
                  <div className="modal-marks">
                    <p>Różnorodność marek telefonów.</p>
                    <img src={mobileMarks} alt="" />
                  </div>
                  <div className="modal-contact">
                    <p>Odwiedź mój sklep i wybierz swój nowy telefon!</p>
                    <h4>
                      <FaMapMarkerAlt className="modalIcon" />
                      Adama Mickiewicza 3, <br /> 38-300 Gorlice
                    </h4>
                    <h4>
                      <ImMobile className="modalIcon" /> 791 838 332
                    </h4>
                  </div>
                </div>
              </section>
              <button
                onClick={() => setShowBuyNowMobile(true)}
                className="buyNowBtn"
              >
                Zobacz aktualne promocje
              </button>
            </div>
            <div className="buyNowMobile">
              <Carousel
                infinite
                autoPlay={3000}
                animationSpeed={2000}
                slidesPerPage={3}
                addArrowClickHandler
                stopAutoPlayOnHover
                arrowLeft={
                  <IoIosArrowDropleftCircle className="arrowrRightLeftFeatures" />
                }
                arrowRight={
                  <IoIosArrowDroprightCircle className="arrowrRightLeftFeatures" />
                }
              >
                {data.map((item) => {
                  return <OneMobilePhone key={item.id} {...item} />;
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <div
          className={
            showModal2 ? "smartphone-modal" : "smartphone-modal no-modal2"
          }
        >
          <img className="modalBg" src={shakingHands} alt="modalBg" />
          <button onClick={() => setShowModal2(false)} className="btn-exit2">
            <GiExitDoor />
          </button>
          {/* <div className="modal-content"> */}
          <SellPhone />
          {/* </div> */}
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
  /* font-family: "Francois One", sans-serif; */

  .modalContentTitle {
    font-family: "Stick No Bills", sans-serif;
    font-size: 3rem;
    color: white;
    position: absolute;
    z-index: 999;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
  }
  .modalWithButton {
    transform: translateY(0);
    height: 100vh;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    animation: modalDown 1s linear 1 forwards;
  }
  .noModalWithButton {
    top: 0;
    animation: modalUp 1s linear 1 forwards;
  }
  @keyframes modalUp {
    100% {
      /* transform: translateY(-100vh); */
      top: -100vh;
    }
  }
  @keyframes modalDown {
    100% {
      top: 0%;
      transform: translateY(0);
    }
  }

  .buyNowMobile {
    height: 100vh;
    width: 90vw;
    margin: 20vh auto 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .no-modal1 {
    transform: translateX(-100vw);
    opacity: 0;
  }
  .no-modal2 {
    transform: translateX(100vw);
    opacity: 0;
  }
  .main-section {
    margin: 0vh auto;
    position: relative;
  }
  .modalBg {
    width: 100vw;
    height: 100vh;
    filter: grayscale(1);
    opacity: 0.2;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
  }
  .btn-exit {
    position: absolute;
    z-index: 999;
    top: 5vh;
    left: 5vw;
    font-size: 5rem;
    color: #bbb;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    transform: rotateY(180deg);
    animation: btnExit 1s infinite alternate;
  }
  .btn-exit2 {
    position: absolute;
    z-index: 999;
    top: 5vh;
    right: 5vw;
    font-size: 5rem;
    color: #bbb;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    animation: btnExit 1s infinite alternate;
  }
  @keyframes btnExit {
    100% {
      color: #fff;
    }
  }
  .btn-exit:hover {
    color: white;
  }

  .arrowSmartfonLeft {
    position: absolute;
    top: 55%;
    left: 22%;
    width: 15vw;
    transform: rotate(-30deg);
    animation: arrowColor 3s infinite alternate;
  }
  .arrowSmartfonRight {
    position: absolute;
    bottom: 55%;
    right: 22%;
    width: 15vw;
    transform: rotate(-30deg);
    animation: arrowColor 3s infinite alternate-reverse;
  }
  @keyframes arrowColor {
    100% {
      filter: grayscale(0.6);
    }
  }
  .smartphone-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    button {
      width: 15vw;
      height: 8vw;
      font-size: 2rem;
      border-radius: 20px;
      background: rgba(3, 31, 63, 0.8);
      color: white;
      position: absolute;
      /* font-family: "Bebas Neue", sans-serif; */
      font-family: "Teko", sans-serif;
      cursor: pointer;
      border: 4px solid white;
      transition: 0.3s;
      letter-spacing: 1px;
    }
    button:hover {
      font-size: 2.2rem;
      background: rgba(3, 31, 63, 1);
    }

    .buy-section {
      width: 50%;
      height: 100%;
      button {
        top: 60%;
        left: 80%;
        transform: translate(-50%, -50%);
      }
    }
    .sell-section {
      width: 50%;
      height: 100%;
      button {
        top: 40%;
        left: 20%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    height: 200vh;
    overflow: hidden;
    position: relative;
    .modalContentOne {
      margin-top: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100vw;

      font-family: "Cairo", sans-serif;

      div {
        text-align: center;
        font-size: 1.5rem;
      }
      .modal-info {
        width: 60%;
        margin-bottom: 10vh;
      }
      .marksAndContact {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .modal-contact,
      .modal-marks {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 40vh;
        img {
          /* margin-top: 2vh; */
          width: 20vw;
          height: 15vw;
        }
      }
    }
  }
  .buyNowBtn {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    font-family: "Teko", sans-serif;
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 20px;
    border-radius: 10px;
    color: rgb(120, 2, 2);
    box-shadow: 0 0 15px 2px white;
    animation: buyBtnAnimation 1s linear infinite alternate;
  }
  @keyframes buyBtnAnimation {
    100% {
      box-shadow: none;
    }
  }
  .modalIcon {
    margin-right: 1vw;
  }
`;

export default Smartfony;
