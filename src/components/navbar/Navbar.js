import "./Navbar.css";
import profil from "../../assets/profil.jpg";

const Navbar = () => {
  return (
    <div className="card profile-card-3 sticky-top" id="navbar">
      <div className="background-block">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/20/09/10/system-2660914_960_720.jpg"
          alt="profile-sample1"
          className="background"
        />
      </div>
      <div className="profile-thumb-block">
        <img src={profil} alt="profile-image" className="profile" />
      </div>
      <div className="card-content d-flex flex-column justify-content-between">
        <h2>
          Ludivine Jamin<small>Developpeuse web / web mobile</small>
        </h2>

        <div id="menu">
          <ul>
            <li>
              <a href="#intro">Web developpeuse</a>
            </li>
            <li>
              <a href="#comp">compétences</a>
            </li>
            <li>
              <a href="#projects">projets</a>
            </li>
            <li>
              <a href="#exps">expériences</a>
            </li>
          </ul>
        </div>

        <div className="icon-block d-flex justify-content-center" id="logo">
          <a
            className="nav-link"
            aria-current="page"
            href="https://www.linkedin.com/in/ludivine-jamin/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="nav-link"
            aria-current="page"
            href="https://github.com/LudiJa"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="nav-link"
            aria-current="page"
            href="mailto:lud.jamin@gmail.com"
          >
            <i className="fas fa-envelope-open"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
