import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Wrapper className="singleQuestion">
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <header>
                <h3>{title}</h3>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                  {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </header>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className={showInfo ? "showAnswear" : "showAnswear hideAnswear"}>
              {info}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    display: flex;
  }

  .showAnswear {
    transition: 0.3s;
    font-size: 0.8rem;
    overflow: hidden;
  }
  .hideAnswear {
    font-size: 0px;
  }
`;

export default Question;
