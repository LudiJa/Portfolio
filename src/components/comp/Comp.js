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
    <section className="divb" id="comp">
      <h2>Compétences</h2>
      <div className=" d-flex flex-column justify-content-around">
        <div className="row mt-2 gap-5 justify-content-center">
          <div className="col-md-4">
            <ul className="d-flex" id="skill">
              <div>
                <li>
                  <img src={html} alt="html5" />
                </li>
                <li>
                  <img src={css} alt="css5" />
                </li>
                <li>
                  <img src={javascript} alt="javascript" />
                </li>
              </div>
              <div>
                <li>
                  <img src={react} alt="react js" />
                </li>
                <li>
                  <img src={bootstrap} alt="bootstrap" />
                </li>
                <li>
                  <img src={php} alt="php" />
                </li>
              </div>
              <div>
                <li>
                  <img src={symfony} alt="symfony" />
                </li>
                <li>
                  <img src={mysql} alt="mySQL" />
                </li>
                <li>
                  <img src={dbeaver} alt="dbeaver" />
                </li>
              </div>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="d-flex flex-column justify-content-around" id="work">
              <li>
                <i class="fas fa-laptop-code"></i> Integration web
              </li>
              <li>
                {" "}
                <i class="fas fa-mobile-alt"></i> Responsive design
              </li>
              <li>
                <i class="fab fa-wordpress"></i> Site avec CMS Wordpress{" "}
              </li>
              <li>
                <i class="fas fa-paste"></i> Méthode Agile Scrum
              </li>
              <li>
                <i class="fas fa-comments"></i> Anglais professionnel
              </li>
            </ul>
          </div>
        </div>

        <ul
          className="d-flex flex-wrap justify-content-center align-items-center"
          id="skills"
        >
          <li className="skill3">Dynamique</li>
          <i class="fas fa-code"></i>
          <li>Motivée</li>
          <i class="fas fa-code"></i>
          <li>Force de proposition</li>
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
    </section>
  );
};

export default Comp;
