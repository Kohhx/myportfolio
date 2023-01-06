import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Biography.css";
import Fullview from "../Shared/Fullview";
import Avatar from "../Shared/Avatar";

import BgImage from "../Images/background.jpg";
import ProfilPic from "../Images/profilepic.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Biography = () => {
  const [showBio, setShowBio] = useState(false);

  console.log(Link);

  // const showBioHandler = () => setShowBio(!showBio)

  const profilePicJSX = (
    <div className="bio-info-container">
      <div className="title-border">
        <h1>Koh He Xiang</h1>
        <div className="border"></div>
      </div>
      <div className="avatar-container">
        <Avatar
          picUrl={ProfilPic}
          height="200px"
          width="200px"
          class="round border-1"
        />
      </div>
    </div>
  );

  const profileBioJSX = (
    <div className="bio-info-container">
      <div className="bio-text">
        Discovered a newfound passion for coding and aspire to be a software
        engineer. Coding presents heap of opportunities for me to work on
        projects related to web development, app development, data analysis and
        machine learning, which i am strongly passionate about. I would love to
        use these coding skills together with the increasingly pace of
        technological advancement to provide services for people and improve the
        the way of life for people.
      </div>
    </div>
  );

  return (
    <Fullview background={BgImage} class="flex-center">
      <div
        onMouseEnter={() => setShowBio(true)}
        onMouseLeave={() => setShowBio(false)}
        className="bio-info-container-outer"
      >
        <span className="left-brackets">{`{`}</span>
        {showBio ? profileBioJSX : profilePicJSX}
        <span className="right-brackets">{`}`}</span>
      </div>
      <div className="portfolio-icons">
        <a href="https://github.com/Kohhx">
          <FontAwesomeIcon className="fa-my" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/kohhx/">
          <FontAwesomeIcon className="fa-my" icon={faLinkedin} />
        </a>
        <FontAwesomeIcon className="fa-rocket" icon={faRocket} />
      </div>
    </Fullview>
  );
};

export default Biography;
