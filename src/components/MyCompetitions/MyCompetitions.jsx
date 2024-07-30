import styles from "./MyCompetitions.module.css";

import Title from "../Title/Title";
import CompetitionItem from "./CompetitionItem/CompetitionItem";

import imgKish from "../../images/kiish.jpg";
import imgFizikTeh from "../../images/fizik-tehran.png";
import imgBuildingTeh from "../../images/building--teh2.jpg";
import imgBushehr from "../../images/busheehr3.jpg";
import imgFars from "../../images/faars2.jpg";

const listOfCopetitions = [
  {
    source: imgKish,
    alt: "kish.png",
    date: "اسفند ماه 1399",
    title: "مسابقات کشوری کیش",
    degree: "مقام ششم بادی کلاسیک",
  },
  {
    source: imgFizikTeh,
    alt: "fizik-tehran.png",
    date: "دی ماه 1401",
    title: "مسابقات استان تهران",
    degree: "مقام دوم فیزیک کلاسیک کن",
  },
  {
    source: imgBuildingTeh,
    alt: "building-tehran.png",
    date: "دی ماه 1401",
    title: "مسابقات استان تهران",
    degree: "مقام سوم بیلدینگ کن کلاسیک",
  },

  {
    source: imgBushehr,
    alt: "bushehr.png",
    date: "بهمن ماه 1399",
    title: "مسابقات استان بوشهر",
    degree: "مقام سوم بادی کلاسیک",
  },
  {
    source: imgFars,
    alt: "fars.png",
    date: "بهمن ماه 1401",
    title: "مسابقات استان فارس",
    degree: "مقام اول فیزیک کلاسیک",
  },
];

function MyCompetitions() {
  return (
    <>
      <a id="competitions"></a>
      <div className={styles.competitions}>
        <Title title="مسابقات من" className={styles.title} />
        <div className={styles.items}>
          {listOfCopetitions.map((i, index) => (
            <CompetitionItem
              key={index}
              source={i.source}
              alt={i.alt}
              date={i.date}
              title={i.title}
              degree={i.degree}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyCompetitions;
