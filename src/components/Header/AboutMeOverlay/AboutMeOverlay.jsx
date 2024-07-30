import styles from "./AboutMeOverlay.module.css";

import Card from "../../Card/Card";
function AboutMeOverlay(props) {
  return (
    <Card className={`${styles.aboutme} ${styles[props.class]}`}>
      <a
        href="#documentations"
        onClick={() => {
          props.hideAboutMeHandler();
        }}
      >
        مدارک من
      </a>
      <a
        href="#competitions"
        onClick={() => {
          props.hideAboutMeHandler();
        }}
      >
        مسابقات من
      </a>
    </Card>
  );
}

export default AboutMeOverlay;
