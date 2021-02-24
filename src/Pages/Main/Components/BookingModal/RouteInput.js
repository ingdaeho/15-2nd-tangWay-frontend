import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDeparture } from "../../../../store/actions";
import styled from "styled-components";

function RouteInput({ modalConditions, setModalConditions, calendarReset, name }) {
  const dispatch = useDispatch();
  const departure = useSelector((store) => store.bookingReducer.departure);
  const destination = useSelector((store) => store.bookingReducer.destination);
  const placeholderSelector = name === departure ? departure || "출발지" : destination || "도착지";

  return (
    <>
      <Input
        placeholder={placeholderSelector}
        onClick={
          name === departure
            ? () => {
                dispatch(setDeparture(""));
                setModalConditions({ ...modalConditions, modalLayer: true, calendar: false });
                calendarReset();
              }
            : null
        }
        departure={departure}
      />
      <span></span>
      <img alt="map_locator_img" src="./images/map-locator.png" />
    </>
  );
}

export default RouteInput;

const Input = styled.input`
  ::placeholder {
    font-size: ${(props) => (props.departure === "" ? "18px" : "40px")};
    color: ${(props) => (props.departure === "" ? "" : "black")};
  }
`;
