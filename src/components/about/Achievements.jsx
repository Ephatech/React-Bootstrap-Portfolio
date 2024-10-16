import React from "react";

const achievementsContent = [
  {
    title: "1",
    subTitle1: "years of",
    subTitle2: "backend development professional experience",
  },
  {
    title: "2",
    subTitle1: "years of",
    subTitle2: "university lecturing professional experience",
  },
  {
    title: "7",
    subTitle1: "completed",
    subTitle2: "personal, corporate and company projects",
  },

  {
    title: "2",
    subTitle1: "awards",
    subTitle2: "achieved educational, carrer and social works  ",
  },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-sm-12 col-md-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
