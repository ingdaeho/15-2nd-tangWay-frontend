import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setNumOfAdult, setNumOfInfant } from "../../../../store/actions";

function PassengerNum() {
  const dispatch = useDispatch();
  const numOfAdult = useSelector((store) => store.bookingReducer.numOfAdult);
  const numOfInfant = useSelector((state) => state.bookingReducer.numOfInfant);

  const handlePlus = (e) => {
    const { name } = e.currentTarget;
    if (name === "adult") {
      return dispatch(setNumOfAdult(numOfAdult + 1));
    }
    if (name === "infant") {
      return dispatch(setNumOfInfant(numOfInfant + 1));
    }
  };

  const handleMinus = (e) => {
    const { name } = e.currentTarget;
    if (name === "adult") {
      return dispatch(setNumOfAdult(numOfAdult - 1));
    }
    if (name === "infant") {
      return dispatch(setNumOfInfant(numOfInfant - 1));
    }
  };

  return (
    <Container>
      {PassengerType.map((data) => {
        const buttonType = data.id === 1 ? "adult" : data.id === 2 ? "infant" : "child";
        return (
          <PersonQuantity key={data.id}>
            <p>{data.type}</p>
            <div>
              <button
                name={buttonType}
                onClick={(e) => handleMinus(e)}
                disabled={data.id === 1 ? numOfAdult < 2 : numOfInfant < 1}
              >
                <img src="./images/minus.png" alt="minus" />
              </button>
              <input type="number" value={data.id === 1 ? numOfAdult : data.id === 2 ? numOfInfant : 0} />
              <button name={buttonType} onClick={(e) => handlePlus(e)}>
                <img src="./images/add.png" alt="add" />
              </button>
            </div>
          </PersonQuantity>
        );
      })}
    </Container>
  );
}

export default PassengerNum;

const Container = styled.section`
  ${({ theme }) => theme.flex.center}
  justify-content: space-around;
  width: 320px;
  height: 60px;
`;

const PersonQuantity = styled.div`
  p {
    margin: 10px 0;
    font-size: 14px;
    color: #4c4c4c;
    text-align: center;
  }

  div {
    margin: 0 auto;
    text-align: center;

    button {
      display: inline-block;
      width: 15px;
      padding: 0;
      vertical-align: middle;
      background-color: white;
      outline: none;

      img {
        width: 12px;
      }
    }

    input {
      padding: 0;
      margin: 0 5px;
      width: 30px;
      height: 30px;
      font-size: 18px;
      color: #4c4c4c;
      border: 0;
      text-align: center;
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;

const PassengerType = [
  {
    id: 1,
    type: "성인",
  },
  {
    id: 2,
    type: "소아",
  },
  {
    id: 3,
    type: "유아",
  },
];
