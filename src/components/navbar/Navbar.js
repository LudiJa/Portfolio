import "./Navbar.css";
import profil from "../../assets/profil.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top d-flex flex-column justify-content-between">
      <div>
        <h1>Ludivine Jamin</h1>
        <img src={profil} alt="profil picture" id="profil" />
      </div>

      {/* liens vers components */}
      <div id="menu">
        <ul>
          <li>
            <a href="#intro">Webdeveloppeuse</a>
          </li>
          <li>
            <a href="#comp">Ses compétences</a>
          </li>
          <li>
            <a href="#projects">Ses projets</a>
          </li>
          <li>
            <a href="#exps">Ses expériences</a>
          </li>
          <li>
            <a href="#interest">Un peu plus...</a>
          </li>
        </ul>
      </div>

      {/* liens externes */}
      <div id="logo">
        <ul className="nav justify-content-center">
          <li>
            <a
              className="nav-link"
              aria-current="page"
              href="https://www.linkedin.com/in/ludivine-jamin/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              aria-current="page"
              href="https://github.com/LudiJa"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              aria-current="page"
              href="mailto:lud.jamin@gmail.com"
            >
              <i class="fas fa-envelope-open"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
