import styles from "./HomeLogo.module.css";
import { Link } from "react-router-dom";

function HomeLogo() {
  return (
    <Link to={"/"}>
      <h1 className={styles.logo}>AHMAD</h1>
    </Link>
  );
}

export default HomeLogo;
