import styles from "./Title.module.css";

function Title(props) {
  return (
    <div className={`${styles.title} ${props.className}`}>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Title;
