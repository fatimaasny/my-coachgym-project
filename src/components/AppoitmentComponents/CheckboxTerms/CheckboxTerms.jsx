import styles from "./CheckboxTerms.module.css";
import { Link } from "react-router-dom";

function CheckboxTerms({ error }) {
  return (
    <div className={styles.terms}>
      <div className={styles.content}>
        <input type="checkbox" name="terms" id="terms" />
        <Link to={"/legal"}>تمامی قوانین سایت را می پذیرم.</Link>
      </div>
      <div className={styles.error}>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default CheckboxTerms;
