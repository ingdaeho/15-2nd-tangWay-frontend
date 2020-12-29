import React from "react";
import styled from "styled-components";

function BookingAirLine() {
  return (
    <AirLineWrap>
      <div className="airLineTitle">
        <h2>항공권 예매</h2>
      </div>
      <div className="stepBookingContainer">
        <ul>
          {stepBooking?.map((el, index) => {
            return (
              <StepBookingList key={index}>
                <i className={el.icon}></i>
              </StepBookingList>
            );
          })}
        </ul>
      </div>
    </AirLineWrap>
  );
}

export default BookingAirLine;

const stepBooking = [
  {
    id: 1,
    icon: "far fa-calendar-check",
  },
  {
    id: 2,
    icon: "far fa-address-book",
  },
  {
    id: 3,
    icon: "far fa-credit-card",
  },
];

const AirLineWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  .airLineTitle {
    h2 {
      font-size: 42px;
      font-weight: 700;
    }
  }
  .stepBookingContainer {
    width: 70%;
    ul {
      display: flex;
      justify-content: flex-end;
      margin-left: 20px;
    }
  }
`;

const StepBookingList = styled.li`
  padding: 0 20px;
  margin-right: 20px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 2px;
    top: 50%;
    left: 75%;
    background-color: #dadada;
  }
  i {
    font-size: 26px;
  }
`;
