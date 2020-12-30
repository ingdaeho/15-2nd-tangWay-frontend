import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Notice({ data }) {
  return (
    <NoticeSection>
      <div className="headerWrap">
        <h2>공지사항</h2>
        <Link to="#" />
      </div>
      <div className="noticeList">
        <ul>
          {data.Notices?.map((el, idx) => {
            return (
              <NoticeContent key={idx} id={el.id}>
                <p>{el.title}</p>
                <p className="date">{el.date}</p>
              </NoticeContent>
            );
          })}
        </ul>
      </div>
    </NoticeSection>
  );
}

export default Notice;

const NoticeSection = styled.section`
  display: inline-block !important;
  padding: 50px 0;
  width: 100%;

  .headerWrap {
    position: relative;
    margin: 0 auto;
    width: 1200px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
    }

    a {
      position: absolute;
      right: 0;
      top: 0;
      width: 39px;
      height: 39px;
      border: 1px solid #cccccc;
      background-image: url(https://www.flaticon.com/svg/static/icons/svg/864/864380.svg);
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }

  .noticeList {
    margin: 50px auto 0;
    width: 1200px;
  }
`;

const NoticeContent = styled.li`
  padding: 40px;
  width: 384px;
  height: 180px;
  margin: 0 24px 0 0;
  border: 1px solid #ccc;
  float: left;
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }

  p {
    margin-bottom: 40px;
    height: 50px;
    font-size: 20px;
    line-height: 30px;
  }

  .date {
    font-size: 16px;
    color: #4d4d4d;
  }
`;
