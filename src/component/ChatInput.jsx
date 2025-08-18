import { useState, useContext, useEffect, useRef } from "react";
import styles from "./ChatInput.module.css";
import { ChatProvider } from "../App";

const ChatInput = () => {
  //채팅 상태 값
  const [chat, setChat] = useState("");
  const onChangeChat = (e) => {
    setChat(e.target.value);
  };

  //전송을 했을 때 onCreateChat으로 넘겨주기
  const onCreateChat = useContext(ChatProvider);
  const onSubmit = () => {
    const date = new Date().getTime();
    if (chat) {
      onCreateChat(chat, date);
      setChat("");
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  //Enter 누르면 채팅 포커스
  const inputRef = useRef(null);

  // 전역에서 Enter 감지해서 input focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.Input}>
      <div className={styles.option}>
        <p>+</p>
      </div>

      <input
        ref={inputRef}
        value={chat}
        type="text"
        className={styles.chatInput}
        placeholder="채팅을 입력하세요."
        onChange={onChangeChat}
        onKeyDown={onKeyDown}
      />
      <div className={styles.sendIcon} onClick={onSubmit}>
        <p className="material-icons">send</p>
      </div>
    </div>
  );
};

export default ChatInput;
