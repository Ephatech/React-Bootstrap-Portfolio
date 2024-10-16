import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "PHP" },
  { skillClass: "p80", skillPercent: "80", skillName: "WORDPRESS" },
  { skillClass: "p70", skillPercent: "70", skillName: "JQUERY" },
  { skillClass: "p75", skillPercent: "75", skillName: "C#" },
  { skillClass: "p75", skillPercent: "75", skillName: "ASP.NET" },
  { skillClass: "p80", skillPercent: "80", skillName: "EXPRESS" },
  { skillClass: "p90", skillPercent: "90", skillName: "SQL" },
  { skillClass: "p90", skillPercent: "90", skillName: "MySQL" },
  { skillClass: "p85", skillPercent: "85", skillName: "SHOPIFY" },
  { skillClass: "p70", skillPercent: "70", skillName: "GIT" },
  { skillClass: "p45", skillPercent: "45", skillName: "MONGODB" },
  { skillClass: "p45", skillPercent: "45", skillName: "TAILWIND" },
  { skillClass: "p45", skillPercent: "45", skillName: "BUTTER CMS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
