import styles from "./MyDocuments.module.css";

import Title from "../Title/Title";
import Item from "./Item/Item";

import imgDoc2 from "../../images/doc2.png";
import imgDegree3 from "../../images/degree3.png";

function MyDocuments() {
  return (
    <>
      <a id="documentations"></a>
      <div className={styles.documents}>
        <a id="documentations"></a>
        <Title title="مدارک من" className={styles.title} />
        <div className={styles.content}>
          <Item image={imgDegree3} title="مدرک درجه3" date="تابستان 1395" />
          <Item image={imgDoc2} title="مدرک درجه2" date="پاییز 1398" />
        </div>
      </div>
    </>
  );
}

export default MyDocuments;
