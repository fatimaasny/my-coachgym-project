import styles from "./Item.module.css";
import Card from "../../Card/Card";

function Item(props) {
  return (
    <Card className={styles.item}>
      <img src={props.image} alt="doc.png" />
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <p className={styles.para}>فدراسیون بدنسازی ایران</p>
        <p className={styles.date}>{props.date}</p>
      </div>
    </Card>
  );
}

export default Item;
