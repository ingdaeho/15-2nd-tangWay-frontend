import React from "react";
import styled from "styled-components";
import FareTable from "./Components/FareTable";
import PaymentMethod from "./Components/PaymentMethod";
import SectionInfo from "./Components/SectionInfo";

const Payment = () => {
  return (
    <Wrapper>
      <SectionInfo />
      <FareInformationTitle>
        <h3>운임 정보</h3>
      </FareInformationTitle>
      <FareTable />
      <PaymentMethodTitle>
        <h3>결제 수단</h3>
      </PaymentMethodTitle>
      <PaymentMethod />
    </Wrapper>
  );
};

export default Payment;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1200px;
`;

const PageTitle = styled.div`
  margin: 60px 0 25px 0;

  h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 30px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

const PaymentMethodTitle = styled(PageTitle)``;

const FareInformationTitle = styled(PageTitle)``;
