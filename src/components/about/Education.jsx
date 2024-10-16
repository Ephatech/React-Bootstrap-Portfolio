import React from "react";

const educationContent = [
  {
    year: "2023 - Present",
    degree: "MASTERS IN SOFTWARE ENGINEERING",
    institute: "ADDIS ABABA UNIVERSITY",
    details: `Persuing masters degree in Computer Science department of Addis Ababa University`,
    link: `https://www.aau.edu.et`,
  },
  {
    year: "2022",
    degree: "COMPUTER SCIENCE DEGREE",
    institute: "UNITY UNIVERSITY",
    details: `  Graduated with a commulative GPA of 4.00, and awarded a trophy and medal.`,
    link: `https://www.uu.edu.et`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">
              <a
                className="preview-link"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={val.link}
              >
                {val.institute}
              </a>
            </span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
