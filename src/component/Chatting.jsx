import ChatBubble from "./ChatBubble";
import styles from "./Chatting.module.css";

const Chatting = () => {
  return (
    <div className={styles.Chatting}>
      <ChatBubble />
    </div>
  );
};

export default Chatting;
