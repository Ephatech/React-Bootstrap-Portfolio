import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: " Backend Developer",
    compnayName: "Meselal Tech",
    details: `  Participated in Enterprise Resorurce Planning (ERP), Property Management, Project Management, and Sales Management systemns as a backend developer`,
    link: `https://www.meselaltech.com/about`,
  },
  {
    year: "2022 - Present",
    position: " Lecturer",
    compnayName: "Unity University",
    details: `Offering lectures on 1. Software System analysis and Design 2. Website design and development courses`,
    link: `https://uu.edu.et/`,
  },
  // {
  //   year: "2023 - Present",
  //   position: "Project Manager, Lecturer",
  //   compnayName: "Kabowd Code Sync",
  //   details: `Founder and Project manager`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">
              <a
                className="preview-link"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={val.link}
              >
                {val.compnayName}
              </a>
            </span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
