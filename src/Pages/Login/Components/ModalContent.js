import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import theme from "../../../Styles/theme";
import { modalButtonData } from "../Data/Data";

export default function ModalContent({ setModalState }) {
  const history = useHistory();

  const logout = () => {
    if (localStorage.getItem("access_token")) {
      localStorage.removeItem("access_token");
      alert("로그아웃 성공!");
      history.push("/login");
    } else {
      history.push("/login");
    }
  };

  return (
    <ModalContentTop>
      <CloseButton onClick={() => setModalState(false)}>x</CloseButton>
      <Text primary>강경오 고객님</Text>
      <Text>티웨이항공 홈페이지를 방문해 주셔서 대단히 감사합니다.</Text>
      <ModalButtonWrapper>
        <div>
          {modalButtonData.ModalButtons.map((el, idx) => {
            return (
              <ModalButton
                key={idx}
                name={el.name}
                text={el.text}
                onClick={el.name === "logoutBtn" ? () => logout() : console.log()}
              >
                {el.text}
              </ModalButton>
            );
          })}
        </div>
      </ModalButtonWrapper>
      <ModalBottomWrapper>
        <p>여행사/소셜커머스/예약센터/공항에서 예약한 내역을 조회 가능(일부 여행사 또는 그룹항공권 조회 불가)</p>
        <button>예약조회</button>
      </ModalBottomWrapper>
    </ModalContentTop>
  );
}

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 30px;
  position: absolute;
  right: 30px;
  top: -40px;
  background-color: #ffffff;
`;

const ModalContentTop = styled.div`
  width: 100%;
  ${theme.flexcenter};
  margin-top: 62px;
  position: relative;
  flex-direction: column;
`;

const Text = styled.p`
  width: 500px;
  text-align: center;
  padding: 7px;
  font-size: 24px;
  font-weight: ${(props) => (props.primary ? "700" : "350")};
  line-height: 30px;
`;

const ModalButtonWrapper = styled.div`
  width: 500px;
  padding-bottom: 50px;
  ${theme.flexcenter};
  justify-content: space-around;
  border-bottom: 1px solid ${theme.backGroundGray};
`;

const ModalButton = styled.button`
  width: ${(props) => (props.name === "logoutBtn" ? "500px" : "240px")};
  height: 60px;
  margin: 9px;
  background-color: ${(props) => (props.name === "logoutBtn" ? `${theme.mainColorRed}` : "white")};
  color: ${(props) => (props.name === "logoutBtn" ? "white" : "black")};
  border: ${(props) => (props.name === "logoutBtn" ? "none" : `1px solid ${theme.backGroundGray}`)};
  border-radius: 5px;
  font-size: 22px;
`;

const ModalBottomWrapper = styled.div`
  width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  p {
    width: 260px;
    margin-right: 70px;
    font-size: 16px;
    line-height: 20px;
  }

  button {
    width: 100px;
    height: 60px;
    background-color: ${theme.mainColorRed};
    color: #ffffff;
    border-radius: 5px;
    font-size: 16px;
  }
`;
