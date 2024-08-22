import styles from "./ContactMe.module.css";

import Title from "../Title/Title";
import Button from "../Button/Button";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import InfoItem from "./InfoItem/InfoItem";

const list = [
  {
    icon: <HiOutlineLocationMarker fontSize="1.5rem" color="#222" />,
    title: "آدرس باشگاه:",
    text: "گچساران، شهرک نفت، کوچه هشت شمالی",
  },
  {
    icon: <IoCallOutline fontSize="1.5rem" color="#222" />,
    title: "شماره تماس:",
    text: "09171488436",
    url: "tel:+98-0917-148-8436",
  },
  {
    icon: <FaInstagram fontSize="1.5rem" color="#222" />,
    title: "اینستاگرام:",
    text: "ahmaad.alizade",
    url: "https://instagram.com/ahmaad.alizade",
  },
];

function ContactMe() {
  return (
    <>
      <a id="contactMe"></a>
      <div className={styles.contact}>
        <Title title="ارتباط با من" />
        <div className={styles.content}>
          <div className={styles.info}>
            {list.map((l, index) => (
              <InfoItem
                icon={l.icon}
                title={l.title}
                text={l.text}
                url={l.url}
              />
            ))}
          </div>
          <div className={styles["sending-message"]}>
            <form className={styles.form}>
              <div className={styles.inputs}>
                <div className={styles["form-input"]}>
                  <label htmlFor="fullName">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="احمد علیزاده"
                  />
                </div>
                <div className={styles["form-input"]}>
                  <label htmlFor="instagram">آیدی اینستاگرام</label>
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder="ahmaad.alizade"
                  />
                </div>
              </div>
              <div className={styles["form-textarea"]}>
                <label htmlFor="text">پیام شما</label>
                <textarea
                  name="text"
                  id="text"
                  placeholder="لطفا پیام خود را بنویسید."
                ></textarea>
              </div>
              <div className={styles.button}>
                <Button className={styles["btn-sending"]}>ارسال پیام</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
