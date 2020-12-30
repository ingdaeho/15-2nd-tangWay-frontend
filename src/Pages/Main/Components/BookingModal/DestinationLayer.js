import React from "react";
import styled from "styled-components";
import Departure from "./Departure";
import Arrival from "./Arrival";

function DestinationLayer({ data, departure, setDeparture, destination, setDestination }) {
  return (
    <LayerWrap>
      <h3>취항지</h3>
      <div>
        {departure !== "" ? (
          <Arrival data={data} setDestination={setDestination} />
        ) : (
          <Departure data={data} setDeparture={setDeparture} />
        )}
      </div>
    </LayerWrap>
  );
}

export default DestinationLayer;

const LayerWrap = styled.section`
  float: right;
  margin-right: 30px;
  width: 330px;
  height: 465px;
  overflow: auto;

  h3 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 700;
  }
`;
