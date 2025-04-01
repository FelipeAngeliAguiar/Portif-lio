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
import { useState } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

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
            <img src={clockIcon} alt="" /> <h1>
            {time}
            </h1>
          </div>
          <div>
            <img src={locationIcon} alt="" /> <h1>
              {place}
            </h1>
          </div>
          <div>
            <img src={certificateIcon} alt="" /> <h1>
              {cert}
            </h1>
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
      <section className="home">
        <div className="home-div">
          <div className="infos infos-effect">
            <p>Olá, eu sou</p>
            <span>Felipe Angeli</span>
            <h1>Desenvolvedor Python</h1>

            <div className="social">
              <h1>Me encontre em</h1>
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
              <h1>Sobre mim</h1>
              <p>
                Sou Felipe, um estudante de 19 anos apaixonado por tecnologia e
                programação. Tenho experiência em linguagens como Python, Java,
                JavaScript e HTML, além de fluência em inglês avançado. Estou em
                busca de novas oportunidades para expandir meu conhecimento e
                crescer profissionalmente nessa área fascinante.
              </p>
            </div>

            <div className="skills">
              <h1>Habilidades</h1>
              <div className="skills-list">
                <div className="skills-cards-row">
                  <div className="skills-cards">
                    <img src={javascriptIcon} alt="" />
                    Javascript
                  </div>
                  <div className="skills-cards">
                    <img src={htmlIcon} alt="" />
                    HTML
                  </div>
                  <div className="skills-cards">
                    <img src={cssIcon} alt="" />
                    CSS
                  </div>
                </div>
                <div className="skills-cards-row">
                  <div className="skills-cards">
                    <img src={reactIcon} alt="" />
                    React
                  </div>
                  <div className="skills-cards">
                    <img src={pythonIcon} alt="" />
                    Python
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects-div">
          <div className="card project-effect">
            <h1>Projetos</h1>
            <div>
              <img src={codeIcon} alt="" />
              <h2>GaneshIA</h2>
            </div>
            <div>
              <p>
                Uma IA feita para fazer Compras e Vendas automaticas no Mercado
                de Ações
              </p>
            </div>
          </div>
          <div className="card exp-effect">
            <h1>Experiências</h1>
            <div>
              <img src={cognitivaIcon} alt="" />
              <h2>Cognitiva Brasil</h2>
            </div>
            <p>
              Estagiário em Desenvolvimento de Software, onde trabalhei com
              Python e JavaScript
            </p>
          </div>
        </div>
      </section>
      <section className="education">
        <div className="education-div profile2-effect">
          <span>Educação</span>
        </div>
        <div className="table-education">
          <div className="table-row">
            <EducationCard
              image={bradescoIcon}
              name="Colégio Fundação Bradesco"
              time="2009 - 2023"
              place="Gravataí - Brasil"
              cert="Ensino Médio Completo"
            />
            <EducationCard
              image={wizardIcon}
              name="Wizard by Pearson"
              time="2017 - 2023"
              place="Gravataí - Brasil"
              cert="Inglês Intermediário"
            />
          </div>
          <div className="table-row">
            <EducationCard
              image={ilacIcon}
              name="ILAC"
              time="2024"
              place="Toronto - Canadá"
              cert="Inglês Avançado"
            />
            <EducationCard
              image={uniritterIcon}
              name="Uniritter"
              time="2024 - Cursando"
              place="Gravataí - Brasil"
              cert="Bacharelado Ciência da Computação"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
