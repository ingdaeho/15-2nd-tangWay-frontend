import React from "react";
import styled from "styled-components";

function TypeRoundTrip() {
  return (
    <>
      <DateInput />
      <span>~</span>
      <DateInput />
    </>
  );
}

export default TypeRoundTrip;

const DateInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "YYYY-MM-DD",
}))`
  width: 100px;
  height: 46px;
  text-align: center;
  font-size: 15px;
`;
