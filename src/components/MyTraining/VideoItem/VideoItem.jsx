import styles from "./VideoItem.module.css";

function VideoItem(props) {
  return (
    <div className={styles.content}>
      <video className={styles.video} width="400px" height="400px" controls>
        <source src={props.source} type={props.type} />
      </video>
      <p className={styles.title}>
        نام حرکت:
        <span> {props.title}</span>
      </p>
      <p className={styles.category}>
        دسته بندی:
        <span> {props.category}</span>
      </p>
    </div>
  );
}

export default VideoItem;
