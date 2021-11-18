import "./Navbar.css";
import profil from "../../assets/profil.jpg";

const Navbar = () => {
  return (
    <div class="card profile-card-3 sticky-top">
      <div class="background-block">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/20/09/10/system-2660914_960_720.jpg"
          alt="profile-sample1"
          class="background"
        />
      </div>
      <div class="profile-thumb-block">
        <img src={profil} alt="profile-image" class="profile" />
      </div>
      <div class="card-content d-flex flex-column justify-content-between">
        <h2>
          Ludivine Jamin<small>Developpeuse web / web mobile</small>
        </h2>

        <div id="menu">
          <ul>
            <li>
              <a href="#intro">Web developpeuse</a>
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
          </ul>
        </div>

        <div class="icon-block d-flex justify-content-center" id="logo">
          <a
            className="nav-link"
            aria-current="page"
            href="https://www.linkedin.com/in/ludivine-jamin/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            className="nav-link"
            aria-current="page"
            href="https://github.com/LudiJa"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            className="nav-link"
            aria-current="page"
            href="mailto:lud.jamin@gmail.com"
          >
            <i class="fas fa-envelope-open"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
