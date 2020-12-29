import React, { useState } from "react";
import styled from "styled-components";

function PassengerInfoWarning() {
  const [mode, setMode] = useState(false);

  const modeChange = () => {
    setMode(!mode);
  };

  return (
    <Warning>
      <Header>
        <h3>알아두세요</h3>
        <span onClick={modeChange}>
          {mode ? (
            <img
              className="open"
              src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png"
              alt="arrow"
            ></img>
          ) : (
            <img src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png" alt="arrow"></img>
          )}
        </span>
      </Header>
      {mode ? (
        <WarningDesc>
          <ul>
            {warningTextList?.map((el, index) => {
              return <li key={index}>{el.text}</li>;
            })}
          </ul>
        </WarningDesc>
      ) : null}
    </Warning>
  );
}

export default PassengerInfoWarning;

const warningTextList = [
  {
    id: 1,
    text: "탑승자명은 신분증(여권)과 동일하게 입력하여 주시기 바랍니다.",
  },
  {
    id: 2,
    text: "국문 성명이 적혀있는 신분증(주민등록증, 운전면허증 등) 지참 시, 국문 탑승자 명으로 입력하시기 바랍니다.",
  },
  {
    id: 3,
    text: "국내선을 예약하는 외국인(외국 여권)의 경우 영문 성명으로 입력하여 주시기 바랍니다.",
  },
  {
    id: 4,
    text: "결제 후 탑승자명 변경은 동일 발음에 한하여 철자 변경이 가능하며 수수료가 부과됩니다.",
  },
  {
    id: 5,
    text: "여권상의 성함에 하이픈(-)이 있는 경우, 띄어쓰기로 대체하여 입력해주시기 바랍니다.",
  },
];

const Warning = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dadada;
  height: 82px;
  h3 {
    padding-left: 40px;
  }
  span {
    margin-right: 40px;
    cursor: pointer;
  }
  img.open {
    transform: rotate(180deg);
  }
`;
const WarningDesc = styled.div`
  ul {
    border: 1px solid #dadada;
    height: 353px;
    li {
      margin-top: 20px;
      padding: 5px 30px 0px 40px;
    }
  }
`;
