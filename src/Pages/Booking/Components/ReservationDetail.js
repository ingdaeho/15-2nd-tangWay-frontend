import React from "react";
import styled from "styled-components";

const ReservationDetail = ({ item }) => {
  return (
    <li>
      <Bar>
        <i className="fas fa-plane-departure"></i>
        <strong>{item.section}</strong>
      </Bar>
      <Detail>
        <Date>
          <span>2021-01-18(월)</span>
        </Date>
        <Info>
          <Departure>
            <strong>GMP</strong>
            <span>서울/김포</span>
          </Departure>
          <Exp>
            <div>
              <span>06:40 ~ 07:50 / </span>
              <span>01h 10m</span>
            </div>
            <img src="http://contents-image.twayair.com/homepage/images/booking/bg_service_exp.png" alt="bg_service" />
            <div>
              <span>TW701 |</span>
              <span> 직항</span>
            </div>
          </Exp>
          <Arrival>
            <strong>CJU</strong>
            <span>제주</span>
          </Arrival>
        </Info>
      </Detail>
    </li>
  );
};

export default ReservationDetail;

const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px 5px 0 0;
  background-color: #f5f5f5;

  i {
    color: #d32d29;
  }

  strong {
    margin: 12px;
    font-weight: 700;
  }
`;

const Detail = styled.section`
  position: relative;
  height: 125px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px auto;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  strong {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
  }
  span {
    font-size: 16px;
    color: #1a1a1a;
  }
`;

const Exp = styled.div`
  width: 310px;
  font-size: 14px;
  text-align: center;
  img {
    width: 300px;
    margin-bottom: 12px;
  }
`;

const Date = styled.div`
  position: absolute;
  top: 42%;
  left: 8%;
`;

const Departure = styled(Div)``;

const Arrival = styled(Div)``;
