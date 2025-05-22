import { useEffect, useState } from "react";

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
    title: "سگ سر پایین",
    category: "اصلاحی گردن",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "کشش عضله پیریفورمیس",
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

const trainingTitles = [
  "همه",
  "پا",
  "سینه",
  "سرشانه",
  "بازو",
  "زیربغل",
  "شکم و پهلو",
  "اصلاحی کمر",
  "اصلاحی گردن",
];

function MyTraining() {
  // const [list, setList] = useState([...movies]);
  const [updatedList, setUpdatedList] = useState([]);
  const [selected, setSelected] = useState("پا");
  const [searchInput, setSearchInput] = useState("");
  // const [lastIndexList, setLastIndexList] = useState(0);

  const handlerSelect = (value) => {
    setSelected(value);
  };
  const searchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const filterHandler = (value) => {
    // setLastIndexList(0);
    setUpdatedList([]);

    if (value === "همه") {
      setUpdatedList([...movies]);
    } else {
      const nlist = movies.filter((l) => l.category === value);
      setUpdatedList(nlist);
    }
    // showMoreHandler();
  };

  const filterSearchHandler = async () => {
    setUpdatedList([]);
    if (searchInput === "") {
      setUpdatedList([...movies]);
    } else {
      const nlist = movies.filter((l) => l.title.includes(searchInput));
      setUpdatedList(nlist);
    }
    // showMoreHandler();
  };

  // const showMoreHandler = () => {
  //   let count = 0;
  //   while (count < 2) {
  //     if (list[lastIndexList]) {
  //       const newUpdatedList = list.slice(lastIndexList, lastIndexList + 1);
  //       // console.log(newUpdatedList);
  //       if (updatedList.length !== 0) {
  //         setUpdatedList([...updatedList, ...newUpdatedList]);
  //       } else {
  //         setUpdatedList([...newUpdatedList]);
  //       }
  //       setLastIndexList(lastIndexList + 1);
  //       // console.log("index", lastIndexList);
  //       count++;
  //     } else {
  //       return;
  //     }
  //   }

  //   // console.log("count", count);
  // };

  useEffect(() => {
    filterHandler("همه");
    // showMoreHandler();
  }, []);

  return (
    <>
      <a id="training"></a>
      <div className={styles.training}>
        <Title title="آموزش ها" />
        <div className={styles.title}>
          <ul className={styles.menu}>
            {trainingTitles.map((item, index) => (
              <li key={index}>
                <button
                  className={`${styles.button} ${
                    selected === item && styles.btnclick
                  }`}
                  onClick={() => {
                    handlerSelect(item);
                    filterHandler(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
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
          {updatedList.map((i, index) => (
            <VideoItem
              key={index}
              source={i.src}
              type={i.type}
              title={i.title}
              category={i.category}
            />
          ))}
        </div>
        {/* <div className={styles.button}>
          <Button className={styles["btn-show-more"]} onClick={showMoreHandler}>
            نمایش بیشتر
          </Button>
        </div> */}
      </div>
    </>
  );
}

export default MyTraining;
