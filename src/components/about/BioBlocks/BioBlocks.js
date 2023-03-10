import React from "react";
import figmaIcon from "./bio-block-icons/figma-tech-icon.svg";
import followerIcon from "./bio-block-icons/follower-icon.svg";
import gitIcon from "./bio-block-icons/git-tech-icon.svg";
import jsIcon from "./bio-block-icons/js-tech-icon.svg";
import vsCodeIcon from "./bio-block-icons/vscode-icon-g.png";
import reactIcon from "./bio-block-icons/react-tech-icon.svg";
import reactionIcon from "./bio-block-icons/reaction-icon.svg";
import viewIcon from "./bio-block-icons/view-icon.svg";
import "./bioBlocks.css";

// This is static top section of the page and gives it semantic value.
function BioBlocks() {
  const prjStatsData = [
    {
      stat: "reactions",
      statNumber: 0 + "+",
      icon: reactionIcon,
    },
    {
      stat: "followers",
      statNumber: "0k+",
      icon: followerIcon,
    },
    {
      stat: "views",
      statNumber: "0k+",
      icon: viewIcon,
    },
    {
      stat: "visitar",
      statNumber: "",
      icon: viewIcon,
    },
  ];

  let statElements = [];

  prjStatsData.forEach((stat) => {
    let singleStat = (
      <div className="block__blog-stat" key={stat.stat}>
        <img
          src={stat.icon}
          alt="Start checkered flag icon"
          className="block__icon-left"
        />
        <p className="block__stat-text">
          {stat.statNumber}{" "}
          <span className="block__stat-type">{stat.stat}</span>
        </p>
      </div>
    );

    return statElements.push(singleStat);
  });

  return (
    <section className="bio-blocks">
      {/* Aquí debe ir mi página de servicios freelancer (nueva) */}
      <a
        className="block"
        href="https://github.com/sebastianbash"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="block__header">
          <h5>Trabajando como…</h5>
          <h3>Front-End Freelancer</h3>
        </div>
        <div className="block__tools">
          <p>Usando:</p>
          <div className="blocks__tool-icons">
            <img src={reactIcon} alt="React logo" />
            <img src={jsIcon} alt="JavaScript logo" />
            <img src={gitIcon} alt="Git logo" />
            <img src={figmaIcon} alt="Figma logo" />
            <img
              src={vsCodeIcon}
              alt="Visual Studio Code"
              width="20"
              style={{ opacity: "0.5" }}
            />
          </div>
        </div>
        <div className="block__meta-container">
          <div className="block__meta">Github</div>
          <div className="block__meta">
            <p className="block__meta-text block__work-cta">Visitar</p>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              className="block__icon-right"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.84305 1.279L5.33859 0.783465C5.54841 0.573643 5.8877 0.573643 6.09528 0.783465L10.4346 5.12052C10.6444 5.33034 10.6444 5.66963 10.4346 5.87722L6.09528 10.2165C5.88546 10.4263 5.54618 10.4263 5.33859 10.2165L4.84305 9.72097C4.631 9.50891 4.63546 9.16293 4.85198 8.95534L7.54171 6.39284L1.12653 6.39284C0.82966 6.39284 0.59082 6.154 0.59082 5.85713L0.59082 5.14284C0.59082 4.84597 0.82966 4.60713 1.12653 4.60713L7.54171 4.60713L4.85198 2.04463C4.63323 1.83704 4.62877 1.49105 4.84305 1.279Z" />
            </svg>
          </div>
        </div>
      </a>
      <a
        className="block"
        href="https://pomogo.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="block__header">
          <h5>Ver el último proyecto...</h5>
          <h3>PomoGo</h3>
        </div>
        <div className="block__blog-container">{statElements}</div>
      </a>
    </section>
  );
}

export default BioBlocks;
