import React from "react";
import styled from "styled-components";
import theme from "../../Styles/theme";
import { twayInfo } from "./FooterInfo";

function Footer() {
  return (
    <FooterLayout>
      <FooterTop>
        <SpanWrapper>
          <RevCenter>탕웨이 항공 예약 센터</RevCenter>
          <PhoneNum>8888 - 8686</PhoneNum>
          <span>07:00 ~ 19:00</span>
        </SpanWrapper>
        <IconWrraper>
          {[...Array(3)].map((el, idx) => {
            return <i key={idx} className="fas fa-user-circle" />;
          })}
          {/* 나중에 다른 아이콘으로 교체 */}
        </IconWrraper>
      </FooterTop>
      <FooterMid>
        <Wrapper>
          {twayInfo.info1.map((el, idx) => {
            return (
              <MidContentWrapper key={idx} index={idx}>
                <MidTitle>{el.title}</MidTitle>
                <MidContent>{el.back}</MidContent>
                <MidContent>{el.front}</MidContent>
              </MidContentWrapper>
            );
          })}
        </Wrapper>
      </FooterMid>
      <FooterBottom>
        <Logo alt="footerLogo" src="./images/logo.png" />
        {twayInfo.info2.map((el, idx) => {
          return (
            <div>
              <BottomContent>{el.front}</BottomContent>
              <BottomContent>{el.back}</BottomContent>
            </div>
          );
        })}
      </FooterBottom>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.backGroundGray};
  ${({ theme }) => theme.flex.center}
  flex-direction: column;
  height: 460px;
`;

const FooterTop = styled.div`
  width: 1200px;
  height: 70px;
  margin: 20px;
  padding: 20px;
  ${({ theme }) => theme.flex.SB}
`;

const SpanWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 15px;
  }
`;

const IconWrraper = styled.div`
  display: flex;
  align-items: center;

  i {
    padding: 15px;
    font-size: 40px;
    color: red;
  }
`;

const RevCenter = styled.span`
  border: 1px solid ${({ theme }) => theme.color.backGroundGray};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backGroundGray};
  text-align: center;
  font-size: 14px;
`;

const PhoneNum = styled.span`
  font-weight: 600;
  font-size: 25px;
  color: red;
`;

const FooterMid = styled.div`
  width: 100%;
  height: 240px;
  ${theme.flex.center}
  background-color: white;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-evenly;
`;

const MidContentWrapper = styled.div`
  width: 100%;
  padding-left: 70px;
  line-height: 50px;
  border-right: ${(props) => (props.index === 2 ? "none" : "1px solid gray")};
`;

const MidTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const MidContent = styled.p`
  font-size: 17px;
`;

const FooterBottom = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
`;

const BottomContent = styled(MidContent)`
  font-size: 20px;
`;
