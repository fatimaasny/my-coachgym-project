import styles from "./MyTraining.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";

import joloPaDastgahVideo from "../../videos/jolopa-dastgah.MOV";
import abdoctionVideo from "../../videos/abdoctor-dastgah.MOV";
import addoctorVideo from "../../videos/addoctor-dastgah.MOV";
import downWardDogVideo from "../../videos/down-ward-dog.MOV";
import nashrDambelTarafinVideo from "../../videos/nashr-dambel-tarafin.MOV";
import plankUpsVideo from "../../videos/plank-ups.MOV";
import sarshanePressDastgahVideo from "../../videos/sarshane-press-dastgah.MOV";
import sidelyingOpenBookVideo from "../../videos/sidelying-open-book.MOV";
import skuatGabletVideo from "../../videos/skuat-gablet.MOV";
import supinePiriformiseStretchVideo from "../../videos/supine-piriformise-stretch.MOV";
import zirbaghalGhayeghiViddeo from "../../videos/zirbaghal-ghayeghi.MOV";
import VideoItem from "./VideoItem/VideoItem";
import { useState } from "react";

const movies = [
  {
    src: addoctorVideo,
    type: "video/mp4",
    title: "ادداکتور دستگاه",
    category: "پا",
  },
  {
    src: skuatGabletVideo,
    type: "video/mp4",
    title: "اسکوات گابلت",
    category: "پا",
  },
  {
    src: downWardDogVideo,
    type: "video/mp4",
    title: "down ward dog",
    category: "اصلاحی کمر",
  },
  {
    src: supinePiriformiseStretchVideo,
    type: "video/mp4",
    title: "supine piriformise stretch",
    category: "اصلاحی کمر",
  },
  {
    src: sidelyingOpenBookVideo,
    type: "video/mp4",
    title: "sidelying open book",
    category: "اصلاحی کمر",
  },
  {
    src: nashrDambelTarafinVideo,
    type: "video/mp4",
    title: "نشر دمبل طرفین",
    category: "سرشانه",
  },
  {
    src: plankUpsVideo,
    type: "video/mp4",
    title: "پلانک آپس",
    category: "سرشانه",
  },
  {
    src: sarshanePressDastgahVideo,
    type: "video/mp4",
    title: "سرشانه پرس دستگاه",
    category: "سرشانه",
  },
  {
    src: zirbaghalGhayeghiViddeo,
    type: "video/mp4",
    title: "زیربغل قایقی",
    category: "زیربغل",
  },
];

function MyTraining() {
  const [list, setList] = useState([
    {
      src: joloPaDastgahVideo,
      type: "video/mp4",
      title: "جلو پا سیم کش",
      category: "پا",
    },
    {
      src: abdoctionVideo,
      type: "video/mp4",
      title: "آبداکتور دستگاه",
      category: "پا",
    },
  ]);

  
  return (
    <>
      <a id="training"></a>
      <div className={styles.training}>
        <Title title="آموزش ها" />
        <div className={styles.menu}>
          <ul>
            <li>
              <button>همه</button>
            </li>
            <li>
              <button>پا</button>
            </li>
            <li>
              <button>سینه</button>
            </li>
            <li>
              <button>سرشانه</button>
            </li>
            <li>
              <button>بازو</button>
            </li>
            <li>
              <button>زیربغل</button>
            </li>
            <li>
              <button>شکم و پهلو</button>
            </li>
            <li>
              <button>اصلاحی کمر</button>
            </li>
            <li>
              <button>اصلاحی گردن</button>
            </li>
          </ul>
        </div>
        <div className={styles["list-videos"]}>
          {movies.map((i, index) => (
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
