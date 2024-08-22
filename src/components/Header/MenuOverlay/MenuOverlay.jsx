import styles from "./MenuOverlay.module.css";
import Navbar from "../Navbar/Navbar";

import { IoClose } from "react-icons/io5";

function MenuOverlay(props) {
  return (
    <div className={`${styles.menu} ${props.isMenuOverlay ? styles.show : ""}`}>
      <button className={styles.btnclose} onClick={props.hideMenuOverlay}>
        <IoClose fontSize="2rem" color="#fff" />
      </button>
      <Navbar class="colnavbar" />
    </div>
  );
}

export default MenuOverlay;
