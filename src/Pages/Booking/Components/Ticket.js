import React from "react";
import styled from "styled-components";

const Ticket = ({ itienrary, onTicketClick }) => {
  return (
    <Wrapper
      onClick={() => {
        onTicketClick(itienrary);
      }}
    >
      <Info className={itienrary.on ? "on" : ""}>
        <Span>{itienrary.airplane}</Span>
        <Div>
          <Strong>{itienrary.depart_time}</Strong>
          <Span>{itienrary.depart_airport_english_name}</Span>
        </Div>
        <Div>
          <span>01h 10m</span>
          <img src="http://contents-image.twayair.com/homepage/images/booking/bg_service_exp.png" alt="bg_service" />
          <span>직항</span>
        </Div>
        <Div>
          <Strong>{itienrary.arrive_time}</Strong>
          <Span>{itienrary.arrive_airport_english_name}</Span>
        </Div>
      </Info>
      <Price className={itienrary.on ? "on" : ""}>
        <span>KRW</span>
        <Strong>{itienrary.price}</Strong>
      </Price>
    </Wrapper>
  );
};

export default Ticket;

const Wrapper = styled.ul`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  cursor: pointer;
`;

const Info = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 22px 40px 22px 40px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  border-right: 1px dashed #cccccc;

  &.on {
    border: 2px solid black;
    border-radius: 10px;
    border-right: 1px dashed #cccccc;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  img {
    position: relative;
    top: -8px;
  }
`;

const Strong = styled.strong`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
`;

const Span = styled.span`
  font-size: 16px;
  color: #1a1a1a;
`;

const Price = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 377px;
  padding: 25px 50px 25px 20px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  border-left: none;

  &.on {
    border: 2px solid black;
    border-radius: 10px;
    border-left: none;
  }

  span {
    position: relative;
    top: 8px;
    margin-right: 10px;
  }
`;
