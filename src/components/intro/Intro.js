import CV from "../../CV.pdf";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="diva" id="intro">
      <h1>Développeuse web / web mobile</h1>
      <div className="card p-4 m-4">
        <div className="row">
          <div className=" col-12 col-sm-10">
            <h3>
              En recherche de stage à partir du 10 janvier 2022 - 6 mois
            </h3>
            <div className="personal-sm" id="logo">
              <ul className="d-flex gap-3 p-0">
                <li>
                  <a
                      href="https://www.linkedin.com/in/ludivine-jamin/"
                      target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/LudiJa" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div id="pres">
              <p>
                Développeuse web en formation, je travaille aussi en autonomie,
                et je me sens à l'aise avec <span>React JS</span> ,{" "}
                <span>SQL</span> et <span>PHP</span> sur mes projets. Je
                souhaite approfondir mes connaissances dans les langages et
                frameworks liés à <span>Javascript</span>, notament React JS et
                React Native. Je m'oriente <span>développement web</span> et
                souhaite en apprendre plus que le{" "}
                <span>développement d'applications mobiles</span>.
              </p>
              <p>
                Dynamique et ayant envie de nouveaux challenges, je recherche
                une entreprise prête à travailler avec moi. Je saurai être un
                atout dans votre équipe grâce à ma motivation à me perfectionner
                et mon efficacité à accomplir les tâches qui me sont données.
                Sur site ou en télétravail, l'important pour moi est la{" "}
                <span>communication</span> avec l'équipe et la possibilité d'en
                apprendre toujours plus pour créer et innover.
              </p>
              <p>
                Je me suis reconvertie dans le développement après avoir été
                libraire. Riche intellectuellement, mais aussi physique, j'ai pu
                développer des compétences de communication et d'accompagnement,
                avec les équipes et les clients, mais aussi de gestion et
                d'autonomie. J'aimerai aujourd'hui écouter ma soif de nouveauté
                en me tournant vers un métier toujours en mouvement.
              </p>
              <p id="loisirs">
                <i className="fas fa-plane"></i>
                <i className="fas fa-book-open"></i>
                <i className="fas fa-gamepad"></i>
                <i className="fas fa-dice-d20"></i>
                <i className="fas fa-music"></i>
                <i className="fas fa-volleyball-ball"></i>
              </p>
              <p>
                Passionnée de voyages et de littérature, j'aime découvrir et
                comprendre le monde, sa nature et ses peuples. La musique est
                également une partie importante de ma vie, je pratique le piano
                depuis 1 an et le cornet depuis 20 ans. J'aime créer de mes
                mains par ce biais, mais également par la réalisation
                d'amigurumi (petites figures) en crochet, un loisir qui demande
                beaucoup de patience et de minutie.
              </p>
            </div>
            <div className="d-flex gap-4 justify-content-end" id="btncontact">
              <a href={CV} target="_blank">
                <div id="btn">
                  <span className="noselect">Mon CV</span>
                  <div id="circle"></div>
                </div>
              </a>
              <a href="mailto:lud.jamin@gmail.com" target="_blank">
                <div id="btn">
                  <span className="noselect">Contact me</span>
                  <div id="circle"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-2" id="contacts">
            <i className="fas fa-bookmark" id="ifirst"></i>
            <ul id="contact">
              <li>
                06 44 93 33 06 <i className="fas fa-mobile"></i>
              </li>
              <li>
                BORDEAUX <i className="fas fa-map-marker-alt"></i>
              </li>
              <li>
                <i className="fas fa-birthday-cake"></i> 27 ans
              </li>
              <li>
                <i className="fas fa-car"></i> Véhiculée
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
