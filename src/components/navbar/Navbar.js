import "./Navbar.css";
import profil from "../../assets/profil.jpg";

const Navbar = () => {
  return (
    <div class="card profile-card-3 sticky-top">
      <div class="background-block">
        <img
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="profile-sample1"
          class="background"
        />
      </div>
      <div class="profile-thumb-block">
        <img src={profil} alt="profile-image" class="profile" />
      </div>
      <div class="card-content d-flex flex-column justify-content-around">
        <h2>
          Ludivine Jamin<small>Developpeuse web / web mobile</small>
        </h2>

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
          </ul>
        </div>
        <div class="icon-block d-flex justify-content-center">
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

// {/* <div>
{
  /* <h2>Ludivine Jamin</h2>
<img src={profil} alt="profil picture" id="profil" />
</div> */
}

{
  /* liens vers components */
}
{
  /* <div id="menu">
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
  </li> */
}
{
  /* <li>
    <a href="#interest">Un peu plus...</a>
  </li> */
}
{
  /* </ul>
</div> */
}
{
  /* liens externes */
}
{
  /* <div id="logo">
<ul className="nav justify-content-center">
  <li>
    
  </li>
  <li>
    
  </li>
  <li>
    
  </li>
</ul>
</div> */
}
