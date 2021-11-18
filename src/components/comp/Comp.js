import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css.png";
import dbeaver from "../../assets/dbeaver.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import mysql from "../../assets/mysql.png";
import php from "../../assets/php.png";
import react from "../../assets/react.png";
import symfony from "../../assets/symfony.png";
import "./Comp.css";

const Comp = () => {
  return (
    <div className="divb p-4" id="comp">
      <h2>Skills</h2>
      <div>
        <ul className="d-flex" id="skill">
          <li>
            <img src={html} alt="html5" />
          </li>
          <li>
            <img src={css} alt="css5" />
          </li>
          <li>
            <img src={javascript} alt="javascript" />
          </li>
          <li>
            <img src={react} alt="react js" />
          </li>
          <li>
            <img src={bootstrap} alt="bootstrap" />
          </li>
          <li>
            <img src={php} alt="php" />
          </li>
          <li>
            <img src={symfony} alt="symfony" />
          </li>
          <li>
            <img src={mysql} alt="mySQL" />
          </li>
          <li>
            <img src={dbeaver} alt="dbeaver" />
          </li>
        </ul>
        <p>agile scrum</p>
        <p>anglais</p>

        <p>Integration web</p>
        <p>responsive design</p>
        <p>Site avec CMS Wordpress</p>
      </div>

      <h2>Soft Skills</h2>
      <ul
        className="d-flex flex-wrap justify-content-center align-items-center m-4"
        id="skills"
      >
        <li className="skill3">Dynamique</li>
        <i class="fas fa-code"></i>
        <li>Motivée</li>
        <i class="fas fa-code"></i>
        <li>Esprit critique</li>
        <i class="fas fa-code"></i>
        <li className="skill2">Passionnée</li>
        <i class="fas fa-code"></i>
        <li>Réactive</li>
        <i class="fas fa-code"></i>
        <li className="skill3">Autonome</li>
        <i class="fas fa-code"></i>
        <li>A l'écoute</li>
        <i class="fas fa-code"></i>
        <li className="skill2">Sens du travail en équipe</li>
        <i class="fas fa-code"></i>
        <li>Solidaire</li>
        <i class="fas fa-code"></i>
        <li className="skill3">Curieuse</li>
        <i class="fas fa-code"></i>
        <li className="skill2">Rigoureuse</li>
        <i class="fas fa-code"></i>
        <li>Ouverture d'esprit</li>
        <i class="fas fa-code"></i>
        <li className="skill2">Créative</li>
      </ul>
    </div>
  );
};

export default Comp;
