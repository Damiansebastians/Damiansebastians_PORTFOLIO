import React, { useState } from "react";
import { FaAward } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/Me_intro.jpg";
import "./intro.css";

const Intro = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Get to know",
      subtitle: "About Me",
      experience: "Experience",
      projects: "Projects",
      date: "1 Year",
      completed: "+10 Completed proyects",
      aboutMe:
        "In my constant search for new challenges, I reinvented myself as a Full Stack developer. He applied my skills on both frontend and backend to create attractive and functional applications. This transition has allowed me to merge my financial knowledge with my passion for technology, resulting in innovative and user-focused solutions.",
      aboutMe2:
        "He worked with technologies from the MERN stack (MongoBD, Express, React and Node), with solid knowledge in design (CSS and Sass), backend (PHP and Laravel) and databases (Relational and Non-Relational) to achieve comprehensive solutions.",
      aboutMe3:
        "My approach goes further, I am committed to teamwork and collaboration. I believe in the importance of assertive communication and adaptability in dynamic environments. My goal is to be part of a team where I can contribute my technical skills and my strategic vision to achieve the objectives set.",
      aboutMe4:
        "If you want to chat with me about any opportunity, you can use this same route or my email",
      contactBtn: "Let's Talk",
    },
    es: {
      title: "Conoce",
      subtitle: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      date: "1 Año",
      completed: "+10 Proyectos completados",
      aboutMe:
        "En mi búsqueda constante de nuevos desafíos, me reinventé como desarrollador Full Stack. Aplicó mis habilidades tanto en el frontend como en el backend para crear aplicaciones atractivas y funcionales. Esta transición me ha permitido fusionar mis conocimientos financieros con mi pasión por la tecnología, lo que resulta en soluciones innovadoras y centradas en el usuario.",
      aboutMe2:
        "Trabajó con tecnologías del stack MERN (MongoBD, Express, React y Node), con conocimientos sólidos en diseño (CSS y Sass), backend (PHP y Laravel) y bases de datos (Relacionales y No Relacionales) para lograr soluciones integrales.",
      aboutMe3:
        "Mi enfoque va más allá, estoy comprometido con el trabajo en equipo y la colaboración. Creo en la importancia de la comunicación asertiva y la adaptabilidad en entornos dinámicos. Mi objetivo es formar parte de un equipo donde pueda aportar mis habilidades técnicas y mi visión estratégica para lograr los objetivos planteados.",
      aboutMe4:
        "Si quieres charlar conmigo acerca de cualquier oportunidad, puedes utilizar esta misma vía o mi mail",
      contactBtn: "Hablemos",
    },
  };

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <section id="about">
      <button className="btn btn-secundary" onClick={handleLanguageChange}>
        {language === "en" ? "Español" : "English"}
      </button>
      <h3>{content[language].title}</h3>
      <h2>{content[language].subtitle}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" style={{ fontSize: "26px" }} />
              <h5>{content[language].experience}</h5>
              <small>{content[language].date}</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary
                className="about__icon"
                style={{ fontSize: "26px" }}
              />
              <h5>{content[language].projects}</h5>
              <small>{content[language].completed}</small>
            </article>
          </div>
          <p>{content[language].aboutMe}</p>
          <p>{content[language].aboutMe2}</p>
          <p>{content[language].aboutMe3}</p>
          <p>
            {content[language].aboutMe4} <AiOutlineMail />{" "}
            damiansebastians@gmail.com.
          </p>
          <a href="#contact" className="btn btn-primary">
            {content[language].contactBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
