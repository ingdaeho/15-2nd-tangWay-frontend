import React from "react";
import styled from "styled-components";

const PAYMENT_METHOD = [
  { id: 1, title: "국내신용카드", img: "https://contents-image.twayair.com/homepage/images/payment_icon/CCES.png" },
  { id: 2, title: "해외신용카드", img: "https://contents-image.twayair.com/homepage/images/payment_icon/CCEB.png" },
  { id: 3, title: "무통장 입금", img: "https://contents-image.twayair.com/homepage/images/payment_icon/DBKR.png" },
  { id: 4, title: "실시간계좌이체", img: "https://contents-image.twayair.com/homepage/images/payment_icon/ETAT.png" },
  { id: 5, title: "티웨이페이", img: "https://contents-image.twayair.com/homepage/images/payment_icon/EPTW.png" },
];

const PaymentMethod = () => (
  <Wrapper>
    <ul>
      {PAYMENT_METHOD.map((item) => {
        return (
          <li>
            <div>
              <section>
                <img src={item.img} alt="" />
              </section>
              <span>{item.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  </Wrapper>
);

export default PaymentMethod;

const Wrapper = styled.div`
  padding: 40px 40px 30px 40px;
  border: 1px solid #ccc;

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    li {
      margin-left: 10px;
      margin-bottom: 10px;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 213px;
        height: 115px;
        font-size: 16px;
        color: #1a1a1a;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding-top: 10px;
        cursor: pointer;
        span {
          margin: 10px 0;
        }
      }
    }
  }
`;
