import styles from "./InputNumberA.module.css";

function InputNumberA({ id, name, label, min, max, error, ...rest }) {
  return (
    <div className={styles.inputnumber}>
      <label htmlFor={id}>
        {label}
        <input
          type="number"
          name={name}
          id={id}
          min={min}
          max={max}
          {...rest}
        />
      </label>
      <div className={styles.error}>{error && <p>{error}</p>}</div>
    </div>
  );
}

export default InputNumberA;
