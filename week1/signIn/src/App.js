import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import InputForm from "./InputForm";
import Modal from "./Modal/Modal";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [ageMessage, setAgeMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [nameSuccess, setNameSuccess] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [ageSuccess, setAgeSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [confirmPasswordSuccess, setConfirmPasswordSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameSuccess(false);
    setEmailSuccess(false);
    setAgeSuccess(false);
    setPasswordSuccess(false);
    setConfirmPasswordSuccess(false);

    if (typeof name !== "string" || !name) {
      setNameMessage("필수 입력 항목입니다!");
    } else {
      setNameMessage("멋진 이름이네요!");
      setNameSuccess(true);
    }

    if (typeof email !== "string" || !email.includes("@")) {
      setEmailMessage("올바른 이메일 형식이 아닙니다!");
    } else {
      setEmailMessage("올바른 이메일 형식입니다!");
      setEmailSuccess(true);
    }

    if (!age || isNaN(parseInt(age))) {
      setAgeMessage("나이는, 숫자를 입력받아야 합니다.");
    } else if (parseInt(age) < 0) {
      setAgeMessage("나이는, 음수가 될 수 없습니다.");
    } else if (parseInt(age) < 19) {
      setAgeMessage("우리 영화 사이트는 19세 이상만 가입 가능합니다.");
    } else {
      setAgeMessage("올바른 나이 형식입니다!");
      setAgeSuccess(true);
    }

    if (typeof password !== "string" || !password) {
      setPasswordMessage("비밀번호를 입력하세요.");
    } else if (password.length < 4) {
      setPasswordMessage("비밀번호는 4자리 이상이어야 합니다.");
    } else if (password.length > 12) {
      setPasswordMessage("비밀번호는 12자리까지 가능합니다.");
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,12}$/.test(
        password
      )
    ) {
      setPasswordMessage(
        "비밀번호는 영어, 숫자, 특수문자를 조합하여야 합니다."
      );
    } else {
      setPasswordMessage("올바른 비밀번호입니다!");
      setPasswordSuccess(true);
    }

    if (!confirmPassword || password !== confirmPassword) {
      setConfirmPasswordMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordMessage("비밀번호가 일치합니다!");
      setConfirmPasswordSuccess(true);
    }

    if (
      nameSuccess &&
      emailSuccess &&
      ageSuccess &&
      passwordSuccess &&
      confirmPasswordSuccess
    ) {
      openModal();
    }
  };

  return (
    <div className={styles.full_screen}>
      <div className={styles.wrapper}>
        <h1>회원가입</h1>
        <div className={styles.inputDiv}>
          <InputForm
            label="이름"
            type="text"
            value={name}
            onChange={handleNameChange}
            message={nameMessage}
            success={nameSuccess}
          />
          <InputForm
            label="이메일"
            type="text"
            value={email}
            onChange={handleEmailChange}
            message={emailMessage}
            success={emailSuccess}
          />
          <InputForm
            label="나이"
            type="text"
            value={age}
            onChange={handleAgeChange}
            message={ageMessage}
            success={ageSuccess}
          />
          <InputForm
            label="비밀번호"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            message={passwordMessage}
            success={passwordSuccess}
          />
          <InputForm
            label="비밀번호확인"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            message={confirmPasswordMessage}
            success={confirmPasswordSuccess}
          />
        </div>
        <div>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            가입하기
          </button>
        </div>
      </div>

      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;
