import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ leftChild, rightChild }) => {
  const nav = useNavigate();
  const onLeftClick = () => {
    switch (leftChild) {
      case "arrow_back":
        return nav(-1);
    }
  };
  return (
    <header className={styles.Header}>
      <button className="material-icons" onClick={onLeftClick}>
        {leftChild}
      </button>
      <button className="material-icons">{rightChild}</button>
    </header>
  );
};

export default Header;
