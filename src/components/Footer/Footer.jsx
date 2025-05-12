import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.management}>
        تمامی حقوق این سایت متعلق به
        <a href="#home"> احمد علیزاده </a>
        می باشد.
      </p>
      <p className={styles.designer}>
        <a href={"http://fatimasinayi.com/"} target="_blank">
          طراح سایت فاطیما سینایی
        </a>
      </p>
    </footer>
  );
}

export default Footer;
