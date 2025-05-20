import styles from "./TextAreaA.module.css";

function TextAreaA({ error }) {
  return (
    <div className={styles.content}>
      <textarea
        name="message"
        id="message"
        placeholder="توضیحات اضافه ..."
      ></textarea>
      <div className={styles.error}>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default TextAreaA;
