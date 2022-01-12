import styled from "styled-components";
import aktivGSMimg from "../images/logo_aktiv.png";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-wrapper">
        <div className="logo1">
          <img src={aktivGSMimg} alt="logo" />
        </div>
        <div className="logo2">
          <h2>
            Robert Kamiński - <span>TELEFONY KOMÓRKOWE</span>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  .logo-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 12vh;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 100%;
    }
    .logo1 {
      padding: 0vh 2vw 0vh 2vw;
      background: rgb(100, 34, 34, 1);
      height: 12vh;
      img {
        margin: 3vh auto;
        height: 5vh;
      }
    }
    .logo2 {
      font-size: 1.3rem;
      @media (orientation: portrait) and (max-width: 800px) {
        font-size: 1rem;
      }
      h2 {
        text-shadow: none;
        font-family: "Teko", sans-serif;
        color: rgb(120, 34, 34);
        letter-spacing: 2px;
        @media (orientation: portrait) and (max-width: 800px) {
          letter-spacing: 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
      }
      span {
        color: #fff;
      }
    }
  }
`;

export default Logo;
