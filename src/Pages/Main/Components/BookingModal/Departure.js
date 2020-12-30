import React from "react";
import styled from "styled-components";

function Departure({ data, setDeparture }) {
  return (
    <SelectDeparture>
      {data.area &&
        data.area[0].destination.map((list, idx) => {
          return (
            <li id={list.id} key={idx} onClick={() => setDeparture(list.kor)}>
              {list.kor}
              <span>{list.eng}</span>
            </li>
          );
        })}
    </SelectDeparture>
  );
}

export default Departure;

const SelectDeparture = styled.ul`
  li {
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
    padding: 0 60px 0 20px;
    border-radius: 5px;
    background-color: #f2f2f2;
    font-size: 16px;
    color: ${({ theme }) => theme.Color.fontcolorblack};
    line-height: 40px;
    cursor: pointer;

    span {
      float: right;
      width: 5%;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
  }
`;
