import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-telegram",
    link: "https://t.me/ephrem_tesfaye_tsidu",
  },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/ephrem-tesfaye-ephatech",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/ephatech",
  },
  { iconName: "fa fa-instagram", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5 text-center">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
