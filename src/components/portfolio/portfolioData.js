import Image1 from "../../assets/img/portfolio/portfolio.png";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image6 from "../../assets/img/portfolio/project-6.jpg";
import Image7 from "../../assets/img/portfolio/project-7.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";
import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "portfolio project",
    image: Image1,
    tag: ["personal"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "personal",
        language: "React, Tailwind, Butter CMS",
        preview: "https://portfolio-ephatech.web.app",
        link: "https://portfolio-ephatech.web.app",
      },
    ],
  },
  {
    id: 2,
    type: "Apple Clone project",
    image: Image2,
    tag: ["clone"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        language: " React, Bootstrap, Youtube API",
        preview: "https://astounding-fudge-671dd8.netlify.app/",
        link: "https://astounding-fudge-671dd8.netlify.app/",
      },
    ],
  },
  {
    id: 3,
    type: "Netflix Clone project",
    image: Image3,
    tag: ["clone"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        language: " React, Bootstrap, TMDB",
        preview:
          "https://6557bbfafbb093102b7d0095--candid-cheesecake-4eeb42.netlify.app/",
        link: "https://6557bbfafbb093102b7d0095--candid-cheesecake-4eeb42.netlify.app/",
      },
    ],
  },
  {
    id: 4,
    type: "Amazon Clone project",
    image: Image4,
    tag: ["clone"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        language: " React, Bootstrap, FireBase, Firestore",
        preview: "https://fir-6ed13.web.app/",
        link: "https://fir-6ed13.web.app/",
      },
    ],
  },
  {
    id: 8,
    type: "Property Management System",
    image: Image4,
    tag: ["company"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "ERP - Backend Development @ Meselal Tech",
        client:
          "Bamacon Construction, Anchor Construction, Hakikon Construction ...",
        language: " React, ASP.net, SQL Server",
        preview: "https://meselaltech.com/services/",
        link: "https://meselaltech.com/services/",
      },
    ],
  },
  {
    id: 9,
    type: "Sales Management System",
    image: Image4,
    tag: ["company"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "ERP - Backend Development @ Meselal Tech",
        client: "Bamacon Construction, Ultimate Chemicals, Taf Oil ...",
        language: " React, ASP.net, SQL Server",
        preview: "https://meselaltech.com/services/",
        link: "https://meselaltech.com/services/",
      },
    ],
  },
];

export default PortfolioData;
