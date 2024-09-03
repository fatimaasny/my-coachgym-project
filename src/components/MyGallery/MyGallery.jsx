import { useRef, useState } from "react";
import styles from "./MyGallery.module.css";

import Title from "../Title/Title";

import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

import gallery1 from "../../images/galleryimg1.jpg";
import gallery2 from "../../images/galleryimg2.jpg";
import gallery3 from "../../images/galleryimg3.jpg";
import gallery4 from "../../images/galleryimg4.jpg";
import gallery5 from "../../images/galleryimg5.jpg";
import gallery6 from "../../images/galleryimg6.jpg";
import gallery7 from "../../images/galleryimg7.jpg";
import gallery8 from "../../images/galleryimg8.jpg";
import gallery9 from "../../images/galleryimg9.jpg";
import gallery10 from "../../images/galleryimg10.jpg";

const listImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
];

const widthItem = 400;

function MyGallery() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const contentRef = useRef();

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
            {listImages.map((i, index) => (
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
            disabled={scrollPosition >= 0}
          >
            <FaCircleChevronRight fontSize="3.5rem" />
          </button>
          <button
            className={styles["btn-left"]}
            onClick={() => scrollHandler(-widthItem)}
            disabled={scrollPosition <= -2800}
          >
            <FaCircleChevronLeft fontSize="3.5rem" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MyGallery;
