import React from "react";
import styled from "styled-components";

const BookingBtn = () => {
  return (
    <Wrapper>
      <PreBtn>이전 단계</PreBtn>
      <NextBtn>다음 단계</NextBtn>
    </Wrapper>
  );
};

export default BookingBtn;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0;
  list-style: none;
`;

const Button = styled.button`
  padding: 17px 40px;
  width: 170px;
  height: 60px;
  font-size: 20px;
  text-align: center;
  line-height: 1.1;
  border-radius: 3px;
  cursor: pointer;
`;

const PreBtn = styled(Button)`
  color: #1a1a1a;
  background-color: #fff;
  border: 1px solid #b0b0b0;
`;

const NextBtn = styled(Button)`
  color: #fff;
  background-color: #d22c26;
  border: 1px solid #d22c26;
  margin-left: 30px;
`;
