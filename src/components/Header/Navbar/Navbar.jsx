import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import AboutMeOverlay from "../AboutMeOverlay/AboutMeOverlay";

function Navbar(props) {
  return (
    <ul className={`${styles[props.class]}`}>
      <li>
        <Link to={"/"}>خانه</Link>
      </li>
      <li>
        <p onClick={props.showAboutMeHandler}>درباره من</p>
      </li>
      {props.isAboutMeOverlay && (
        <AboutMeOverlay hideAboutMeHandler={props.hideAboutMeHandler} />
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
      <li>
        <Link to={"https://t.me/Ahmad_a00"} target="_blank">
          چت با پشتیبانی
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
