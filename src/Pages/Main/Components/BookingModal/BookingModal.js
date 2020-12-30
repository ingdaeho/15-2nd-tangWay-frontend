import React from "react";
import styled from "styled-components";
import TypeOneway from "./TypeOneway";
import TypeRoundTrip from "./TypeRoundTrip";
import LocationLayer from "./LocationLayer";
import Calendar from "../Calendar";
import Passenger from "./PassengerNum";

function BookingModal({
  data,
  modal,
  layer,
  setLayer,
  openLayer,
  closeLayer,
  openModal,
  closeModal,
  type,
  setType,
  numOfAdult,
  numOfInfant,
  departure,
  setDeparture,
  handlePlus,
  handleMinus,
  destination,
  setDestination,
  resetState,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <>
      <MainBooking modal={modal} type={type}>
        <div className="bookingContainer">
          <SelectType>
            <li>
              <button
                className={type === "oneWay" && "selectedButton"}
                onClick={() => {
                  openModal();
                  setType("oneWay");
                }}
              >
                편도
              </button>
            </li>
            <li>
              <button
                className={type === "roundTrip" && "selectedButton"}
                onClick={() => {
                  openModal();
                  setType("roundTrip");
                }}
              >
                왕복
              </button>
            </li>
            {modal === true ? (
              <ModalClose
                onClick={() => {
                  closeModal();
                  closeLayer();
                }}
              />
            ) : (
              ""
            )}
          </SelectType>
          <BookingWrap>
            <div className="selectLocation">
              <SelectInput
                departure={departure}
                destination={destination}
                onClick={() => {
                  openLayer();
                  openModal();
                }}
              >
                <input placeholder={departure === "" ? "출발지" : departure} />
                <img src="./images/map-locator.png" alt="place" />
                <LocationLayer
                  data={data}
                  departure={departure}
                  setDeparture={setDeparture}
                  layer={layer}
                  setLayer={setLayer}
                  modal={modal}
                  destination={destination}
                  setDestination={setDestination}
                  endDate={endDate}
                />
              </SelectInput>
              <SelectInput>
                <input placeholder={destination === "" ? "도착지" : destination} />
                <img src="./images/map-locator.png" alt="place" />
              </SelectInput>
            </div>
            <div className="date">
              {type === "oneWay" ? <TypeOneway /> : <TypeRoundTrip />}
              <a href="#none" />
              <Calendar startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
            </div>
            <Passenger
              numOfAdult={numOfAdult}
              numOfInfant={numOfInfant}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
            />
          </BookingWrap>
        </div>
        <ButtonWrap>
          <button>예매하기</button>
        </ButtonWrap>
      </MainBooking>
    </>
  );
}

export default BookingModal;

const MainBooking = styled.div`
  position: absolute;
  top: ${(props) => (props.modal === true ? "90px" : "580px")};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1200px;
  z-index: 100;
  transition: all 0.6s;
`;

const SelectType = styled.ul`
  display: flex;
  width: 120px;
  border-radius: 15px;

  li {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 32px;
    text-align: center;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    button {
      width: 60px;
      height: 30px;
      font-size: 14px;
      color: white;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
    }
    .selectedButton {
      font-size: 14px;
      font-weight: 800;
      color: white;
      border-color: #579015;
      background-color: #579015;
    }
  }
`;

const ModalClose = styled.img.attrs(() => ({
  src: "./images/cancel.png",
  alt: "cancel",
}))`
  position: absolute;
  right: 0;
  width: 27px;
  height: 27px;
  filter: invert(100%);
  cursor: pointer;
`;

const BookingWrap = styled.div`
  display: flex;
  margin: 10px auto 0;
  padding: 25px 40px 0px;
  width: 1200px;
  height: 110px;
  border-radius: 15px;
  background-color: white;
  background: url("//contents-image.twayair.com/homepage/images/main/bg_main_booking.png") no-repeat 0 0;

  .selectLocation {
    display: flex;
  }
  .date {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    height: 47px;
    margin-top: 15px;
    border-bottom: 1px solid #b3b3b3;
    text-align: center;

    span {
      margin: 0 5px;
    }
    a {
      display: inline-block;
      position: absolute;
      bottom: 7px;
      right: 0;
      width: 26px;
      height: 26px;
      background-image: url(./images/date.png);
      background-repeat: no-repeat;
      background-size: 22px;
    }
  }
`;

const SelectInput = styled.div`
  margin-top: 10px;

  input {
    width: 240px;
    padding: 20px 35px 10px;
    margin-left: 15px;
    border-bottom: 1px solid #b3b3b3;
    font-size: 18px;
    outline: none;
    background-image: url(./images/flight.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position-y: 17px;
  }

  img {
    position: relative;
    right: 20px;
    bottom: -7px;
    width: 20px;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 20px;
  text-align: right;

  button {
    width: 170px;
    height: 50px;
    padding: 10px 40px;
    border: 1px solid ${({ theme }) => theme.Color.maincolorred};
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    line-height: 1.1;
    color: white;
    background-color: ${({ theme }) => theme.Color.maincolorred};
    outline: none;
  }
`;
