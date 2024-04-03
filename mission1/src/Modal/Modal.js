import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h1 className={styles.modalTitle}>가입 성공!</h1>
        <p className={styles.modalContent}>UMC 챌린저 가입을 축하합니다!!!</p>
        <div className={styles.closeDiv}>
          <button className={styles.closeBtn} onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
