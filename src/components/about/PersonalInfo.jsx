import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ephrem" },
  { meta: "last name", metaInfo: "Tesfaye" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Ethiopian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Addis Ababa" },
  { meta: "phone", metaInfo: "+251943206864" },
  { meta: "langages", metaInfo: "Amharic, English" },
  { meta: "Email", metaInfo: "ephunashamed@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
