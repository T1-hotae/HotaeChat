import styles from "./Title.module.css";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const nav = useNavigate();
  return (
    <div className={styles.Home}>
      <p className={styles.loginInfo}>로그인이 필요합니다.</p>
      <h1 className={styles.title}>HOTAE CHAT</h1>
      <button
        type="button"
        onClick={() => nav("/chat")}
        className={styles.btnChat}
      >
        채팅방 들어가기
      </button>
    </div>
  );
};

export default Title;
