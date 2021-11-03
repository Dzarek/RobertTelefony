import styled from "styled-components";

const AccessoriesPage = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <h2 className="title">Akcesoria</h2>
        <h3>Duży wybór akcesoriów do Twojego smartfona</h3>
        <div className="accessoriesWrapper">
          <section className="accessoriesList">
            <li>Ładowarki</li>
            <li>Szkła</li>
            <li>Power Banki</li>
            <li>Głośniki Bluetooth</li>
            <li>Karty Pamięci</li>
            <li>Inne</li>
          </section>
          <section className="accessoriesItems"></section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-section {
    background: #fff;
    padding: 5vh 0;
    h3 {
      text-transform: uppercase;
      color: #222;
      text-align: center;
      margin: 3vh auto;
      font-size: 1.8rem;
    }
  }
  .accessoriesWrapper {
    margin: 10vh auto;
    width: 70vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    section {
      width: 50%;
    }
    .accessoriesList {
      border-right: 5px solid rgb(70, 2, 2);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      min-height: 40vh;
      li {
        font-size: 1.5rem;
        letter-spacing: 2px;
        margin: 2vh auto;
        text-align: center;
      }
    }
  }
`;

export default AccessoriesPage;
