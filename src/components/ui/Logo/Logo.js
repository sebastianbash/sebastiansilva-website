import React from "react";
import "./logo.css";

// This is static top section of the page and gives it semantic value.
function Header({ cssClass, animation }) {
  return (
    <img src="favicon-32x32.png" alt="Sebastian Silva" className={cssClass} ref={animation} />
  );
}

export default Header;
