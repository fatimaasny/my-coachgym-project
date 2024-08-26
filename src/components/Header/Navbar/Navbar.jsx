import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutMeOverlay from "../AboutMeOverlay/AboutMeOverlay";

function Navbar(props) {
  const [visibleOverlayAboutMe, setVisibleOverlayAboutMe] = useState(false);
  const showVisibleisibleHandler = () => {
    setVisibleOverlayAboutMe(true);
  };
  const hideVisibleisibleHandler = () => {
    setVisibleOverlayAboutMe(false);
  };
  return (
    <ul className={`${styles[props.class]}`}>
      <li>
        <Link to={"/"}>خانه</Link>
      </li>
      <li
        className={styles["aboutme-li"]}
        onMouseEnter={showVisibleisibleHandler}
        onMouseLeave={hideVisibleisibleHandler}
      >
        درباره من
        {/* <p onClick={props.showAboutMeHandler}>درباره من</p> */}
        {visibleOverlayAboutMe && (
          <AboutMeOverlay
            hideVisibleisibleHandler={hideVisibleisibleHandler}
            class={props.class === "colnavbar" ? "colnav" : ""}
          />
        )}
      </li>
      {/* {props.isAboutMeOverlay && (
        <AboutMeOverlay hideAboutMeHandler={props.hideAboutMeHandler} />
      )} */}

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
      <li>
        <Link to={"https://t.me/Ahmad_a00"} target="_blank">
          چت با پشتیبانی
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
