import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BookingHeader() {
  return (
    <Header>
      <div className="HeaderContainer">
        <div>
          <img src="./images/tang.png" alt="tomato" />
        </div>
        <div>
          <ul>
            {BookingHeaderList?.map((el, index) => {
              return (
                <Li key={index}>
                  <i className={el.icon}></i>
                  <Link>{el.title} </Link>
                </Li>
              );
            })}
          </ul>
        </div>
      </div>
    </Header>
  );
}

export default BookingHeader;

const BookingHeaderList = [
  {
    id: 1,
    title: "한국",
  },
  {
    id: 2,
    title: "한국어",
  },
  {
    id: 3,
    icon: "far fa-user",
  },
  {
    id: 4,
    icon: "fas fa-search",
  },
  {
    id: 5,
    icon: "fas fa-bars",
  },
];

const Header = styled.header`
  border-bottom: 1px solid #e3e3e3;
  .HeaderContainer {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    & div:nth-child(1) {
      img {
        width: 200px;
        height: 100px;
        object-fit: cover;
      }
    }
    & div:nth-child(2) {
      margin-top: 20px;
      display: flex;
      ul {
        display: flex;
      }
    }
  }
`;

const Li = styled.li`
  padding: 0 20px;
  i {
    font-size: 24px;
    color: #000;
  }
  &:nth-child(1),
  &:nth-child(2) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      right: -7px;
      width: 1px;
      height: 15px;
      background-color: #d8d8d8;
    }
    a {
      color: #000;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        right: -13px;
        top: 10px;
        width: 8px;
        height: 5px;
        background: url("https://res.kurly.com/pc/ico/1908/ico_down_8x5.png") no-repeat 0 0;
      }
    }
  }
`;
