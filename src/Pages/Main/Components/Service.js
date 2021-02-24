import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "../../../config";

function Service() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch(`${API}/flight/service`)
      .then((res) => res.json())
      .then((res) => setServiceData(res.SERVICE));
  }, []);

  return (
    <ServiceSection>
      <h2>부가서비스 & 제휴서비스</h2>
      <div className="serviceList">
        {serviceData.map((item, idx) => (
          <div>
            <ServiceContent key={idx}>
              <img src={item.image} alt="service" />
              <p>{item.name}</p>
            </ServiceContent>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}

export default Service;

const ServiceSection = styled.section`
  width: 100%;
  padding: 50px 0px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }
  .serviceList {
    display: flex;
    width: 1224px;
    margin: 50px auto 20px;
    div {
      :hover {
        position: relative;
        height: 245px;
        bottom: 10px;
      }
    }
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 200px;
  margin: 0 12px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    position: absolute;
    background-color: ${({ theme }) => theme.color.mainRed};
    transition: height 0.2s ease-out, top 0.2s ease-out, left 0.2s ease-out;
    p {
      color: white;
    }
  }
  img {
    width: 100px;
    margin-top: 27px;
  }

  p {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
`;
