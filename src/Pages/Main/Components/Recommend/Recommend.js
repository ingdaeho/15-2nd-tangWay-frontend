import React, { useState, useEffect } from "react";
import FlightSlide from "./FlightSlide";
import FlightList from "./FlightList";
import styled from "styled-components";

function Recommend({ listMode, setListMode }) {
  const [recommendSalesData, setRecommendSalesData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.7:8000/flight/flight_image`)
      .then((res) => res.json())
      .then((res) => setRecommendSalesData(res.FLIGHT));
  }, []);

  return (
    <RecommendFlight>
      <div className="goodsHead">
        <h2>추천 항공편</h2>
        <SwitchIcon>
          <button className={listMode === "List" && "selectedButton"} onClick={() => setListMode("List")}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/1827/1827914.svg" alt="list" />
          </button>
          <button className={listMode === "Slide" && "selectedButton"} onClick={() => setListMode("Slide")}>
            <img src="https://www.flaticon.com/svg/static/icons/svg/847/847582.svg" alt="slide" />
          </button>
        </SwitchIcon>
      </div>
      <FlightSlide listMode={listMode} recommendSalesData={recommendSalesData} />
      <FlightList listMode={listMode} recommendSalesData={recommendSalesData} />
    </RecommendFlight>
  );
}

export default Recommend;

const RecommendFlight = styled.section`
  width: 100%;
  padding: 50px 0px;
  background-color: ${({ theme }) => theme.Color.backgroundgray};
  text-align: center;

  .goodsHead {
    display: flex;
    justify-content: center;
    position: relative;
    width: 1200px;
    margin: 0 auto 50px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
    }
  }
`;

const SwitchIcon = styled.div`
  display: flex;
  position: absolute;
  right: 0;

  button {
    width: 41px;
    height: 42px;
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => (props.listMode === "Slide" ? "black" : "#b0b0b0")};
    outline: none;
  }
  .selectedButton {
    border: 1px solid black;
    img {
      filter: invert(0);
    }
  }

  img {
    padding: 2px;
    width: 26px;
    filter: invert(50%);
    cursor: pointer;
  }
`;
