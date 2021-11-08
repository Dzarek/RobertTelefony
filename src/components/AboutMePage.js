import styled from "styled-components";
import robertImg from "../images/robertImg.jpg";

const AboutMePage = () => {
  return (
    <Wrapper id="o_mnie">
      <div className="main-section">
        <div className="titleContainer">
          <div className="titleLine"></div>
          <h2 className="title">O mnie</h2>
          <div className="titleLine"></div>
        </div>
        <div className="aboutMeInfo">
          <h1>Cześć ! </h1>
          <div className="aboutMeWrapper">
            <h3>
              <img src={robertImg} alt="" />
              Nazywam się Robert Kamiński i od x lat prowadzę jeden z oddziałów{" "}
              <span>AktivGSM</span>. Mój sklep zlokalizowany jest w samym
              centrum miasta Gorlice, przy <span>ul. Adama Mickiewicza 3</span>.{" "}
              Zawsze interesowałem się nowościami technologicznymi i swoją uwagę
              skupiłem na telefonach. Mam nadzieję że moją wiedzą i
              doświadczeniem pomogę Ci w doborze odpowiedniego{" "}
              <span>telefonu</span>.
            </h3>
          </div>
        </div>
        <div className="endLine"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;
  }
  .title {
    margin: 0 3vw;
    width: 14vw;
  }
  .titleLine {
    width: 30vw;
    height: 3px;
    background: rgb(70, 2, 2);
  }
  .endLine {
    width: 80vw;
    height: 3px;
    background: rgb(70, 2, 2);
    margin: 10vh auto 0;
  }

  .aboutMeInfo {
    text-align: center;
    font-size: 1.2rem;
    width: 80vw;
    margin: 0 auto 10vh;
    color: #222;
    font-family: "Cairo", sans-serif;
    border-left: 3px solid rgb(70, 2, 2);
    border-right: 3px solid rgb(70, 2, 2);
    span {
      color: rgb(70, 2, 2);
      text-shadow: 0 0 2px black;
    }
  }
  .aboutMeWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    img {
      border: 4px solid rgb(70, 2, 2);
      border-radius: 50%;
      width: 200px;
      height: 200px;
      margin: 10px;
      box-shadow: 0 0 15px 2px black;
      float: left;
    }

    h3 {
      text-align: right;
    }
  }
`;

export default AboutMePage;
