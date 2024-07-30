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
          <div className={styles["form-input"]}>
            <label htmlFor="fullName">نام و نام خانوادگی</label>
            <input id="fullName" type="text" />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="phone">شماره تماس</label>
            <input id="phone" type="text" />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="telegram">شماره تلگرام</label>
            <input id="telegram" type="text" />
          </div>
          <div className={styles.gender}>
            <p>جنسیت :</p>

            <span>
              خانم
              <input type="radio" name="gender" id="female" value="" />
            </span>
            <span>
              آقا
              <input type="radio" name="gender" id="male" value="" />
            </span>
          </div>

          <div className={styles.reserve}>
            <p>رزرو نوبت :</p>
            <span>
              حضوری
              <input type="radio" name="appointment" id="peresent" value="" />
            </span>
            <span>
              غیر حضوری
              <input type="radio" name="appointment" id="online" value="" />
            </span>
          </div>

          <div className={styles.programm}>
            <p>نوع برنامه :</p>
            <span>
              تمرینی
              <input type="radio" name="programm" id="peresent" value="" />
            </span>
            <span>
              تغذیه
              <input type="radio" name="programm" id="online" value="" />
            </span>
            <span>
              تمرین و تغذیه
              <input type="radio" name="programm" id="online" value="" />
            </span>
          </div>
          <div className={styles.price}>
            <p>هزینه پرداختی</p>
            <Button className={styles["btn-price"]}>1 میلیون تومان</Button>
          </div>
          <div className={styles.questions}>
            <p className={styles["title-q"]}>سوالات:</p>
            {/* سوالات مشترک */}
            <div className={styles.details}>
              <div>
                <label htmlFor="age">سن</label>
                <input type="number" min="1" max="100" />
              </div>
              <div>
                <label htmlFor="height">قد</label>
                <input type="number" min="50" max="200" />
              </div>
              <div>
                <label htmlFor="weigth">وزن</label>
                <input type="number" min="20" max="200" />
              </div>
            </div>

            {/* سوالات مخصوص تمرین */}
            <div className={styles["form-input"]}>
              <label htmlFor="sickness">سابقه بیماری</label>
              <input type="text" />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="practice">سابقه تمرین</label>
              <input type="text" />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="goal">هدف از تمرین</label>
              <input type="text" />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="pain">درد در ناحیه خاص</label>
              <input type="text" />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="supplement">مکمل مصرفی</label>
              <input type="text" />
            </div>
            {/* سوالات مخصوص تغذیه */}
            <div className={styles["form-input"]}>
              <label htmlFor="allergy">حساسیت غذایی</label>
              <input type="text" />
            </div>
            <div className={styles["form-input"]}>
              <label htmlFor="time">ساعت تمرین</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.textarea}>
            <textarea
              name=""
              id=""
              cols="95"
              rows="10"
              placeholder="توضیحات اضافه ..."
            ></textarea>
          </div>
          <div className={styles.uploading}>
            <Button className={styles["btn-uploding"]}>آپلود عکس</Button>
            <div className={styles["show-images"]}>نمایش عکس ها</div>
          </div>
          <div className={styles.rules}>
            <input type="checkbox" name="" id="" />
            <Link to={"/legal"}>
              <p>تمامی قوانین سایت را می پذیرم.</p>
            </Link>
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
