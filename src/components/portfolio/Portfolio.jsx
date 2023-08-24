import React from "react";
import IMG1 from "../../assets/PhotoApp1.png";
import IMG2 from "../../assets/hotel_banner.jpg";
import IMG3 from "../../assets/shop.png";
import IMG4 from "../../assets//dashboard_project.jpg";
import IMG5 from "../../assets/cozy_project.jpg";
import IMG6 from "../../assets/papeleria_project.jpg";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hotel Miranda - WEBSITE",
      img: IMG2,
      description:
        "Provides information on services offered, rooms and amenities Allows reservations and contact customer service.",
      technologies: "HTML | CSS | Sass | JavaScript",
      link: "https://damiansebastians.github.io/Hotel_Miranda_FRONTEND/",
      github: "https://github.com/Damiansebastians/Hotel_Miranda_FRONTEND",
    },
    {
      id: 2,
      title: "PhotoReaction - Photo APP",
      img: IMG1,
      description: "App that finds and saves photos with the Unsplash api",
      technologies: "React | Redux | Api",
      link: "https://damiansebastians.github.io/photoreaction/",
      github: "https://github.com/Damiansebastians/PhotoReactionAPP_REACT",
    },
    {
      id: 3,
      title: "Hotel Miranda - DASHBOARD",
      img: IMG4,
      description:
        "Miranda Hotel dashboard, project to manage rooms, bookings, users and contacts",
      technologies: "React | TypeScript | Redux | Cypress | Jest",
      link: "https://damiansebastians.github.io/Hotel_Miranda_React_DASHBOARD/",
      github:
        "https://github.com/Damiansebastians/Hotel_Miranda_React_DASHBOARD",
    },
    {
      id: 4,
      title: "OXYGEN Shop",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS | Sass",
      link: "https://damiansebastians.github.io/OXYGENShop-Project/",
      github: "https://github.com/Damiansebastians/OXYGENShop-Project",
    },
    {
      id: 5,
      title: "Template - TeaCozy",
      img: IMG5,
      description: "Responsive website built based on a Figma design",
      technologies: "HTML | CSS | Figma",
      link: "https://damiansebastians.github.io/Template-TeaCozy/",
      github: "https://github.com/Damiansebastians/Template-TeaCozy",
    },
    {
      id: 6,
      title: "School Stationery - Store",
      img: IMG6,
      description:
        "It's a stationery store that makes requests to a database, uses queries and modifications to different tables, and displays its results to the user.",
      technologies: "PHP | SQL | JavaScript | Bootstrap",
      link: "https://damiansebastians.github.io/Proyecto-Papeleria/",
      github: "https://github.com/Damiansebastians/Proyecto-Papeleria",
    },
  ];

  return (
    <section id="portfolio">
      <h4>My Recent Works</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
