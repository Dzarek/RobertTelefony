import styled from "styled-components";
// import { TiArrowSortedDown } from "react-icons/ti";
import video4 from "../images/video4.mp4";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Logo from "./Logo";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  return (
    <>
      {offset === 0 ? (
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
            <Link to="smartfony" smooth={true} offset={-100} duration={1000}>
              Smartfony
            </Link>
            <h2>|</h2>
            <Link to="akcesoria" smooth={true} offset={-50} duration={1000}>
              Akcesoria
            </Link>
            <h2>|</h2>
            <Link to="serwis" smooth={true} offset={-50} duration={1500}>
              Serwis
            </Link>
            <h2>|</h2>
            <Link to="o_mnie" smooth={true} offset={-100} duration={1500}>
              O mnie
            </Link>
            <h2>|</h2>
            <Link to="faq" smooth={true} offset={-50} duration={2000}>
              FAQ
            </Link>
            <h2>|</h2>
            <Link to="kontakt" smooth={true} offset={-100} duration={2000}>
              Kontakt
            </Link>
          </div>
        </Wrapper>
      ) : (
        <Wrapper2>
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
            <Link to="smartfony" smooth={true} offset={-100} duration={1000}>
              Smartfony
            </Link>
            <h2>|</h2>
            <Link to="akcesoria" smooth={true} offset={-50} duration={1000}>
              Akcesoria
            </Link>
            <h2>|</h2>
            <Link to="serwis" smooth={true} offset={-50} duration={1500}>
              Serwis
            </Link>
            <h2>|</h2>
            <Link to="o_mnie" smooth={true} offset={-100} duration={1500}>
              O mnie
            </Link>
            <h2>|</h2>
            <Link to="faq" smooth={true} offset={-50} duration={2000}>
              FAQ
            </Link>
            <h2>|</h2>
            <Link to="kontakt" smooth={true} offset={-100} duration={2000}>
              Kontakt
            </Link>
          </div>
          <button
            className="upBtn"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <BsFillArrowUpSquareFill />
          </button>
        </Wrapper2>
      )}
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
  opacity: 0;
  animation: showWrapper 1s 1 forwards;
  @keyframes showWrapper {
    100% {
      opacity: 1;
    }
  }

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
      font-size: 1.3rem;
      color: whitesmoke;
      text-shadow: 0px 0px 1px black;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-family: "Stick No Bills", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        margin-top: 10px;
      }
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
const Wrapper2 = styled.nav`
  width: 100vw;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
  background: #000;
  border-bottom: 4px solid rgba(100, 47, 47);
  position: fixed;
  margin-top: -12vh;
  opacity: 0;
  animation: showWrapper 1s 1 forwards;
  @keyframes showWrapper {
    100% {
      opacity: 1;
    }
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 22vh;
    z-index: -2;
    opacity: 0.2;
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
      font-size: 1.3rem;
      color: whitesmoke;
      text-shadow: 0px 0px 1px black;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-family: "Stick No Bills", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        margin-top: 10px;
      }
    }
    h2 {
      font-family: arial;
    }
  }
  .icons-down {
    margin-left: 1vw;
    margin-right: -1vw;
  }
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: rgb(120, 2, 2);
    transition: 0.5s;
    cursor: pointer;
  }
`;

export default Navbar;
