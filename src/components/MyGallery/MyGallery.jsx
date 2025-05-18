import { useEffect, useRef, useState } from "react";
import styles from "./MyGallery.module.css";

import Title from "../Title/Title";

import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Images_List } from "../../IMAGES_LIST";

const widthItem = 320;

function MyGallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canClickRight, setCanClickRight] = useState();
  const [canClickLeft, setCanClickLeft] = useState();

  const contentRef = useRef();

  useEffect(() => {
    const checkSize = () => {
      // بگم توی هر سایزی مقدار این عرض چقدر باشه
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    // اینجا باید بگم کی دکمه ها غیر فعال بشن
  }, [canClickLeft, canClickRight]);

  const scrollHandler = (scrollAmount) => {
    const newPositionScroll = scrollPosition + scrollAmount;
    setScrollPosition(newPositionScroll);
    contentRef.current.scrollLeft = newPositionScroll;
  };

  return (
    <>
      <a id="gallery"></a>
      <div className={styles.gallery}>
        <Title title="گالری من" />
        <div
          className={styles.contentref}
          ref={contentRef}
          style={{
            // width: "1200px",
            width: "100%",
            // margin: "0 auto",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            // background: "yellow",
          }}
        >
          <div className={styles.items}>
            {Images_List.map((i, index) => (
              <div key={index} className={styles.itemImg}>
                <img src={i} alt="gallery-image.jpg" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles["btn-right"]}
            onClick={() => scrollHandler(widthItem)}
            // disabled={!canClickRight}
          >
            <FaCircleChevronRight fontSize="3.5rem" />
          </button>
          <button
            className={styles["btn-left"]}
            onClick={() => scrollHandler(-widthItem)}
            // disabled={!canClickLeft}
          >
            <FaCircleChevronLeft fontSize="3.5rem" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyGallery;
