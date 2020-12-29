import React from "react";
import AccordionPassengerInfoWrap from "./AccordionPassengerInfoWrap";
import styled from "styled-components";

function PassengerInfoAccordion({ data, onChange, title, active, setActive, colorMode, setColorMode }) {
  const clickHandler = () => {
    setActive(title);
    if (active === title) {
      setActive("");
    }
  };

  return (
    <Accordion>
      <AccordionHeading title active colorMode>
        <AccordionTitle>
          {active === title ? <p className="titleOpen">{title}</p> : <p> {title}</p>}
          <span onClick={clickHandler}>
            {active === title ? (
              <img
                className="accordionOpen"
                src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png"
                alt="arrow"
              ></img>
            ) : (
              <img src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png" alt="arrow"></img>
            )}
          </span>
        </AccordionTitle>
      </AccordionHeading>

      {active === title ? (
        <AccordionContent>
          <AccordionPassengerInfoWrap data={data} onChange={onChange} />
        </AccordionContent>
      ) : (
        <AccordionContent />
      )}
    </Accordion>
  );
}

export default PassengerInfoAccordion;

const Accordion = styled.div`
  width: 100%;
  margin: 18px auto;
  color: #000;
  border: 1px solid #dadada;
`;

const AccordionHeading = styled.div`
  padding: 14px 0;
  height: 80px;
  display: flex;
  align-items: center;
`;

const AccordionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-left: 40px;
    letter-spacing: 1.2px;

    &.titleOpen {
      font-size: 20px;
      font-weight: 600;
    }
  }
  span {
    margin-right: 40px;
    cursor: pointer;
    img.accordionOpen {
      transform: rotate(180deg);
    }
  }
`;

const AccordionContent = styled.div``;
