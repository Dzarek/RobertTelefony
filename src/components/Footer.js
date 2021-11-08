import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footerSection">
        <div className="footerContent">
          <section className="contact">
            <h3>
              Kamiński Robert <br /> Telefony Komórkowe
            </h3>
            <p>
              {" "}
              <FaMapMarkerAlt className="icon" />
              ul.Adama Mickiewicza 3, <br /> 38-300 Gorlice
            </p>
            <p>
              {" "}
              <ImMobile className="icon" /> +48 791 838 332
            </p>
            <p>
              {" "}
              <GoMail className="icon" /> sprzedajtelefon@gmail.com
            </p>
          </section>
          <section className="footerNav">
            <h3>Oferta :</h3>
            <Link to="/">
              <FaLongArrowAltRight className="icon" />
              Smartfony
            </Link>
            <Link to="/">
              {" "}
              <FaLongArrowAltRight className="icon" />
              Akcesoria
            </Link>
            <Link to="/">
              {" "}
              <FaLongArrowAltRight className="icon" />
              Serwis
            </Link>
            {/* <Link to="/">
              {" "}
              <FaLongArrowAltRight className="icon" />O mnie
            </Link>
            <Link to="/">
              {" "}
              <FaLongArrowAltRight className="icon" />
              FAQ
            </Link>
            <Link to="/">
              {" "}
              <FaLongArrowAltRight className="icon" />
              Kontakt
            </Link> */}
          </section>
          <section className="openHours">
            <h3>Godziny Otwarcia :</h3>
            <li>
              <p>
                <BiTime className="icon" /> Poniedziałek
              </p>
              <p>9:00 - 17:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Wtorek
              </p>
              <p>9:00 - 17:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Środa
              </p>
              <p>9:00 - 17:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Czwartek
              </p>
              <p>9:00 - 17:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Piątek
              </p>
              <p>9:00 - 17:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Sobota
              </p>
              <p>9:00 - 13:00</p>
            </li>
            <li>
              <p>
                <BiTime className="icon" /> Niedziela
              </p>
              <p>Nieczynne</p>
            </li>
          </section>
        </div>
        <div className="footerCopyrights">
          <p>
            &copy; {new Date().getFullYear()} Kamiński Robert - Telefony
            Komórkowe. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
      {/* <button
        className="upBtn"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <BsFillArrowUpSquareFill />
      </button> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  /* .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: rgb(120, 2, 2);
    transition: 0.5s;
    cursor: pointer;
  } */
  button:hover {
    color: white;
  }
  .footerSection {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #111;
    font-family: "Stick No Bills", sans-serif;
    letter-spacing: 2px;
    font-size: 1.1rem;
  }
  p,
  a {
    color: white;
    transition: 0.5s;
    margin-top: 1vh;
  }
  .contact p {
    margin-top: 3vh;
  }
  a:hover {
    letter-spacing: 5px;
  }
  h3 {
    font-size: 1.5rem;
    color: rgb(120, 2, 2);
    text-align: center;
    margin-bottom: 3vh;
    margin-top: 3vh;
  }
  .icon {
    margin-right: 10px;
    color: rgb(120, 2, 2);
  }
  .footerContent {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 80vw;
    padding: 3vh 0;
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: 25%;
    }
  }
  .footerNav a {
    margin-top: 2vh;
  }
  .openHours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .openHours li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .footerCopyrights {
    border-top: 2px solid rgb(120, 2, 2);
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3vh 0;
  }
`;

export default Footer;
