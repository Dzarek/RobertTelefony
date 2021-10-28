import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi";
import { GiEntryDoor } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { useState } from "react";

import smartfonCircle from "../images/smartphoneCircle.png";
import arrowSmartfon from "../images/arrowSmartfone.png";
import arrowSmartfonR from "../images/arrowSmartfoneR.png";
import shakingHands from "../images/shaking-hands.jpg";
import mobileMarks from "../images/MobileMarks.png";

const Smartfony = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <Wrapper>
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
          <div className="modal-content">
            <h1>SPRZEDAŻ</h1>
            <section>
              <div className="modal-marks">
                <p>Różnorodność marek telefonów.</p>
                <img src={mobileMarks} alt="" />
              </div>
              <div className="modal-info">
                <p>
                  W mojej ofercie znajdują się zarówno telefony nowe jak i
                  używane, z wyższych i niższych półek cenowych, a więc każdy
                  znajdzie coś dla siebie.
                </p>
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
            </section>
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
      font-family: "Bebas Neue";
      cursor: pointer;
      border: 4px solid white;
      transition: 0.5s;
      letter-spacing: 1px;
    }
    button:hover {
      font-size: 2.5rem;
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
    height: 100vh;

    section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80vw;
      div {
        margin: 2vw;
        text-align: center;
        font-size: 1.5rem;
      }
      .modal-info {
        width: 30%;
        margin-bottom: 30vh;
      }
      .modal-contact,
      .modal-marks {
        width: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 15vw;
          height: 15vw;
        }
      }
    }
  }
  .modalIcon {
    margin-right: 1vw;
  }
`;

export default Smartfony;
