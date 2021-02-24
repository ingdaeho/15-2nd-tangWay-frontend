import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TypeRoundTrip({ modalConditions }) {
  const startDate = useSelector((store) => store.bookingReducer.startDate);
  const endDate = useSelector((store) => store.bookingReducer.endDate);

  return (
    <>
      <DateInput
        name={startDate}
        onClick={modalConditions.calendar}
        placeholder={startDate?.format(`YYYY-MM-DD`) || "YYYY-MM-DD"}
        startDate={startDate}
      />
      <span>~</span>
      <DateInput
        name={endDate}
        onClick={modalConditions.calendar}
        placeholder={endDate?.format(`YYYY-MM-DD`) || "YYYY-MM-DD"}
        startDate={startDate}
      />
    </>
  );
}

export default TypeRoundTrip;

const DateInput = styled.input.attrs(() => ({
  type: "text",
}))`
  width: 100px;
  height: 46px;
  text-align: center;
  font-size: 15px;
  ::placeholder {
    font-size: ${(props) => (props.startDate ? "18px" : "15px")};
    color: ${(props) => (props.startDate ? "black" : "")};
  }
`;
