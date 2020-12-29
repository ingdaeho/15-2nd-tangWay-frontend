import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";

const BASE_YEAR = 1950;
const THIS_YEAR = new Date().getFullYear();
const REGEX_PHONE = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
const NationArr = ["대한민국", "중국", "일본", "대만", "베트남", "태국", "홍콩", "필리핀"];

function AccordionPassengerInfoWrap({ data, onChange }) {
  const [years, setYears] = useState([]);
  const [monthes, setMonthes] = useState([]);
  const [days, setDays] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nationInput, setNationInput] = useState("");
  const [male, setMaleGender] = useState("");
  const [female, setFemaleGender] = useState("");

  useEffect(() => {
    initYears();
    initMonth();
    initDays();
  }, []);

  const initYears = () => {
    const years = [];
    for (let year = BASE_YEAR; year <= THIS_YEAR; year++) {
      years.push(year);
    }
    setYears(years);
  };

  const initMonth = () => {
    const monthes = [];
    for (let month = 1; month <= 12; month++) {
      monthes.push(month);
    }
    setMonthes(monthes);
  };

  const initDays = (date) => {
    const now = moment(date);
    const endOfMonth = moment(now).daysInMonth();
    const days = [];
    for (let day = 1; day <= endOfMonth; day++) {
      days.push(day);
    }
    setDays(days);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChangeNation = (e) => {
    const newData = {
      ...data,
      english_name: e.target.value,
    };
    onChange(newData);
  };

  const handleChangeEnName = (e) => {
    const newData = {
      ...data,
      english_name: e.target.value,
    };
    onChange(newData);
  };

  const handleChangeYear = (e) => {
    const newData = {
      ...data,
    };
    newData["data_of_birth"] = moment(newData["data_of_birth"]).set("Y", e.target.value).format("YYYYMMDD");
    onChange(newData);
  };

  const handleChangeMonth = (e) => {
    const date = moment(data["data_of_birth"])
      .set("M", e.target.value - 1)
      .format("YYYYMMDD");
    const newData = {
      ...data,
      data_of_birth: date,
    };
    initDays(date);
    onChange(newData);
  };

  const handleChangeDay = (e) => {
    const newData = {
      ...data,
    };
    newData["data_of_birth"] = moment(newData["data_of_birth"]).set("D", e.target.value).format("YYYYMMDD");
    onChange(newData);
  };

  const handleChangeEmail = (e) => {
    const newData = {
      ...data,
      email: e.target.value,
    };
    onChange(newData);
  };

  const handleChangePhone = (e) => {
    const rawPhoneNumber = String(e.target.value).replace(/-/gi, "");

    const newData = {
      ...data,
      phone_number: rawPhoneNumber.replace(REGEX_PHONE, "$1-$2-$3"),
    };
    onChange(newData);
  };

  const getNation = (e) => {
    const { id } = e.currentTarget;
    const newData = {
      ...data,
      nation: id,
    };
    onChange(newData);
    console.log(newData);
  };
  const getNationInput = (e) => {
    const { value } = e.currentTarget;
    setNationInput(value);
  };

  const gotoGenderChange = (e) => {
    const { value } = e.target;
    if (value === "male") {
      setMaleGender(!male);
      setFemaleGender(false);
    } else {
      setFemaleGender(!female);
      setMaleGender(false);
    }
    const newData = {
      ...data,
      gender: value,
    };
    onChange(newData);
  };

  return (
    <AccordionPassengerInfoBox>
      <AccordionPassengerInfoBoxHeader>
        <SeletedBox>
          <i className="fa-check-circle far" />
          <button>회원 본인 탑승 제외</button>
        </SeletedBox>
        <span>* 은 필수 입력 항목 입니다.</span>
      </AccordionPassengerInfoBoxHeader>

      <Table>
        <tbody>
          <tr>
            <th>성별 </th>
            <td>
              <button className={male ? "maleChange" : "male"} name="gender" value="male" onClick={gotoGenderChange}>
                남
              </button>
              <button
                className={female ? "femaleChange" : "female"}
                name="gender"
                value="female"
                onClick={gotoGenderChange}
              >
                여
              </button>
              <button className="buttonInfo">탑승자 정보 불러오기</button>
            </td>
          </tr>
          <tr>
            <th>국적</th>

            <td className="countrySearch">
              <input type="text" name="nation" value={data.nation || ""} onChange={getNationInput} />
              <button
                className="buttonCountrySearch"
                onClick={(e) => {
                  handleChangeNation(e);
                  handleOpenModal();
                }}
              >
                국적 검색
              </button>
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <input type="text" name="english_name" value={data.english_name || ""} onChange={handleChangeEnName} />
              <span>신분증에 기재된 이름과 일치해야합니다. 영문으로 예약시, 여권을 지참하시기 바랍니다</span>
            </td>
          </tr>
          <tr>
            <th>생년월일</th>
            <td>
              <select
                onChange={handleChangeYear}
                name="data_of_birth"
                value={moment(data.data_of_birth || "").get("Y")}
              >
                {years.map((year, idx) => {
                  return (
                    <option key={idx} value={year}>
                      {year}년
                    </option>
                  );
                })}
              </select>
              <select onChange={handleChangeMonth}>
                {monthes.map((month, idx) => {
                  return (
                    <option key={idx} value={month}>
                      {month}월
                    </option>
                  );
                })}
              </select>
              <select onChange={handleChangeDay}>
                {days.map((day, idx) => {
                  return (
                    <option key={idx} value={day}>
                      {day}일
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input type="email" name="email" value={data.email || ""} onChange={handleChangeEmail} />
            </td>
          </tr>
          <tr>
            <th>휴대전화</th>
            <td>
              <input type="text" name="phone_number" value={data.phone_number || ""} onChange={handleChangePhone} />
            </td>
          </tr>
        </tbody>
      </Table>
      {showModal ? (
        <Modal>
          <div className="modal__overlay" onClick={handleCloseModal}></div>
          <ModalContainer>
            <ModalHeader>
              <h2>지역검색</h2>
              <span onClick={handleCloseModal}>❌</span>
            </ModalHeader>
            <SearchBox>
              <div>
                <input type="text" placeholder="리스트에서 거주 지역을 선택하거나 직접 입력하시오." />
                <button>검색</button>
              </div>
            </SearchBox>
            <SerachContent>
              <ul>
                {NationArr.map((nation, index) => {
                  return (
                    <Li>
                      <label id={nation} onChange={getNation} className="radio">
                        <input type="radio" onChange={getNationInput} value={nationInput} name="nation" />
                        {nation}
                        <span></span>
                      </label>
                    </Li>
                  );
                })}
              </ul>
            </SerachContent>
            <SerachButton>
              <Button name="check" onClick={handleCloseModal}>
                확인
              </Button>
              <Button onClick={handleCloseModal} color={100}>
                취소
              </Button>
            </SerachButton>
          </ModalContainer>
        </Modal>
      ) : (
        ""
      )}
    </AccordionPassengerInfoBox>
  );
}

export default AccordionPassengerInfoWrap;

const AccordionPassengerInfoBox = styled.div`
  padding: 40px;
  width: inherit;
`;

const AccordionPassengerInfoBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #000;
`;

const SeletedBox = styled.div`
  i {
    font-size: 20px;
    color: #dadada;
  }
  button {
    margin-left: 10px;
    font-size: 16px;
    background-color: transparent;
  }
`;
const Table = styled.table`
  width: 1100px;
  tr {
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dadada;
    th {
      width: 100px;
    }
    .countrySearch {
      display: flex;
      align-items: center;
    }
    td {
      padding: 0 20px;
      select {
        width: 180px;
        height: 52px;
        margin-right: 5px;
      }
      button {
        width: 100px;
        height: 52px;
        background-color: #fff;
        border: 1px solid #dadada;
        outline: none;
      }
      .male {
        border-radius: 5px 0 0 5px;
      }
      .maleChange {
        border-radius: 5px 0 0 5px;
        background-color: #7d756d;
        border-color: #7d756d;
      }
      .female {
        border-radius: 0px 5px 5px 0px;
      }
      .femaleChange {
        border-radius: 0px 5px 5px 0px;
        background-color: #7d756d;
        border-color: #7d756d;
      }
      .buttonInfo {
        margin-left: 10px;
        width: 200px;
        border-radius: 5px;
      }
      .buttonCountrySearch {
        border-radius: 5px;
        margin-left: 5px;
      }
      input {
        border: 1px solid #dadada;
        width: 240px;
        height: 50px;
        outline: none;
      }
      span {
        display: block;
        font-size: 14px;
        color: #d22c26;
        margin-top: 5px;
      }
    }
  }
`;

const Modal = styled.div`
  box-shadow: 0 5px 8px #414141;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal__overlay {
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  top: 0px;
  box-shadow: 0 5px 8px #414141;
  background: #fff;
  width: 700px;
  height: 650px;
  border-radius: 10px;
`;

const ModalHeader = styled.div`
  width: inherit;
  height: 90px;
  border-bottom: 1px solid #dadada;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  font-size: 20px;
  font-weight: 700;
  h2 {
    font-size: 26px;
  }
  span {
    cursor: pointer;
  }
`;
const SearchBox = styled.div`
  width: 640px;
  height: 86px;
  margin: 0 auto;
  margin-bottom: 60px;
  div {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    margin: 20px 0 60px;
    input {
      width: 500px;
      height: 46px;
      margin-right: 10px;
      border: 1px solid #dadada;
      padding-left: 20px;
      &::placeholder {
        font-size: 16px;
      }
    }
    button {
      padding: 15px 30px;
      color: #fff;
      background-color: #7d756d;
      border-color: #7d756d;
      border-radius: 3px;
    }
  }
`;

const SerachContent = styled.div`
  width: 640px;
  height: 274px;
  margin: 0 auto;
  border: 1px solid #ccc;
  overflow-y: scroll;
`;

const Li = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  position: relative;
  margin-left: 20px;

  .radio {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;

    input[type="radio"] {
      display: none;
    }
    span {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 3px solid #00aeef;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      &::after {
        content: "";
        height: 8px;
        width: 8px;
        background-color: #00aeef;
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: 300ms ease-in-out 0s;
      }
    }
    input[type="radio"]:checked ~ span::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
const SerachButton = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 150px;
  padding: 20px 30px;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
  color: ${(props) => (props.color === 100 ? "#000" : "#fff")};
  background-color: ${(props) => (props.color === 100 ? "#fff" : "#d22c26")};
  border: 1px solid ${(props) => (props.color === 100 ? "#dadada" : "#d22c26")};
`;
