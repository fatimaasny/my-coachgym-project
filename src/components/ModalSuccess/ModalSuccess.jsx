import { createPortal } from "react-dom";
import styles from "./ModalSuccess.module.css";

function ModalSuccess({ dialogRef }) {
  return createPortal(
    <dialog ref={dialogRef} className={styles.modal}>
      <p>اطلاعات مورد نظر با موفقیت ارسال شد.</p>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ModalSuccess;
