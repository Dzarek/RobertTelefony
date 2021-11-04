import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";
import { accessoriesData } from "../data";

const AccessoriesPage = () => {
  const ładowarki = accessoriesData.ładowarki;
  const szkła = accessoriesData.szkła;
  const powerbanki = accessoriesData.powerbanki;
  const głośniki = accessoriesData.głośniki;
  const memoriesCard = accessoriesData.memoriesCard;
  const słuchawki = accessoriesData.słuchawki;
  const [showAccessories, setShowAccessories] = useState(false);

  return (
    <Wrapper>
      <div className="main-section">
        <h2 className="title">Akcesoria</h2>
        <h3>Duży wybór akcesoriów do Twojego smartfona</h3>
        <div className="accessoriesWrapper">
          <ul className="accessoriesList">
            <li
              className={showAccessories === ładowarki && "activeItem"}
              onClick={() => setShowAccessories(ładowarki)}
            >
              <TiArrowRightOutline className="icon" />
              Ładowarki
            </li>
            <li
              className={showAccessories === szkła && "activeItem"}
              onClick={() => setShowAccessories(szkła)}
            >
              <TiArrowRightOutline className="icon" />
              Szkła
            </li>
            <li
              className={showAccessories === powerbanki && "activeItem"}
              onClick={() => setShowAccessories(powerbanki)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Power Banki
            </li>
            <li
              className={showAccessories === głośniki && "activeItem"}
              onClick={() => setShowAccessories(głośniki)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Głośniki Bluetooth
            </li>
            <li
              className={showAccessories === memoriesCard && "activeItem"}
              onClick={() => setShowAccessories(memoriesCard)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Karty Pamięci
            </li>
            <li
              className={showAccessories === słuchawki && "activeItem"}
              onClick={() => setShowAccessories(słuchawki)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Inne
            </li>
          </ul>
          <div className="borderAccessories"></div>
          {showAccessories ? (
            <div className="accessoriesContent">
              <section className="accessoriesItems">
                {showAccessories.items.map((item) => {
                  const { id, name, img } = item;
                  return (
                    <div className="oneItem" key={id}>
                      <img src={img} alt={name} />
                      <h5>{name}</h5>
                    </div>
                  );
                })}
              </section>
              <p>{showAccessories.info}</p>
            </div>
          ) : (
            <div className="accessoriesContent">
              <section className="accessoriesItems">
                <h3>WYBIERZ KATEGORIE</h3>
              </section>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-section {
    background: #fff;
    padding: 10vh 0;
    h3 {
      text-transform: uppercase;
      color: #222;
      text-align: center;
      margin: 3vh auto;
      font-size: 1.8rem;
      font-family: "Lemonada", sans-serif;
    }
  }
  .icon {
    margin-right: 10px;
  }
  .accessoriesWrapper {
    margin: 10vh auto;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      width: 55%;
    }
    ul {
      width: 40%;
    }
    @keyframes showItemA {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .accessoriesContent {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      animation: showItemA 1s 1 forwards;
      p {
        margin-top: 7vh;
        font-size: 0.9rem;
        width: 90%;
        font-family: "Lemonada", sans-serif;
        text-align: justify;
      }
    }
    .accessoriesItems {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .oneItem {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        img {
          border: 2px solid rgb(70, 2, 2);
          border-radius: 10px;
          width: 10vw;
          height: 10vw;
          margin-bottom: 2vh;
          box-shadow: 0 0 10px 2px rgb(70, 2, 2);
        }
        h5 {
          font-family: "Bebas Neue", sans-serif;
          letter-spacing: 2px;
          color: rgb(120, 2, 2);
          text-transform: uppercase;
          font-size: 1.5rem;
          text-align: center;
        }
      }
      h3 {
        color: rgb(120, 2, 2);
      }
    }
    .accessoriesList {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10vw;
      min-height: 50vh;
      li {
        font-size: 1.8rem;
        letter-spacing: 2px;
        list-style: none;
        display: flex;
        align-items: center;
        font-family: "Bebas Neue", sans-serif;
        cursor: pointer;
        transition: 0.5s;
        :hover {
          color: rgb(120, 2, 2);
          margin-left: 2vw;
        }
      }
      .activeItem {
        margin-left: 4vw;
        color: rgb(2, 7, 70);
        :hover {
          color: rgb(2, 7, 70);
          margin-left: 5vw;
        }
      }
    }
    .borderAccessories {
      background-color: rgb(70, 2, 2);
      width: 5px;
      height: 50vh;
      animation: borderBig 2s infinite alternate;
    }
    @keyframes borderBig {
      100% {
        height: 10vh;
      }
    }
  }
`;

export default AccessoriesPage;
