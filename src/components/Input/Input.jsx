import styles from "./Input.module.css";

function Input({ label, id, name, error, placeholder, ...rest }) {
  return (
    <div
      className={
        id === "message" ? styles["form-textarea"] : styles["form-input"]
      }
    >
      <label htmlFor={id}>{label}</label>
      {id === "message" ? (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          {...rest}
        ></textarea>
      ) : (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          {...rest}
        />
      )}
      <div className={styles.error}>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default Input;
