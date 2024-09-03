import styles from "./Appointment.module.css";
import { Link } from "react-router-dom";

import HomeLogo from "../../components/HomeLogo/HomeLogo";
import Button from "../../components/Button/Button";

function Appointment() {
  return (
    <div className={styles.appointment}>
      <HomeLogo />
      <div className={styles.content}>
        <h2 className={styles.title}>فرم سفارش برنامه:</h2>
        <form className={styles.form}>
          <label className={styles["form-input"]} htmlFor="fullName">
            نام و نام خانوادگی
            <input id="fullName" type="text" />
          </label>

          <label className={styles["form-input"]} htmlFor="phone">
            شماره تماس
            <input id="phone" type="text" />
          </label>
          <label className={styles["form-input"]} htmlFor="telegram">
            شماره تلگرام
            <input id="telegram" type="text" />
          </label>
          <div className={styles.gender}>
            <p>جنسیت :</p>
            <label htmlFor="female">
              خانم
              <input type="radio" name="gender" id="female" value="" />
            </label>

            <label htmlFor="male">
              آقا
              <input type="radio" name="gender" id="male" value="" />
            </label>
          </div>

          <div className={styles.reserve}>
            <p>رزرو نوبت :</p>
            <label htmlFor="peresent">
              حضوری
              <input type="radio" name="appointment" id="peresent" value="" />
            </label>
            <label htmlFor="online">
              غیر حضوری
              <input type="radio" name="appointment" id="online" value="" />
            </label>
          </div>

          <div className={styles.programm}>
            <p>نوع برنامه :</p>
            <label htmlFor="exercise">
              تمرینی
              <input type="radio" name="programm" id="exercise" value="" />
            </label>
            <label htmlFor="feeding">
              تغذیه
              <input type="radio" name="programm" id="feeding" value="" />
            </label>
            <label htmlFor="exercise-feeding">
              تمرین و تغذیه
              <input
                type="radio"
                name="programm"
                id="exercise-feeding"
                value=""
              />
            </label>
          </div>
          <div className={styles.price}>
            <p>هزینه پرداختی</p>
            <Button className={styles["btn-price"]}>1 میلیون تومان</Button>
          </div>
          <div className={styles.questions}>
            <p className={styles["title-q"]}>سوالات:</p>
            {/* سوالات مشترک */}
            <div className={styles.details}>
              <label htmlFor="age">
                سن
                <input type="number" id="age" min="10" max="100" />
              </label>

              <label htmlFor="height">
                قد
                <input type="number" id="height" min="100" max="200" />
              </label>
              <label htmlFor="weigth">
                وزن
                <input type="number" id="weight" min="30" max="200" />
              </label>
            </div>

            {/* سوالات مخصوص تمرین */}
            <label className={styles["form-input"]} htmlFor="sickness">
              سابقه بیماری
              <input type="text" id="sickness" />
            </label>
            <label className={styles["form-input"]} htmlFor="practice">
              سابقه تمرین
              <input type="text" id="practice" />
            </label>
            <label className={styles["form-input"]} htmlFor="goal">
              هدف از تمرین
              <input type="text" id="goal" />
            </label>
            <label className={styles["form-input"]} htmlFor="pain">
              درد در ناحیه خاص
              <input type="text" id="pain" />
            </label>
            <label className={styles["form-input"]} htmlFor="supplement">
              مکمل مصرفی
              <input type="text" id="supplement" />
            </label>
            {/* سوالات مخصوص تغذیه */}
            <label className={styles["form-input"]} htmlFor="allergy">
              حساسیت غذایی
              <input type="text" id="allergy" />
            </label>
            <label className={styles["form-input"]} htmlFor="time">
              ساعت تمرین
              <input type="text" id="time" />
            </label>
          </div>
          <div className={styles.textarea}>
            <textarea
              name=""
              id=""
              // cols="95"
              // rows="10"
              placeholder="توضیحات اضافه ..."
            ></textarea>
          </div>
          <div className={styles.uploading}>
            <Button className={styles["btn-uploding"]}>آپلود عکس</Button>
            <div className={styles["show-images"]}>نمایش عکس ها</div>
          </div>
          <div className={styles.rules}>
            <input type="checkbox" name="" id="" />
            <Link to={"/legal"}>تمامی قوانین سایت را می پذیرم.</Link>
          </div>
          <div className={styles.send}>
            <Button type="submit" className={styles["btn-sending"]}>
              ارسال
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
