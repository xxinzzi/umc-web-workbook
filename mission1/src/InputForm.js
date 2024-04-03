import React from "react";
import styles from "./InputForm.module.css";

const InputForm = ({ label, type, value, onChange, message, success }) => {
  return (
    <div className={styles.inputForm}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        className={styles.inputField}
        type={type}
        value={value}
        onChange={onChange}
      />
      <div className={styles.messageDiv}>
        <span
          className={`${styles.message} ${
            success === true ? styles.success : styles.error
          }`}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default InputForm;
