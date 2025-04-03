import "./style.css";
import profileImg from "../../assets/profile1.png";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import profile2 from "../../assets/profile2.png";
import codeIcon from "../../assets/code.svg";
import cognitivaIcon from "../../assets/cognitiva.png";
import uniritterIcon from "../../assets/uniritter.png";
import ilacIcon from "../../assets/ilac.png";
import wizardIcon from "../../assets/wizard.png";
import bradescoIcon from "../../assets/bradesco.png";
import reactIcon from "../../assets/react.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import javascriptIcon from "../../assets/js.svg";
import pythonIcon from "../../assets/python.png";
import locationIcon from "../../assets/location.svg";
import clockIcon from "../../assets/time.svg";
import certificateIcon from "../../assets/certificate.svg";
import langIcon from "../../assets/language.svg";
import { useState } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function LanguageSwitcher() {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "pt"
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={langIcon} alt="Language" />
        <span>{language === "pt" ? "PT-BR" : "ENG"}</span>
      </button>
      {isOpen && (
        <div className={`lang-dropdown ${isOpen ? "open" : ""}`}>
          <button onClick={() => toggleLanguage("pt")}>🇧🇷 PT-BR</button>
          <button onClick={() => toggleLanguage("en")}>🇺🇸 ENG</button>
        </div>
      )}
    </div>
  );
}

function EducationCard({ image, name, time, place, cert }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card-education card-effect"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <div className="education-info">
          <div>
            <img src={clockIcon} alt="" /> <h1>{time}</h1>
          </div>
          <div>
            <img src={locationIcon} alt="" /> <h1>{place}</h1>
          </div>
          <div>
            <img src={certificateIcon} alt="" /> <h1>{cert}</h1>
          </div>
        </div>
      ) : (
        <div className="education-default">
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
      )}
    </div>
  );
}

function Home() {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "pt"
  );

  useEffect(() => {
    setLanguage(localStorage.getItem("lang") || "pt");
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal(".infos-effect", {
      duration: 2000,
      origin: "top",
      distance: "100px",
    });

    sr.reveal(".profile-effect", {
      duration: 2000,
      origin: "top",
      distance: "100px",
    });

    sr.reveal(".profile2-effect", {
      duration: 2000,
      origin: "left",
      distance: "100px",
    });

    sr.reveal(".about-me-effect", {
      duration: 2000,
      origin: "right",
      distance: "100px",
    });

    sr.reveal(".card-effect", {
      duration: 2000,
      origin: "bottom",
      distance: "100px",
    });

    sr.reveal(".project-effect", {
      duration: 2000,
      origin: "left",
      distance: "100px",
    });

    sr.reveal(".exp-effect", {
      duration: 2000,
      origin: "right",
      distance: "100px",
    });
  }, []);
  return (
    <div className="content">
      <LanguageSwitcher />
      <section className="home">
        <div className="home-div">
          <div className="infos infos-effect">
            <p>{language === "pt" ? "Olá, eu sou" : "Hello, I am"}</p>
            <span>Felipe Angeli</span>
            <h1>
              {language === "pt" ? "Desenvolvedor Python" : "Python Developer"}
            </h1>

            <div className="social">
              <h1>{language === "pt" ? "Me encontre em" : "Find me on"}</h1>
              <div className="buttons">
                <a
                  href="https://github.com/FelipeAngeliAguiar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/felipeangeliaguiar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.instagram.com/felps.ksk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile profile-effect">
            <img src={profileImg} alt="Foto de perfil" />
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-div">
          <img src={profile2} className="profile-about-me profile2-effect" />
          <div className="about-me-infos about-me-effect">
            <div className="about-me-text">
              <h1>{language === "pt" ? "Sobre mim" : "About me"}</h1>
              <p>
                {language === "pt"
                  ? "Sou Felipe, um estudante de 19 anos apaixonado por tecnologia e programação. Tenho experiência em linguagens como Python, Java, JavaScript e HTML, além de fluência em inglês avançado. Estou em busca de novas oportunidades para expandir meu conhecimento e crescer profissionalmente nessa área fascinante."
                  : "I am Felipe, a 19-year-old student passionate about technology and programming. I have experience in languages such as Python, Java, JavaScript, and HTML, as well as fluency in advanced English. I am looking for new opportunities to expand my knowledge and grow professionally in this fascinating field."}
              </p>
            </div>

            <div className="skills">
              <h1>{language === "pt" ? "Habilidades" : "Skills"}</h1>
              <div className="skills-list">
                {[
                  { icon: javascriptIcon, name: "JavaScript" },
                  { icon: htmlIcon, name: "HTML" },
                  { icon: cssIcon, name: "CSS" },
                  { icon: reactIcon, name: "React" },
                  { icon: pythonIcon, name: "Python" },
                ].map((skill, index) => (
                  <div key={index} className="skills-card">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects-div">
          <div className="card project-effect">
            <h1>{language === "pt" ? "Projetos" : "Projects"}</h1>
            <div>
              <img src={codeIcon} alt="" />
              <h2>GaneshIA</h2>
            </div>
            <div>
              <p>
                {language === "pt"
                  ? "Uma IA feita para fazer Compras e Vendas automáticas no Mercado de Ações, automaticamente, usando prioritariamente a linguagem Python."
                  : "An AI designed to automatically buy and sell in the stock market, primarily using the Python language."}
              </p>
            </div>
          </div>
          <div className="card exp-effect">
            <h1>{language === "pt" ? "Experiências" : "Experiences"}</h1>
            <div>
              <img src={cognitivaIcon} alt="" />
              <h2>Cognitiva Brasil</h2>
            </div>
            <p>
              {language === "pt"
                ? "Estagiário em Desenvolvimento de Software, onde trabalhei com Python, HTML, CSS, JavaScript, SQL, Banco de Dados, React."
                : "Software Development Intern, where I worked with Python, HTML, CSS, JavaScript, SQL, Databases, and React."}
            </p>
          </div>
        </div>
      </section>
      <section className="education">
        <div className="education-div profile2-effect">
          <span>{language === "pt" ? "Educação" : "Education"}</span>
        </div>
        <div className="table-education">
          <div className="table-row">
            <EducationCard
              image={bradescoIcon}
              name="Colégio Fundação Bradesco"
              time="2009 - 2023"
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Ensino Médio Completo"
                  : "High School Diploma"
              }
            />
            <EducationCard
              image={wizardIcon}
              name="Wizard by Pearson"
              time="2017 - 2023"
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Inglês Intermediário"
                  : "Intermediate English"
              }
            />
          </div>
          <div className="table-row">
            <EducationCard
              image={ilacIcon}
              name="ILAC"
              time="2024"
              place="Toronto - Canadá"
              cert={language === "pt" ? "Inglês Avançado" : "Advanced English"}
            />
            <EducationCard
              image={uniritterIcon}
              name="Uniritter"
              time={language === "pt" ? "2024 - Cursando" : "2024 - Ongoing"}
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Bacharelado Ciência da Computação"
                  : "Bachelor's in Computer Science"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
