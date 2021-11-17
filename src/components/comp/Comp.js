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
        <ul className="d-flex justify-content-center">
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
        </ul>
        <ul className="d-flex justify-content-center">
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
      </div>

      <h2>SOFT SKILLS</h2>
      <div className="d-flex justify-content-center align-items-center">
        <p>mot </p>
        <i class="fas fa-code"></i>
        <span> mot </span>
        <i class="fas fa-code"></i>
        <p> mot </p>
        <i class="fas fa-code"></i>
        <span> fromage </span>
      </div>
    </div>
  );
};

export default Comp;
