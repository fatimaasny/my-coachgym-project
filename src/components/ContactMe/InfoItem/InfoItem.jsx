import styles from "./InfoItem.module.css";
import { Link } from "react-router-dom";

function InfoItem(props) {
  return (
    <div className={styles["info-item"]}>
      {props.icon}
      <p>{props.title}</p>
      {props.url ? (
        <Link to={props.url} target="_blank">
          <p>{props.text}</p>
        </Link>
      ) : (
        <p>{props.text}</p>
      )}
    </div>
  );
}

export default InfoItem;
