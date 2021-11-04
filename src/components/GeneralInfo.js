import styled from "styled-components";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillPersonCheckFill } from "react-icons/bs";

const GeneralInfo = () => {
  return (
    <Wrapper>
      <div className="main-section">
        <div className="oneGeneralInfo">
          <BsFillPersonCheckFill className="icon" />
          <h4>DOŚWIADCZENIE</h4>
        </div>
        <div className="oneGeneralInfo">
          <GiReceiveMoney className="icon" />
          <h4>UCZCIWOŚĆ</h4>
        </div>
        <div className="oneGeneralInfo">
          <AiOutlineFieldTime className="icon" />
          <h4>SZYBKOŚĆ</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-section {
    height: 25vh;
    min-height: 25vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    margin-top: -10vh;
    padding-bottom: 20vh;
    .oneGeneralInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: rgb(100, 2, 2);
      font-size: 1.8rem;
      font-family: "Stick No Bills", sans-serif;
      width: 20vw;
      .icon {
        font-size: 6rem;
        margin-bottom: 3vh;
        transition: 0.5s;
        :hover {
          font-size: 7rem;
        }
      }
      h4 {
        color: #222;
      }
    }
  }
`;

export default GeneralInfo;
