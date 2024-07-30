import styles from "./Legal.module.css";
import HomeLogo from "../../components/HomeLogo/HomeLogo";
function Legal() {
  return (
    <div className={styles.legal}>
      <HomeLogo />
      <div className={styles.content}>
        <h4>قوانین:</h4>
        <ul className={styles.list}>
          <li>در پر کردن اطلاعات دقت کنید.</li>
          <li>برنامه شما با توجه به اطلاعات وارد شده تنظیم می شود.</li>
          <li>
            پرداخت وجه به منزله اتمام عملیات است و امکان کنسل کردن نوبت و یا
            بازگشت وجه وجود ندارد.
          </li>
          <li>
            در نوبت حضوری در صورت بروز مشکل حتما یک روز از قبل اطلاع دهید.
          </li>

          <li>زمان آماده سازی برنامه ها بین 4 تا 10 روز کاری می باشد.</li>
          <li>
            برنامه پس از آماده شدن به تلگرام وارد شده در فرم اطلاعات ارسال می
            شود
          </li>
          <li>
            در صورت هر نوع سوال در مورد نوبت ها و برنامه ها میتوانید با پشتیبانی
            هماهنگ کنید.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Legal;
