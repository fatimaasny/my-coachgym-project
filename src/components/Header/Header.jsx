import styles from "./Header.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import { GiHamburgerMenu } from "react-icons/gi";
import MenuOverlay from "./MenuOverlay/MenuOverlay";
// import AboutMeOverlay from "./AboutMeOverlay/AboutMeOverlay";
function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);
  // const [isAboutMeOverlay, setIsAboutMeOverlay] = useState(false);
  const [isMenuOverlay, setIsMenuOverlay] = useState(false);
  // const showAboutMeHandler = () => {
  //   console.log("show");
  //   setIsAboutMeOverlay(true);
  // };
  // const hideAboutMeHandler = () => {
  //   console.log("hide");
  //   setIsAboutMeOverlay(false);
  // };
  const showMenuOverlay = () => {
    setIsMenuOverlay(true);
  };
  const hideMenuOverlay = () => {
    setIsMenuOverlay(false);
  };

  useEffect(() => {
    const scrollHandler = () => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition >= 200) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="relative">
      {isMenuOverlay && (
        <MenuOverlay
          hideMenuOverlay={hideMenuOverlay}
          isMenuOverlay={isMenuOverlay}
        />
      )}
      <header className={`${styles.header} ${scrollHeader && styles.scroll}`}>
        <Navbar
          class="rownavbar"
          // isAboutMeOverlay={isAboutMeOverlay}
          // showAboutMeHandler={showAboutMeHandler}
          // hideAboutMeHandler={hideAboutMeHandler}
        />
        <button className={styles.btnmenu} onClick={showMenuOverlay}>
          <GiHamburgerMenu color="#fff" fontSize="2rem" />
        </button>
        <Link to={"/"}>
          <h1>Ahmad</h1>
        </Link>
      </header>
    </div>
  );
}

export default Header;
