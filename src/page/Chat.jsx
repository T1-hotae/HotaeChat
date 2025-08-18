import Chatting from "../component/Chatting";
import Header from "../component/Header";
import ChatInput from "../component/ChatInput";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.Chat}>
      <Header leftChild="arrow_back" rightChild="settings" />
      <Chatting />
      <ChatInput />
    </div>
  );
};

export default Chat;
