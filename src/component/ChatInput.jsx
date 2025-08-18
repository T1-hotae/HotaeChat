import styles from "./ChatInput.module.css";

const Input = () => {
  return (
    <div className={styles.Input}>
      <div className={styles.option}>
        <p>+</p>
      </div>

      <input
        type="text"
        className={styles.chatInput}
        placeholder="채팅을 입력하세요."
      />
      <div className={styles.sendIcon}>
        <p className="material-icons">send</p>
      </div>
    </div>
  );
};

export default Input;
