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

function Home() {
  return (
    <div className="content">
      <section className="home">
        <div className="home-div">
          <div className="infos">
            <p>Olá, eu sou</p>
            <span>Felipe Angeli Cardoso de Aguiar</span>
            <h1>Desenvolvedor Python</h1>
            <button className="contato">Contato</button>
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
          <div className="profile">
            <img src={profileImg} alt="Foto de perfil" />
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-div">
          <img src={profile2} className="profile-about-me" />
          <div className="about-me-infos">
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
              <h1>Habilidades em</h1>
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
          <div className="card">
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
          <div className="card">
            <h1>Experiências</h1>
            <div>
              <img src={cognitivaIcon} alt="" />
              <h2>Cognitiva Brasil</h2>
            </div>
            <p>
              Estagiário em Desenvolvimento de Software, onde trabalhei com
              Python e JavaScript, desenvolvendo soluções inovadoras para
              clientes.
            </p>
          </div>
        </div>
      </section>
      <section className="education">
        <div className="education-div">
          <span>Educação</span>
        </div>
        <table className="table-education">
          <div className="table-row">
            <card className="card-education">
              <img src={bradescoIcon} alt="" />
              <h1>Colégio Fundação Bradesco</h1>
            </card>
            <card className="card-education">
              <img src={wizardIcon} alt="" />
              <h1>Wizard by Pearson</h1>
            </card>
          </div>
          <div className="table-row">
            <card className="card-education">
              <img src={ilacIcon} alt="" />
              <h1>ILAC</h1>
            </card>
            <card className="card-education">
              <img src={uniritterIcon} alt="" />
              <h1>Uniritter</h1>
            </card>
          </div>
        </table>
      </section>
    </div>
  );
}

export default Home;
