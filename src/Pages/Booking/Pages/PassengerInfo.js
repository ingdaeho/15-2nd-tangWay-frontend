import React, { useEffect, useState } from "react";
import PassengerInfoAccordion from "./PassengerInfoAccordion";
import PassengerInfoWarning from "./PassengerInfoWarning";
import styled from "styled-components";

function PassengerInfo({ modal, setModal }) {
  const [active, setActive] = useState("");
  const [passengerInputList, setPassengerInputList] = useState([]);

  /* get 이용해서 data 받아오기 */
  const getPassengerList = () => {
    // API로부터 탑승객 데이터 받고
    // setPassengerInputList()

    const copyMap = dummyList.filter((el) => {
      return el.data_of_birth === "" ? (el.data_of_birth = "2021") : "";
    });
    console.log(dummyList);

    setPassengerInputList(dummyList || []);
  };
  useEffect(() => {
    getPassengerList();
  }, []);

  const goToPayment = () => {
    console.log(passengerInputList);
  };

  const handleChangePassengerInfo = (index, data) => {
    const newList = [...passengerInputList];
    newList[index] = data;
    setPassengerInputList(newList);
  };
  console.log(passengerInputList);
  return (
    <PassengerInfoInput>
      <div className="passengerTitle">
        <h2>탑승자 정보</h2>
        <p>신분증에 기재된 이름, 생년월일을 작성하세요.</p>
      </div>
      {passengerInputList.map((passenger, index) => (
        <PassengerInfoAccordion
          key={index}
          data={passenger}
          onChange={(data) => handleChangePassengerInfo(index, data)}
          active={active}
          title={passenger.title}
          setActive={setActive}
        />
      ))}

      {/* {passengerInputList.map((passenger, index) => {
        return <PassengerInfoAccordion key={index} title={passenger.title} active={active} setActive={setActive} />;
      })} */}
      <PassengerInfoButton>
        <Button>이전 단계</Button>
        <Button color={100} onClick={goToPayment}>
          다음 단계
        </Button>
      </PassengerInfoButton>
      {/* Get & Post   */}
      <PassengerInfoWarning />
    </PassengerInfoInput>
  );
}

export default PassengerInfo;

const dummyList = [
  {
    id: 1,
    title: "김찬영",
    name: "김찬영",
    english_name: "ChanYoung",
    email: "rhdlwmal1234@naver.com",
    phone_number: "01075283320",
    data_of_birth: "19940630",
    nation: "Korean",
    gender: "male",
  },
  {
    id: 2,
    title: "성인1",
    name: "",
    english_name: "",
    email: "",
    phone_number: "",
    data_of_birth: "",
    nation: "",
    gender: "",
  },
  {
    id: 3,
    title: "성인2",
    name: "",
    english_name: "",
    email: "",
    phone_number: "",
    data_of_birth: "",
    nation: "",
    gender: "",
  },
];

const PassengerInfoInput = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  .passengerTitle {
    border-bottom: 1px solid #dadada;
    padding-bottom: 15px;
    h2 {
      font-size: 41px;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
  }
`;
const PassengerInfoButton = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 170px;
  height: 60px;
  margin-right: 10px;
  border: 1px solid #dadada;
  font-size: 20px;
  color: ${(props) => (props.color === 100 ? "#fff" : "#000")};
  background-color: ${(props) => (props.color === 100 ? "#d22c26" : "#fff")};
`;
