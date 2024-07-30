import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.management}>
        تمامی حقوق این سایت متعلق به مدیریت باشگاه پرشین،
        <a href="#home"> احمد علیزاده </a>
        می باشد.
      </p>
      <p className={styles.designer}>
        <Link to={"/"}>طراح سایت فاطیما سینایی</Link>
      </p>
    </footer>
  );
}

export default Footer;
