import Logo from "../assets/LogoToDo.svg";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} />
    </div>
  );
};
