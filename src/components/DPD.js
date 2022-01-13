import styled from "styled-components";
import delivery1 from "../images/delivery1.png";

const AboutMePage = () => {
  return (
    <Wrapper id="dpd" className="main-section">
      <h2 className="title">Punkt DPD</h2>
      <div className="infoAndImg">
        <img src={delivery1} alt="delivery1" className="delivery1" />
        <p>W naszym sklepie odbierzesz i nadasz paczkę poprzez firmę DPD.</p>
      </div>
      <div className="linksDPD">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.dpd.com/pl/pl/odbieram-paczke/"
        >
          Odbierz paczkę
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.dpdpickup.pl/Wycen-i-nadaj-Online/"
        >
          Nadaj paczkę
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: -10vh;
  background: #111;
  height: 100vh;
  min-height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cairo", sans-serif;

  .infoAndImg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    img {
      /* height: 30%; */
      width: 30%;
      margin: 8vh auto;
    }
    p {
      font-size: 1.8rem;
      width: 50%;
      text-align: left;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      width: 90%;
      flex-direction: column;
      /* margin: 10vh auto; */
      margin-bottom: 10vh;
      padding-top: 5vh;
      img {
        width: 60%;
        margin: 5vh auto;
      }
    }
    @media screen and (max-width: 800px) {
      p {
        text-align: center;
        width: 90%;
        font-size: 1.4rem;
      }
    }
  }
  .linksDPD {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    a {
      padding: 10px 20px;
      border: 2px solid rgba(120, 2, 2, 1);
      color: white;
      font-family: "Teko", sans-serif;
      font-size: 2rem;
      border-radius: 5px;
      transition: 0.4s;
      :hover {
        background: rgba(120, 2, 2, 1);
      }
    }
    @media (orientation: portrait) and (max-width: 800px) {
      width: 100vw;
      a {
        font-size: 1.5rem;
      }
    }
  }
  .title {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    /* padding-top: 10vh; */
    text-shadow: none;
    color: white;
  }
`;

export default AboutMePage;
