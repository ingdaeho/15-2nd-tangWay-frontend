import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonBlock from "./Components/SignupBlock/ButtonBlock";
import SignupBlock from "./Components/SignupBlock/SignupBlock";
import Header from "../../Components/Header/Header";
import "./Signup.scss";
import { SignupApi } from "../../config";
import SignupLayout from "./SignupLayout";

function SignUp() {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState({ password: "", validation: true });
  const [checkPw, setCheckPw] = useState(true);
  const [userName, setUserName] = useState({ korName: "", engName: "" });
  const [userGender, setUserGender] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [userBirthday, setUserBirthday] = useState({ year: "", month: "", date: "" });
  const [maleClicked, setMaleClicked] = useState(false);
  const [femaleClicked, setFemaleClicked] = useState(false);

  const sendUserData = () => {
    fetch(SignupApi, {
      method: "POST",
      body: JSON.stringify({
        country: "대한민국",
        date_of_birth: userBirthday.year + userBirthday.month + userBirthday.date,
        email: userId,
        english_name: userName.engName,
        korean_name: userName.korName,
        password: userPw.password,
        phone_number: userPhoneNum,
        gender: userGender,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.MESSAGE === "SUCCESS") {
          alert("가입 완료");
          history.push("/login");
        }
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "userId") {
      const checkLang = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      value.length > 0 && checkLang.test(value) ? setUserId("") : setUserId(value);
    }
    if (name === "userPw") {
      checkPwValidation(value)
        ? setUserPw({ password: value, validation: true })
        : setUserPw({ password: value, validation: false });
    }
    if (name === "checkPw") {
      userPw.password === value ? setCheckPw(true) : setCheckPw(false);
    }
    if (name === "korName") {
      setUserName({ ...userName, korName: value });
    }
    if (name === "engName") {
      setUserName({ ...userName, engName: value.toUpperCase() });
    }
    if (name === "userPhoneNum") {
      setUserPhoneNum(value);
    }
  };

  const makeBirthday = (e) => {
    const { value } = e.target;
    const subValue = value.substring(0, value.length - 1);

    if (value.includes("년")) {
      setUserBirthday({ ...userBirthday, year: subValue });
    }
    if (value.includes("월")) {
      setUserBirthday({ ...userBirthday, month: `${subValue}` });
    }
    if (value.includes("일")) {
      setUserBirthday({ ...userBirthday, date: `${subValue}` });
    }
  };

  const handleClick = (e) => {
    const { name } = e.target;
    e.preventDefault();
    setUserGender(name);
    if (name === "male") {
      setMaleClicked(true);
      setFemaleClicked(false);
    }
    if (name === "female") {
      setMaleClicked(false);
      setFemaleClicked(true);
    }
  };

  const checkIdValidation = (userEmailId) => {
    var checkemail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    return checkemail.test(userEmailId);
  };

  const checkPwValidation = (userPwInput) => {
    var checkPwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;

    return checkPwValidation.test(userPwInput);
  };

  const checkEmailId = (e) => {
    e.preventDefault();
    setUserId(document.getElementsByClassName("userIdInput")[0].value);
    checkIdValidation(userId) ? alert("사용가능한 아이디입니다.") : alert("아이디 형식이 잘못 되었습니다.");
  };

  const makeBigArr = (startNum, endNumber, unit) => {
    const numArr = [];

    for (let i = startNum; i <= endNumber; i++) {
      i < 10 ? numArr.push("0" + i + unit) : numArr.push(i + unit);
    }
    return numArr;
  };

  return (
    <>
      <Header />
      <SignupLayout sendUserData={sendUserData}>
        <form className="signUpInfoContainer">
          <ul>
            <SignupBlock handleChange={handleChange} checkEmailId={checkEmailId} userPw={userPw} checkPw={checkPw} />
            <ButtonBlock
              handleClick={handleClick}
              makeBirthday={makeBirthday}
              makeBigArr={makeBigArr}
              maleClicked={maleClicked}
              femaleClicked={femaleClicked}
              checkEmailId={checkEmailId}
            />
          </ul>
        </form>
      </SignupLayout>
    </>
  );
}

export default SignUp;
