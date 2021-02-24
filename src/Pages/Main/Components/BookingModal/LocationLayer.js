import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DestinationLayer from "./DestinationLayer";

function LocationLayer({ data, modalConditions, setModalConditions }) {
  const departure = useSelector((store) => store.bookingReducer.departure);
  const [activeID, setActiveID] = useState(0);

  const activeIdHandler = (idx) => {
    setActiveID(idx);
  };

  return (
    <LayerWrap modalLayer={modalConditions.modalLayer} departure={departure}>
      <h3>지역</h3>
      <AreaList>
        <ul>
          {data &&
            data.map((list, idx) => (
              <li onClick={() => activeIdHandler(idx)} key={idx} id={list.id} className={idx === activeID ? "on" : ""}>
                {list.name}
              </li>
            ))}
        </ul>
      </AreaList>
      <DestinationLayer
        activeID={activeID}
        data={data}
        modalConditions={modalConditions}
        setModalConditions={setModalConditions}
      />
    </LayerWrap>
  );
}

export default LocationLayer;

const LayerWrap = styled.section`
  display: ${(props) => (props.modalLayer ? "block" : "none")};
  position: absolute;
  top: 142px;
  left: ${(props) => (props.departure ? "300px" : "40px")};
  padding: 30px 15px 35px 40px;
  width: 750px;
  background-color: #fff;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  box-shadow: 1px 1px 15px #ccc;
  z-index: 35;
  :before {
    display: inline-block;
    content: "";
    position: absolute;
    top: -11px;
    left: 37px;
    width: 20px;
    height: 11px;
    background: url(//contents-image.twayair.com/homepage/images/common/tooltip_layer_top.png) no-repeat 0 0;
  }

  h3 {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const AreaList = styled.div`
  display: inline-block;
  padding: 12px;
  width: 293px;
  height: 465px;
  background-color: ${({ theme }) => theme.color.backGroundGray};
  border-radius: 5px;
  ul {
    li {
      display: block;
      padding: 10px 60px 10px 20px;
      margin-bottom: 5px;
      width: 100%;
      min-height: 40px;
      font-size: 16px;
      color: #1a1a1a;
      line-height: 1.2;
      cursor: pointer;
    }
    .on {
      background: url(./images/right-arrow-angle.png) #fff no-repeat 94% 50%;
      background-size: 12px;
      border: 1px solid ${({ theme }) => theme.color.mainRed};
      border-radius: 5px;
    }
  }
`;
