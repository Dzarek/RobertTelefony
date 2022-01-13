import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import headerBg3 from "../images/headerBg3.jpg";

const Header = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={headerBg3} alt="header-img" />
      </div>
      <div className="header-info">
        <Carousel
          infinite
          autoPlay={4000}
          animationSpeed={2000}
          slidesPerPage={1}
        >
          <h1>
            Szukasz nowego telefonu? <br /> A może chcesz jakiś sprzedać i
            zarobić?
          </h1>
          <h1>
            W naszej ofercie znajdziesz również <br /> TELEFONY DLA SENIORA !{" "}
          </h1>
          <h1>
            Słuchawki, Ładowarki, Powerbanki, Szkła Ochronne, <br />
            Głośniki Bluetooth i wiele innych...
          </h1>
          <h1>
            Pęknięta szybka? <br /> Spokojnie, dopasujemy i założymy Ci nową ;)
          </h1>
          <h1>
            Twój telefon wymaga serwisu? <br /> Postaramy się Ci pomóc!
          </h1>
          <h1>
            Punkt DPD <br /> Tutaj nadasz i odbierzesz paczkę!
          </h1>
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0vh auto 0vh;
  background: #000;
  position: relative;
  border-top: 4px solid rgba(100, 47, 47);

  .icon {
    margin-left: 1vw;
  }
  .img-container {
    opacity: 0.4;
    height: 88vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 88vh;
    }
  }
  .header-info {
    position: absolute;
    width: 100%;
    color: whitesmoke;
    font-size: 1.2rem;
    line-height: 3;
    text-align: center;
    font-family: "Teko", sans-serif;
    letter-spacing: 2px;
    h1 {
      width: 70%;
    }

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
      line-height: 2;
      letter-spacing: 1px;
    }
  }
`;

export default Header;
