import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";

const SellPhone = () => {
  return (
    <Wrapper>
      <h1>SKUP</h1>
      <section className="modalContentSell">
        <div className="part1">
          <h3>
            Jeśli potrzebujesz szybko gotówki lub twój telefon nie spełnia już
            twoich oczekiwań i chcesz kupić coś nowego, zapraszam do mojego
            sklepu! Odkupie twój telefon w atrakcyjnej cenie. Możesz u mnie
            sprzedać telefon zarówno z niższych półek cenowych jak i te droższe.
          </h3>
        </div>
        <div className="part2">
          <div className="fromMeYou">
            <h3>Czego oczekuje?</h3>
            <ul>
              <li>
                <TiArrowRightOutline className="icon" />
                Działającego telefonu - nie kupuje telefonów które wymagają
                naprawy.
              </li>
              <li>
                <TiArrowRightOutline className="icon" />
                Legalnego telefonu - najlepiej z dowodem zakupu oraz pudełkiem i
                akcesoriami (ładowarka, słuchawki itd).
              </li>
            </ul>
          </div>
          <div className="fromMeYou">
            <h3>Co w zamian?</h3>
            <ul>
              <li>
                <TiArrowRightOutline className="icon" />
                Uczciwa wspólna wycena.
              </li>
              <li>
                <TiArrowRightOutline className="icon" />
                Szybka gotówka.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  position: relative;
  font-family: "Cairo", sans-serif;

  h1 {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    font-family: "Stick No Bills", sans-serif;
    letter-spacing: 2px;
  }
  .modalContentSell {
    position: absolute;
    width: 80vw;
    height: 80vh;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    .part1 {
      width: 50vw;
      text-align: center;
      height: 20vh;
    }
    .part2 {
      display: flex;
      justify-content: space-between;
      margin: 0 auto 10vh;
      width: 60vw;
      height: 30vh;
      .fromMeYou {
        width: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        h3 {
          color: rgb(120, 2, 2);
          font-size: 2.5rem;
          font-family: "Teko", sans-serif;
          margin-bottom: 3vh;
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 50vh;
          list-style: none;
          font-size: 1.2rem;
        }
      }
    }
  }
  .icon {
    margin-right: 1vw;
    color: rgb(120, 2, 2);
  }
`;
export default SellPhone;
