import CV from "../../CV.pdf";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="diva p-4 align-items-center" id="intro">
      <div className="card m-4 ">
        <div className="card-header" id="card-header">
          <h1 className="h3-responsive text-center">
            Développeuse front-end web / web mobile
          </h1>
        </div>
        <div className="card-body p-5 ">
          <div className="row">
            <div className=" col-12 col-sm-10">
              <p>
                <strong>
                  En recherche de stage à partir du 10 janvier 2022 - 2 à 6 mois
                </strong>
              </p>
              <p>
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
              </p>
              <p>
                Dynamique et toujours à la recherche de nouveaux challenges, je
                quitte la librairie pour le développement web, web mobile, et
                mobile.
                <p>
                  Motivée, curieuse, passionnée, je serai une stagiaire idéale
                  si vous acceptez de travailler avec moi à partir du 10 janvier
                  2022, pour une période allant de 2 à 6 mois, et pourquoi pas
                  pour plus longtemps par la suite ! Actuellement en formation
                  et travaillant sur des projets personnels avec React, SQL et
                  Symfony principalement, je souhaite continuer à évoluer et à
                  réaliser des sites et applications toujours plus innovants.
                </p>
              </p>
              <div className="d-flex gap-4 justify-content-end">
                <button type="button" class="btn btn-outline-info">
                  <a href={CV} target="_blank">
                    CV
                  </a>
                </button>
                <button type="button" class="btn btn-outline-info">
                  <a href="mailto:lud.jamin@gmail.com" target="_blank">
                    Contactez-moi !
                  </a>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-2" id="contacts">
              <i className="fas fa-bookmark" id="ifirst"></i>
              <ul id="contact">
                <li>
                  06 44 93 33 06 <i class="fas fa-mobile"></i>
                </li>
                <li>
                  BORDEAUX <i class="fas fa-map-marker-alt"></i>
                </li>
                <li>
                  <i class="fas fa-birthday-cake"></i> 27 ans
                </li>
                <li>
                  <i class="fas fa-car"></i> Véhiculée
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
