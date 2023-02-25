import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaFigma,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer>
      <div className="footer__content-container">
        <Link exact="true" to="/">
          <Logo cssClass="footer__logo" fillOne="white" fillTwo="white" />
        </Link>

        <a
          href="*"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__resume "
        >
          <h6>Ver Curriculum</h6>
        </a>

        <div className="footer__social-icons-container">
          <a
            href="https://www.linkedin.com/in/mpgsebastian/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icons"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/sebastianbash"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icons"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ohheybash"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-icons"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <a
        href="https://github.com/sebastianbash/sebastiansilva.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__built-with"
      >
        <h6>
          Hecho con{" "}
          <span
            role="img"
            className="footer__emoji"
            aria-label="Sparkling Heart"
          >
            💖
          </span>{" "}
          <FaReact className="footer__react" />{" "}
        </h6>
      </a>
    </footer>
  );
}

export default Footer;
