import React from "react";
import styled from "styled-components";

function FlightList({ listMode, recommendSalesData }) {
  return (
    <ListMode listMode={listMode}>
      <ul>
        {recommendSalesData?.map((flight, idx) => {
          return (
            <ListGoods key={idx} id={flight.id}>
              <span className="date">{flight.date.slice(5, 10).replace("-", ".")}</span>
              <Route>
                <span>{flight.depart}</span>
                <img src="https://www.flaticon.com/svg/static/icons/svg/481/481127.svg" alt="arrow" />
                <span>{flight.arrive}</span>
              </Route>
              <Price>
                <span>KRW</span>
                <p>{Number(flight.price).toLocaleString()}</p>
              </Price>
              <span className="sectionInfo">편도 총액</span>
            </ListGoods>
          );
        })}
      </ul>
    </ListMode>
  );
}

export default FlightList;

const ListMode = styled.section`
  display: ${(props) => (props.listMode === "List" ? "inline-block" : "none")};
  width: 1200px;
`;

const ListGoods = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  margin: 0 0 15px 0;
  border-radius: 5px;
  width: 590px;
  height: 75px;
  text-align: center;
  color: white;
  background-color: #808080;
  float: left;
  :nth-child(2n) {
    margin-left: 20px;
  }
  .date {
    position: relative;
    padding: 0 18px;
    width: 90px;
    font-size: 18px;

    ::after {
      display: inline-block;
      content: "";
      position: absolute;
      top: 0px;
      right: -3px;
      width: 1px;
      height: 16px;
      background-color: #c0c0c0;
    }
  }

  .sectionInfo {
    width: 90px;
    margin: 0 auto;
    padding-left: 20px;
    font-size: 18px;
  }
`;

const Route = styled.div`
  display: flex;
  align-items: center;
  width: 275px;
  font-size: 18px;

  span {
    position: relative;
    width: 105px;
    margin: 0 10px;

    :last-child {
      ::after {
        display: inline-block;
        content: "";
        position: absolute;
        top: 0px;
        right: -3px;
        width: 1px;
        height: 16px;
        background-color: #c0c0c0;
      }
    }
  }

  img {
    height: 24px;
    filter: invert(100%);
  }
`;

const Price = styled.div`
  position: relative;
  width: 100px;

  span {
    font-size: 12px;
  }

  p {
    font-size: 18px;
  }
  ::after {
    display: inline-block;
    content: "";
    position: absolute;
    top: 8px;
    right: -3px;
    width: 1px;
    height: 16px;
    background-color: #c0c0c0;
  }
`;
