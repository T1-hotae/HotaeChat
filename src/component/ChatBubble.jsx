import styles from "./ChatBubble.module.css";

const ChatBubble = () => {
  return (
    <div className={styles.ChatBubble}>
      <div class={styles.chatTime}>오전 11:15</div>
      <div class={styles.chatBody}>안</div>
    </div>
  );
};

export default ChatBubble;
