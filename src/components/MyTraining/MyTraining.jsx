import { useState } from "react";

import styles from "./MyTraining.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import VideoItem from "../MyTraining/VideoItem/VideoItem";

import nashrDambelTarafinVideo from "../../videos/nashr-dambel-tarafin.MOV";
import { BsSearch } from "react-icons/bs";

const movies = [
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "ادداکتور دستگاه",
    category: "پا",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "اسکوات گابلت",
    category: "پا",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "down ward dog",
    category: "اصلاحی گردن",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "supine piriformise stretch",
    category: "اصلاحی کمر",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "شکم کرانچ",
    category: "شکم و پهلو",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "جلوبازو سیم کش ",
    category: "بازو",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "پرس سینه هالتر",
    category: "سینه",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "سرشانه پرس دستگاه",
    category: "سرشانه",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "زیربغل قایقی",
    category: "زیربغل",
  },
];

function MyTraining() {
  const [list, setList] = useState([...movies]);
  const [selected, setSelected] = useState("همه");
  const [searchInput, setSearchInput] = useState("");
  const handlerSelect = (value) => {
    setSelected(value);
  };
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const filterHandler = (value) => {
    if (value === "همه") {
      setList([...movies]);
    } else {
      const nlist = movies.filter((l) => l.category === value);
      setList(nlist);
    }
  };
  const filterSearchHandler = () => {
    if (searchInput === "") {
      setList([...movies]);
    } else {
      const nlist = movies.filter((l) => l.title.includes(searchInput));
      setList(nlist);
    }
  };

  return (
    <>
      <a id="training"></a>
      <div className={styles.training}>
        <Title title="آموزش ها" />
        <div className={styles.title}>
          <ul className={styles.menu}>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "همه" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("همه");
                  filterHandler("همه");
                }}
              >
                همه
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "پا" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("پا");
                  filterHandler("پا");
                }}
              >
                پا
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "سینه" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("سینه");
                  filterHandler("سینه");
                }}
              >
                سینه
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "سرشانه" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("سرشانه");
                  filterHandler("سرشانه");
                }}
              >
                سرشانه
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "بازو" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("بازو");
                  filterHandler("بازو");
                }}
              >
                بازو
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "زیربغل" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("زیربغل");
                  filterHandler("زیربغل");
                }}
              >
                زیربغل
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "شکم و پهلو" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("شکم و پهلو");
                  filterHandler("شکم و پهلو");
                }}
              >
                شکم و پهلو
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "اصلاحی کمر" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("اصلاحی کمر");
                  filterHandler("اصلاحی کمر");
                }}
              >
                اصلاحی کمر
              </button>
            </li>
            <li>
              <button
                className={`${styles.button} ${
                  selected === "اصلاحی گردن" && styles.btnclick
                }`}
                onClick={() => {
                  handlerSelect("اصلاحی گردن");
                  filterHandler("اصلاحی گردن");
                }}
              >
                اصلاحی گردن
              </button>
            </li>
          </ul>
          <div className={styles.search}>
            <input
              value={searchInput}
              onChange={(e) => {
                searchHandler(e);
                filterSearchHandler();
              }}
              type="text"
              placeholder="نام حرکت را جستجو کنید"
            />
            <BsSearch fontSize="1.5rem" color="#444" />
          </div>
        </div>
        <div className={styles["list-videos"]}>
          {list.map((i, index) => (
            <VideoItem
              key={index}
              source={i.src}
              type={i.type}
              title={i.title}
              category={i.category}
            />
          ))}
        </div>
        <div className={styles.button}>
          <Button className={styles["btn-show-more"]}>نمایش بیشتر</Button>
        </div>
      </div>
    </>
  );
}

export default MyTraining;
