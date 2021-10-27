import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import video1 from "../images/video1.mp4";
import video3 from "../images/video3.mp4";
import video4 from "../images/video4.mp4";
import video6 from "../images/video6.mp4";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <div className="video-container">
          <video
            src={video4}
            autoPlay
            muted
            loop
            playsInline
            type="video/mp4"
          ></video>
        </div>
        <div className="nav-container">
          <Link to="/">
            Smartfony <TiArrowSortedDown className="icons-down" />
          </Link>
          <h2>|</h2>
          <Link to="/">
            Akcesoria <TiArrowSortedDown className="icons-down" />
          </Link>
          <h2>|</h2>
          <Link to="/">Serwis</Link>
          <h2>|</h2>
          <Link to="/">O mnie</Link>
          <h2>|</h2>
          <Link to="/">FAQ</Link>
          <h2>|</h2>
          <Link to="/">Kontakt</Link>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
  background: #000;
  border-bottom: 4px solid rgba(100, 47, 47);
  video {
    object-fit: cover;
    width: 100vw;
    height: 24vh;
    z-index: -2;
    opacity: 0.9;
  }
  .video-container {
    opacity: 1;
    width: 100vw;
    height: 24vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .nav-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65vw;
    height: 100%;
    a {
      font-size: 1.4rem;
      color: whitesmoke;
      text-shadow: 0px 0px 1px black;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-family: "Stick No Bills", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
    }
    h2 {
      font-family: arial;
    }
  }
  .icons-down {
    margin-left: 1vw;
    margin-right: -1vw;
  }
`;

export default Navbar;
