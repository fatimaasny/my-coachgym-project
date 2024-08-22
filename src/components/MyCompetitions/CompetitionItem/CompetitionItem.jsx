import styles from "./CompetitionItem.module.css";

function CompetitionItem(props) {
  return (
    <div className={styles.item}>
      <div>
        <img src={props.source} alt={props.alt} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.degree}>{props.degree}</p>
      </div>
    </div>
  );
}

export default CompetitionItem;
