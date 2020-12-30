import React from "react";
import styled from "styled-components";
const PassengerType = [
  {
    id: 1,
    type: "성인",
  },
  {
    id: 2,
    type: "소아",
  },
];

function PassengerNum({ numOfAdult, numOfInfant, handlePlus, handleMinus }) {
  return (
    <Container>
      {PassengerType.map((data) => {
        return (
          <PersonQuantity key={data.id}>
            <p>{data.type}</p>
            <div>
              <button
                name={data.id === 1 ? "adult" : "infant"}
                onClick={(e) => handleMinus(e)}
                disabled={data.id === 1 ? numOfAdult < 2 : numOfInfant < 1}
              >
                <img src="./images/minus.png" alt="minus" />
              </button>
              <input type="number" value={data.id === 1 ? numOfAdult : numOfInfant} />
              <button name={data.id === 1 ? "adult" : "infant"} onClick={(e) => handlePlus(e)}>
                <img src="./images/add.png" alt="add" />
              </button>
            </div>
          </PersonQuantity>
        );
      })}
      <PersonQuantity>
        <p>유아</p>
        <div>
          <button>
            <img src="./images/minus.png" alt="minus" />
          </button>
          <input type="number" value={0} />
          <button>
            <img src="./images/add.png" alt="add" />
          </button>
        </div>
      </PersonQuantity>
    </Container>
  );
}

export default PassengerNum;

const Container = styled.section`
  display: flex;
  align-items: center;
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
