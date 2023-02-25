import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./header.css";

// This is static top section of the page and gives it semantic value.
function Header({ title, subTitleOne, subTitleTwo, backWord }) {
  // Ref for blue line
  const ruleRef = useRef(null);

  // Ref for h1 line
  const h1Ref = useRef(null);

  // Ref for h3 line
  const h3Ref = useRef(null);

  // Ref for BackTitle
  const backWordRef = useRef(null);

  // Ref for DeveloperText
  const developerRef = useRef(null);

  // Only we consider the developer text in home page
  const isIndex = () => {
    if (window.location.pathname === "/") {
      developerRef.current.style.display = "block";
    } else {
      developerRef.current.style.display = "none";
    }
  };

  // GSAP ANIMATIONS
  const gsapAnimations = () => {
    const tl = gsap.timeline();

    tl.from(ruleRef.current, {
      duration: 0.7,
      autoAlpha: 0,
      scale: 40,
      ease: "back.out(1)",
    }).to(ruleRef.current, {
      duration: 1,
      width: 210,
      borderRadius: 0,
      ease: "back.out(3)",
    });

    tl.from(
      h1Ref.current,
      {
        duration: 1,
        autoAlpha: 0,
        y: 20,
        ease: "back.out(3)",
      },
      "-=1"
    );

    tl.from(
      h3Ref.current,
      {
        duration: 1,
        autoAlpha: 0,
        y: -20,
        ease: "back.out(3)",
      },
      "-=1"
    );

    tl.from(
      developerRef.current,
      {
        duration: 1,
        autoAlpha: 0,
        y: -20,
        ease: "back.out(3)",
      },
      "-=1"
    );
  };

  useEffect(() => {
    isIndex();
    gsapAnimations();
  }, []);

  return (
    <header>
      <div className="header__backword-container">
        <h2 className="header__backword" ref={backWordRef}>
          <span>{backWord}</span>
        </h2>
        <span ref={developerRef} className="header__backword-upon">
          Developer
        </span>
      </div>
      <h1 className="g_white-color title" ref={h1Ref}>
        {title}
      </h1>
      <hr ref={ruleRef} />
      <div ref={h3Ref}>
        <h3 className="header__sub-title">{subTitleOne}</h3>
        <h3 className="header__sub-title">{subTitleTwo}</h3>
      </div>
    </header>
  );
}

export default Header;
