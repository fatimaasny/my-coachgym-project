import { useEffect, useRef, useState } from "react";
import styles from "./MyGallery.module.css";

import Title from "../Title/Title";

import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Images_List } from "../../IMAGES_LIST";

function MyGallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canClickRight, setCanClickRight] = useState(false);
  const [canClickLeft, setCanClickLeft] = useState(true);
  const contentRef = useRef();
  const widthItemRef = useRef(0);

  useEffect(() => {
    const checkSize = () => {
      if (contentRef.current) {
        const width = contentRef.current.offsetWidth;
        if (width <= 602) {
          widthItemRef.current = 330;
        } else if (width <= 1000) {
          widthItemRef.current = 660;
        } else {
          widthItemRef.current = 990;
        }
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = contentRef.current;

      setCanClickRight(Math.abs(scrollLeft) > 0);
      setCanClickLeft(
        Math.abs(scrollLeft) < scrollWidth - clientWidth &&
          scrollWidth - clientWidth - Math.abs(scrollLeft) > 50
      );
    }
  }, [scrollPosition]);

  const scrollHandler = (direction) => {
    const newPositionScroll =
      direction === "left"
        ? scrollPosition - widthItemRef.current
        : scrollPosition + widthItemRef.current;

    if (contentRef.current) {
      contentRef.current.scrollLeft = newPositionScroll;
      setScrollPosition(newPositionScroll);
    }
  };

  return (
    <>
      <a id="gallery"></a>
      <div className={styles.gallery}>
        <Title title="گالری من" />
        <div className={styles.contentRef} ref={contentRef}>
          {Images_List.map((i, index) => (
            <div key={index} className={styles.itemImg}>
              <img src={i} alt="gallery-image.jpg" />
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles["btn-right"]}
            onClick={() => scrollHandler("right")}
            disabled={!canClickRight}
          >
            <FaCircleChevronRight fontSize="3.5rem" />
          </button>

          <button
            className={styles["btn-left"]}
            onClick={() => scrollHandler("left")}
            disabled={!canClickLeft}
          >
            <FaCircleChevronLeft fontSize="3.5rem" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyGallery;
