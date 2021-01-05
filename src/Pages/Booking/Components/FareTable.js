import React from "react";
import styled from "styled-components";

const FareTable = () => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>항공 운임</th>
            <th>유류할증료</th>
            <th>공항시설 사용료</th>
            <th>총 결제 금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KRW 19,800</td>
            <td>KRW 0</td>
            <td>KRW 8,000</td>
            <td>KRW 27,800</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default FareTable;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;

  table {
    width: 100%;
    thead {
      display: table-header-group;
      vertical-align: middle;
      th {
        padding: 20px 14px;
        font-size: 16px;
        font-weight: normal;
        color: #4d4d4d;
        text-align: center;
        vertical-align: middle;
        letter-spacing: -1px;
        border-bottom: 1px solid #e0e0e0;
        background-color: #f5f5f5;
      }
    }
    tbody {
      tr {
        td {
          padding: 20px 14px;
          font-size: 16px;
          color: #1a1a1a;
          text-align: center;
          vertical-align: middle;
          line-height: 24px;
          letter-spacing: -1px;
          border-right: 1px solid #e0e0e0;
          background-color: #fff;
        }
      }
    }
  }
`;
