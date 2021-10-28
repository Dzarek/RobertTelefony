import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { AiFillSmile } from "react-icons/ai";

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
            Szukasz nowego telefonu ? <br /> A może chcesz jakiś sprzedać i
            zarobić ?
          </h1>
          <h1>
            Słuchawki, Ładowarki, Powerbanki, Szkła Ochronne, <br />
            Głośniki Bluetooth i wiele innych...
          </h1>
          <h1>
            Pęknięta szybka? <br /> Spokojnie, dopasuje i założę Ci nową ;)
            {/* <AiFillSmile className="icon" /> */}
          </h1>
          <h1>
            Twój telefon wymaga serwisu ? <br /> Postaram się Ci pomóc !
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
    font-size: 1rem;
    line-height: 3;
    /* letter-spacing: 1px; */
    text-align: center;
    font-family: "Lemonada", cursive;
    text-shadow: 0px 0px 5px rgb(70, 2, 2);
    h1 {
      width: 70%;
    }
  }
`;

export default Header;