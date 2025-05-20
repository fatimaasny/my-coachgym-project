import styles from "./InputAppointment.module.css";

function InputAppointment({ id, name, label, error, ...rest }) {
  return (
    <div className={styles.content}>
      <div className={styles["form-input"]}>
        <label htmlFor={id}>{label} </label>
        <input id={id} type="text" name={name} {...rest} />
      </div>
      <div className={styles.error}> {error && <p>{error}</p>}</div>
    </div>
  );
}

export default InputAppointment;
