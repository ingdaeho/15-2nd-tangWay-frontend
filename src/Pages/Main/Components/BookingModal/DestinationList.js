import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setDestination, setDeparture } from "../../../../store/actions";

function DestinationList({ data, setLayer, setOpenCalendar, activeID }) {
  const dispatch = useDispatch();
  const departure = useSelector((store) => store.bookingReducer.departure);

  return (
    <>
      {data &&
        data[activeID]?.airports.map((list, idx) => {
          return (
            <List
              id={list.id}
              key={idx}
              onClick={
                departure
                  ? () => {
                      dispatch(setDestination(list.korean_name));
                      setLayer(false);
                      setOpenCalendar(true);
                    }
                  : () => dispatch(setDeparture(list.korean_name))
              }
            >
              {list.korean_name}
              <EngCityCode>{list.english_name}</EngCityCode>
            </List>
          );
        })}
    </>
  );
}

export default DestinationList;

const List = styled.li`
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
  list-style-type: none;
  cursor: pointer;
`;
const EngCityCode = styled.span`
  float: right;
  width: 5%;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
