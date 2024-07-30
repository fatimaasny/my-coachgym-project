import styles from "./MyInformation.module.css";

import Button from "../Button/Button";
import Card from "../Card/Card";

import { useNavigate } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";
import { LuArrowDownToLine } from "react-icons/lu";

import profileAhmad from "../../images/profile-ahmad.jpg";

function MyInformation() {
  const navigate = useNavigate();
  return (
    <>
      <a id="home"></a>
      <div className={styles.info}>
        <Card className={styles.right}>
          <Card className={styles["card-image"]}>
            <img src={profileAhmad} alt="ahmad.jpg" />
          </Card>
          <h1>احمد علیزاده</h1>
          <div className={styles["btn-card"]}>
            <span>مربی باشگاه بدنسازی</span>
          </div>
          <div className={styles.icons}>
            <button>
              <FaInstagram fontSize="1.5rem" color="#888" />
            </button>
            <button>
              <RiTelegramLine fontSize="1.5rem" color="#888" />
            </button>
            <button>
              <FaWhatsapp fontSize="1.5rem" color="#888" />
            </button>
          </div>
        </Card>
        <div className={styles.left}>
          <h1>سلام، من احمد علیزاده هستم، مربی باشگاه بدنسازی پرشین</h1>
          <Button className={styles["btn-reservation"]}>
            <span
              onClick={() => {
                navigate("/appointment");
              }}
            >
              سفارش برنامه
            </span>
            <LuArrowDownToLine fontSize="1.1rem" />
          </Button>
          <div className={styles.items}>
            <div className={styles["items-right"]}>
              <p>
                <FiArrowUpLeft fontSize="1.2rem" color="#888" />{" "}
                <span>ارائه برنامه تمرینی</span>
              </p>
              <p>
                <FiArrowUpLeft /> <span>ارائه برنامه تغذیه</span>
              </p>
              <p>
                <FiArrowUpLeft /> <span> ارائه برنامه تمرینی و تغذیه</span>
              </p>
            </div>
            <div className={styles["items-left"]}>
              <p>
                <FiArrowUpLeft /> <span> مشاوره اختصاصی دارو و مکمل</span>
              </p>
              <p>
                <FiArrowUpLeft /> <span>آموزش خصوصی</span>
              </p>
              <p>
                <FiArrowUpLeft /> <span>آموزش افراد دارای آسیب جسمانی</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInformation;
