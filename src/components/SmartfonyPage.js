import styled from "styled-components";

import smartfonCircle from "../images/smartphoneCircle.png";
import arrowSmartfon from "../images/arrowSmartfone.png";
import arrowSmartfonR from "../images/arrowSmartfoneR.png";

const Smartfony = () => {
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
            <h1>SPRZEDAŻ</h1>
          </div>
          <div className="buy-section">
            <h1>SKUP</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-section {
    margin: 0vh auto;
    position: relative;
  }

  /* .title {
    position: absolute;
  } */
  .arrowSmartfonLeft {
    position: absolute;
    top: 55%;
    left: 22%;
    width: 15vw;
    transform: rotate(-30deg);
  }
  .arrowSmartfonRight {
    position: absolute;
    bottom: 55%;
    right: 22%;
    width: 15vw;
    /* transform: rotate(140deg); */
    transform: rotate(-30deg);
  }
  .smartphone-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    .buy-section {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sell-section {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Smartfony;
