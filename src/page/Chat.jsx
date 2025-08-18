import Chatting from "../component/Chatting";
import Header from "../component/Header";
import ChatInput from "../component/ChatInput";
import styles from "./Chat.module.css";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState("");
  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  return (
    <div className={styles.Chat}>
      <Header leftChild="arrow_back" rightChild="settings" />
      <Chatting />
      <ChatInput onChangeChat={onChangeChat} />
    </div>
  );
};

export default Chat;
