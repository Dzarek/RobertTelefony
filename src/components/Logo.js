import styled from "styled-components";
import aktivGSMimg from "../images/logo_aktiv.png";
import usbImg from "../images/usb.png";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-wrapper">
        <div className="logo1">
          <img src={aktivGSMimg} alt="logo" />
        </div>
        <div className="logoUsb">
          <img src={usbImg} alt="usb" />
        </div>
        <div className="logo2">
          <h2>
            Robert Kamiński - <span>TELEFONY KOMÓRKOWE</span>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  opacity: 0.8;
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12vh;
    .logo1 {
      padding: 0vh 1vw 0vh 1vw;
      background: rgb(160, 64, 64, 0.5);
      height: 12vh;
      img {
        margin-top: 3%;
      }
    }
    .logo2 {
      font-size: 1.1rem;
      h2 {
        text-shadow: 0px 0px 1px white;
        font-family: "Lemonada", cursive;
        color: rgb(140, 64, 64);
      }
      span {
        color: #fff;
      }
    }
  }
`;

export default Logo;
