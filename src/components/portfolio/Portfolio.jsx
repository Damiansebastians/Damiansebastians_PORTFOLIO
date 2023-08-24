import React from 'react';
import IMG1 from '../../assets/PhotoApp1.png';
import IMG2 from '../../assets/hotel_banner.jpg';
import IMG3 from '../../assets/shop.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Hotel Miranda - WEBSITE',
      img: IMG2,
      description: 'Provides information on services offered, rooms and amenities Allows reservations and contact customer service.',
      technologies: 'HTML | CSS | Sass | JavaScript',
      link: 'https://damiansebastians.github.io/Hotel_Miranda_FRONTEND/',
      github: 'https://github.com/Damiansebastians/Hotel_Miranda_FRONTEND',
    },
    {
      id: 2,
      title: 'PhotoReaction',
      img: IMG1,
      description:
        'App that finds and saves photos with the Unsplash api',
      technologies: 'React | Redux | Api',
      link: 'https://damiansebastians.github.io/photoreaction/',
      github: 'https://github.com/Damiansebastians/PhotoReactionAPP_REACT',
    },
    {
      id: 3,
      title: 'Hotel Miranda DASHBOARD',
      img: IMG4,
      description:
        'Miranda Hotel dashboard, project to manage rooms, bookings, users and contacts',
      technologies: 'React | TypeScript | Redux | Cypress | Jest',
      link: 'https://damiansebastians.github.io/Hotel_Miranda_React_DASHBOARD/',
      github: 'https://github.com/Damiansebastians/Hotel_Miranda_React_DASHBOARD',
    },
    {
      id: 4,
      title: 'OXYGEN Shop',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS | Sass',
      link: 'https://damiansebastians.github.io/OXYGENShop-Project/',
      github: 'https://github.com/Damiansebastians/OXYGENShop-Project',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
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
