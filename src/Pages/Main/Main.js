import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import BookingModal from "./Components/BookingModal/BookingModal";
import Service from "./Components/Service";
import Recommend from "./Components/Recommend/Recommend";
import Notice from "./Components/Notice";
import styled from "styled-components";
import { API } from "../../config";

function Main() {
  const [data, setData] = useState([]);
  const [listMode, setListMode] = useState("Slide");
  const [focusedInput, setFocusedInput] = useState("startDate");
  const [modalConditions, setModalConditions] = useState({
    mainPageModal: false,
    modalLayer: false,
    calendar: false,
    journeyType: "oneWay",
  });

  useEffect(() => {
    fetch(`${API}/flight/country`)
      .then((res) => res.json())
      .then((res) => setData(res.countrys));
  }, []);

  useEffect(() => {
    listMode === "Slide" ? setListMode("Slide") : setListMode("List");
  }, [listMode]);

  return (
    <>
      {modalConditions.mainPageModal && <OpenModal />}
      <MainSection>
        <Header />
        <BookingModal
          data={data}
          modalConditions={modalConditions}
          setModalConditions={setModalConditions}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
        />
      </MainSection>
      <Service />
      <Recommend listMode={listMode} setListMode={setListMode} />
      <Notice />
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
