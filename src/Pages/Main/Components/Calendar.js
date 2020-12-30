import React, { useState } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "moment/locale/ko";
import { DayPickerRangeController } from "react-dates";

function Calendar({ startDate, setStartDate, endDate, setEndDate }) {
  const [focusedInput, setFocusedInput] = useState();
  return (
    <DateCalendar>
      <div className="calendarHeader">
        <div>구간1</div>
        <div>구간2</div>
        <div>총운임</div>
      </div>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        numberOfMonths={2}
        monthFormat={"YYYY.MM"}
        noBorder
        daySize={70}
        navPrev={
          <NavButton>
            <PrevMonth />
          </NavButton>
        }
        navNext={
          <NavButton>
            <NextMonth />
          </NavButton>
        }
      />
      <ButtonWrap>
        <button className="resetButton">다른 출발일 선택</button>
        <button className="confirm">확인</button>
      </ButtonWrap>
    </DateCalendar>
  );
}

export default Calendar;

const DateCalendar = styled.section`
  position: absolute;
  top: 70px;
  right: -360px;
  display: block;
  margin: 0 auto;
  padding: 40px 70px;
  width: 1200px;
  background-color: #fff;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  box-shadow: 1px 1px 15px #ccc;
  box-sizing: border-box;
  z-index: 35;
  :before {
    display: inline-block;
    content: "";
    position: absolute;
    top: -10px;
    right: 480px;
    width: 20px;
    height: 11px;
    background: url(//contents-image.twayair.com/homepage/images/common/tooltip_layer_top.png) no-repeat 0 0;
  }

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .calendarHeader {
    display: flex;
    position: absolute;
    width: 100%;
    height: 72px;
    top: 0px;
    left: 0px;
    padding: 16px 68px;
    background-color: #ebf2e4;
    div {
      width: 33.3%;
    }
  }
  .DayPicker {
    margin-top: 40px;
    outline: none;
  }
  .CalendarDay {
    border: none;
    font-size: 18px;
    line-height: 32px;
  }

  .CalendarDay__default {
    padding-top: 3px;
    height: 65px;
    vertical-align: top;
    text-align: center;
    border-bottom: 1px solid #eaeaea;
  }
  .CalendarDay__default:hover {
    background: none;
  }
  .CalendarMonth_caption {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0 50px;
  }
  .DayPicker_weekHeader {
    padding: 10px 0 10px 14px !important;
    height: 30px;
    font-size: 13px;
    font-weight: bold;
    color: #1a1a1a;
    text-align: center;
    vertical-align: middle;
    background-color: #eaeaea;
    border-right: 0;
  }
  .CalendarDay__firstDayOfWeek {
    color: red;
    font-weight: bold;
  }
  .CalendarDay__lastDayOfWeek {
    color: red;
    font-weight: bold;
  }
`;

const NavButton = styled.div`
  width: 30px;
  height: 50px;
  z-index: 100;
`;

const PrevMonth = styled(NavButton)`
  position: absolute;
  left: -30px;
  bottom: -335px;
  background-image: url(./images/left-arrow.png);
  background-size: 30px;
  background-repeat: no-repeat;
`;

const NextMonth = styled(NavButton)`
  position: absolute;
  bottom: -335px;
  right: -30px;
  background-image: url(./images/right-arrow.png);
  background-size: 30px;
  background-repeat: no-repeat;
`;

const ButtonWrap = styled.div`
  position: relative;
  bottom: 20px;
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  text-align: center;
  line-height: 1.5;
  .resetButton {
    display: inline-block;
    padding: 12px 20px;
    min-width: 80px;
    min-height: 46px;
    color: #1a1a1a;
    background-color: #f5f5f5;
    border: 1px solid #1a1a1a;
    font-size: 16px;
    border-radius: 3px;
    outline: none;
  }
  .confirm {
    position: inline-block;
    border: 0;
    padding: 12px 20px;
    min-width: 80px;
    min-height: 46px;
    margin-left: 5px;
    color: #fff;
    background-color: #d22c26;
    font-size: 16px;
    border-radius: 3px;
    outline: none;
  }
`;
