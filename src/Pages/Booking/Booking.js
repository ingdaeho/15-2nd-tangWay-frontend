import React from "react";
import BookingHeader from "./Components/BookingHeader";
import BookingAirLine from "./Components/BookingAirLine";
import PassengerInfo from "./Pages/PassengerInfo";
import styled from "styled-components";

function Booking() {
  return (
    <BookingContent>
      <BookingHeader />
      <BookingAirLine />
      <PassengerInfo />
    </BookingContent>
  );
}

export default Booking;

const BookingContent = styled.div`
  display: flex;
  flex-direction: column;
`;
