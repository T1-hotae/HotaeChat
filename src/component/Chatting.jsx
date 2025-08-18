import ChatBubble from "./ChatBubble";
import styles from "./Chatting.module.css";
import { ChatStateProvider } from "../App";
import { useContext } from "react";

const Chatting = () => {
  const chatData = useContext(ChatStateProvider);

  return (
    <div className={styles.Chatting}>
      {chatData.map((chat) => (
        <ChatBubble
          key={chat.id}
          text={chat.text}
          date={chat.date}
          focus={focus}
        />
      ))}
    </div>
  );
};

export default Chatting;
