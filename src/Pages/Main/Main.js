import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import BookingModal from "./Components/BookingModal/BookingModal";
import Service from "./Components/Service";
import Recommend from "./Components/Recommend/Recommend";
import Notice from "./Components/Notice";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

function Main() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [layer, setLayer] = useState(false);
  const [type, setType] = useState("oneWay");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [numOfAdult, setNumOfAdult] = useState(1);
  const [numOfInfant, setNumOfInfant] = useState(0);
  const [listMode, setListMode] = useState("Slide");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  console.log(data);
  useEffect(() => {
    fetch("/config/main.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  useEffect(() => {
    listMode === "Slide" ? setListMode("Slide") : setListMode("List");
  }, [listMode]);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openLayer = () => {
    setLayer(true);
  };

  const closeLayer = () => {
    setLayer(false);
  };

  const resetState = () => {
    if (departure !== "") {
      setDeparture("");
    }
  };

  const handlePlus = (e) => {
    const { name } = e.currentTarget;
    if (name === "adult") {
      return setNumOfAdult(numOfAdult + 1);
    }
    if (name === "infant") {
      return setNumOfInfant(numOfInfant + 1);
    }
  };

  const handleMinus = (e) => {
    const { name } = e.currentTarget;
    if (name === "adult") {
      return setNumOfAdult(numOfAdult - 1);
    }
    if (name === "infant") {
      return setNumOfInfant(numOfInfant - 1);
    }
  };

  // const selectRoute = (e) => {
  //   const filterList = data.area.map((item) => {
  //     if (item.title === e.target.innerText) {
  //       return data.area[e.target.id];
  //     }
  //   });
  //   setRouteList(filterList);
  //   console.log(data.area[e.target.id]);
  //   console.log(filterList);
  // };
  // console.log(routeList);

  return (
    <>
      {modal && <OpenModal />}
      <MainSection>
        <Header />
        {/* <img /> */}
        <BookingModal
          data={data}
          modal={modal}
          layer={layer}
          setLayer={setLayer}
          openLayer={openLayer}
          closeLayer={closeLayer}
          openModal={openModal}
          closeModal={closeModal}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          type={type}
          setType={setType}
          numOfAdult={numOfAdult}
          numOfInfant={numOfInfant}
          departure={departure}
          setDeparture={setDeparture}
          destination={destination}
          setDestination={setDestination}
          resetState={resetState}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </MainSection>
      <Service data={data} />
      <Recommend listMode={listMode} setListMode={setListMode} />
      <Notice data={data} />
      <Footer />
    </>
  );
}

export default Main;

const MainSection = styled.section`
  width: 100%;
  height: 830px;
  background-image: url(https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80);
  background-repeat: no-repeat;
  background-position: 50% 0;
`;

const OpenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 30;
  transition: all 0.6s;
  background-color: rgba(0, 0, 0, 0.5);
`;
