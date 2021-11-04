import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";

import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service4 from "../images/service4.jpg";
import service5 from "../images/service5.jpg";
import serviceBg from "../images/serviceBg.png";

const ServicePage = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <div className="titleContainer">
          <div className="titleLine"></div>
          <h2 className="title">Serwis</h2>
          <div className="titleLine"></div>
        </div>
        {/* <h2 className="title">Serwis</h2> */}
        <div className="serviceWrapper">
          <h3>
            Twój telefon się zepsuł? Wyświetlacz jest wylany? Nie ładuje? NIE
            DZIAŁA TAK JAK W DNIU ZAKUPU? <br />{" "}
            <BsFillEmojiDizzyFill className="serviceIcon" />
          </h3>
          <section className="serviceImg">
            <Carousel
              infinite
              autoPlay={4000}
              animationSpeed={2000}
              slidesPerPage={1}
            >
              <img src={service1} alt="" />
              <img src={service2} alt="" />
              <img src={service4} alt="" />
              <img src={service5} alt="" />
            </Carousel>
          </section>
          <h3>
            UWAGA !!! <br /> Może nie musisz już kupować nowego. Przyjdź do
            mojego sklepu, a ja sprawdzę czy można go jeszcze oddać do serwisu i
            skutecznie naprawić. <br />{" "}
            <BsFillEmojiWinkFill className="serviceIcon" />
          </h3>
        </div>
        <div className="infoBar">
          <div className="infoBarContainer">
            <h5>Wymiana Baterii</h5>
            <h5>Wymiana Wyświetlacza</h5>
            <h5>Naprawa Obudowy</h5>
            <h5>Naprawa Głośnika</h5>
            <h5>Naprawa Po Zalaniu</h5>
            <h5>Odzyskiwanie Danych</h5>
          </div>
        </div>
        <h1 className="serviceStepsTitle">krok po kroku</h1>
        <div className="serviceSteps">
          <section>
            <h1>
              <FaWalking />
            </h1>
            <p>
              Odwiedź mój sklep: <br /> Adama Mickiewicza 3, <br /> 38-300
              Gorlice
            </p>
            <h1>01.</h1>
          </section>
          <section>
            <h1>
              <FiBox />
            </h1>
            <p>Wysyłka telefonu do serwisantów</p>
            <h1>02.</h1>
          </section>
          <section>
            <h1>
              <MdOutlineMiscellaneousServices />
            </h1>
            <p>Naprawa</p>
            <h1>03.</h1>
          </section>
          <section>
            <h1>
              <MdMobileFriendly />
            </h1>
            <p>Odbiór telefonu</p>
            <h1>04.</h1>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .infoBar {
    background-color: rgba(70, 2, 2, 0.8);
    height: 10vh;
    width: 100vw;
    margin: 10vh auto;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  .infoBarContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    animation: moveBar 30s infinite linear;
    h5 {
      color: white;
      font-size: 1.2rem;
      /* width: 50vw; */
    }
  }

  @keyframes moveBar {
    0% {
      transform: translateX(100vw);
    }

    100% {
      transform: translateX(-100vw);
    }
  }
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
  }
  .title {
    color: rgb(120, 2, 2);
    margin: auto 3vw;
    text-shadow: 0 0 2px black;
  }

  .titleLine {
    width: 5vw;
    height: 5px;
    background: rgb(120, 2, 2);
    animation: lineBigger 1s infinite alternate;
    border-bottom: 2px solid black;
  }
  @keyframes lineBigger {
    100% {
      width: 20vw;
    }
  }
  .serviceIcon {
    font-size: 2rem;
    margin-top: 2vh;
    color: rgb(120, 2, 2);
  }
  .main-section {
    background-image: url(${serviceBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin-top: -10vh;
    min-height: 100vh;
    padding-bottom: 5vh;

    .serviceWrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80vw;
      margin: 0 auto;
      font-family: "Lemonada", sans-serif;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 20px;
      color: white;
      padding: 5vh 2vw;
      h3 {
        font-size: 1.3rem;
        text-align: center;
        width: 25%;
      }
      .serviceImg {
        width: 40%;
        img {
          height: 50vh;
          width: 90%;
          border: 4px solid rgb(70, 2, 2);
          border-radius: 20px;
        }
      }
    }
  }
  .serviceStepsTitle {
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    text-shadow: 0px 0px 5px rgb(70, 2, 2);
    margin: 15vh auto 5vh;
    font-style: italic;
    font-family: "Stick No Bills", sans-serif;
    letter-spacing: 2px;
  }
  .serviceSteps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: whitesmoke;
    text-align: center;
    font-size: 1.1rem;
    width: 80vw;
    margin: 0 auto 5vh;
    section {
      width: 15vw;
      height: 35vh;
      background: rgba(0, 0, 0, 0.9);
      border: rgb(120, 2, 2) 2px solid;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      padding: 10px;
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 1px;
      transition: 0.3s;
      /* opacity: 0; */
      /* animation: serviceStepsAnimation 6s ease-in infinite alternate; */
      animation: serviceStepsAnimation 2s ease-in infinite alternate;

      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
    /* :hover section {
      animation: none;
      background: rgba(0, 0, 0, 1);
      border: rgb(120, 2, 2) 4px solid;
    } */
  }

  /* .serviceSteps section:nth-of-type(2) {
    animation-delay: 2s;
  }
  .serviceSteps section:nth-of-type(3) {
    animation-delay: 4s;
  }
  .serviceSteps section:nth-of-type(4) {
    animation-delay: 6s;
  } */
  @keyframes serviceStepsAnimation {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default ServicePage;
