import styles from "./InfoItem.module.css";

function InfoItem(props) {
  return (
    <div className={styles["info-item"]}>
      {props.icon}
      <p>{props.title}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default InfoItem;
