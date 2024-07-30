import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import AboutMeOverlay from "./AboutMeOverlay/AboutMeOverlay";
function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [isAboutMeOverlay, setIsAboutMeOverlay] = useState(false);
  const showAboutMeHandler = () => {
    console.log("show");
    setIsAboutMeOverlay(true);
  };
  const hideAboutMeHandler = () => {
    console.log("hide");
    setIsAboutMeOverlay(false);
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
    <header className={`${styles.header} ${scrollHeader && styles.scroll}`}>
      <Link to={"/"}>
        <h1>Ahmad</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/"}>خانه</Link>
        </li>
        <li>
          <p onClick={showAboutMeHandler}>درباره من</p>
        </li>
        {isAboutMeOverlay && (
          <AboutMeOverlay hideAboutMeHandler={hideAboutMeHandler} />
        )}

        <li>
          <Link to={"/appointment"}>سفارش برنامه</Link>
        </li>

        <li>
          <a href="#training">آموزش ها</a>
        </li>
        <li>
          <a href="#gallery">گالری</a>
        </li>
        <li>
          <Link to={"/legal"}>قوانین</Link>
        </li>
        <li>
          <a href="#contactMe">ارتباط با من</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
