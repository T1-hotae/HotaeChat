import styles from "./ChatBubble.module.css";

const ChatBubble = ({ text, date }) => {
  return (
    <div className={styles.ChatBubble}>
      <div className={styles.chatBody}>
        <div className={styles.chatInfo}>
          <div className={styles.chatRead}>1</div>
          <div className={styles.chatTime}>
            {new Date(date).toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>

        <div className={styles.chatText}>{text}</div>
      </div>
    </div>
  );
};

export default ChatBubble;
