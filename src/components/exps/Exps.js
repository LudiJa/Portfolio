import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Exps.css";

const Exps = () => {
  return (
    <div className="divb" id="exps">
      {/* diplomes */}
      <h2>diplômes et expériences</h2>
      <div className="education">
        <div class="container" id="dipl">
          <div class="row justify-content-around">
            <div class="col-md-3 col-sm-6">
              <div class="card card-block m-2">
                <div className="card-header" id="wf3">
                  <i class="fas fa-terminal"></i>
                  <h3>
                    Développeur web / web mobile <br /> Titre professionnel{" "}
                  </h3>
                  <div></div>
                </div>
                <div className="card-body">
                  <h4 class="card-title  mt-3 mb-3">
                    En cours - WebForce3 Bordeaux
                  </h4>
                  <p class="card-text">
                    Formation FullStack : HTML/CSS - Javascript/JQuery - Angular
                    - Wordpress - SQL - PHP - Symfony - Projet de groupe.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card card-block m-2">
                <div className="card-header" id="lib">
                  <i class="fas fa-book"></i>
                  <h3>DUT édition - librairie </h3>
                  <div></div>
                </div>
                <div className="card-body">
                  <h4 class="card-title  mt-3 mb-3">
                    2019 - IUT Bordeaux Montaigne
                  </h4>
                  <p class="card-text">
                    DUT orientation libraire, option arts et sciences humaines.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="card card-block m-2">
                <div className="card-header" id="jap">
                  <i class="fas fa-language" id="lang"></i>
                  <h3>LLCER III Japonais </h3>
                  <div></div>
                </div>
                <div className="card-body">
                  <h4 class="card-title  mt-3 mb-3">
                    2016 - Université Bordeaux Montaigne
                  </h4>
                  <p class="card-text">
                    Licence langue, littérature et civilisation japonaise. J'ai
                    vécu 2 mois au Japon, en plus de plusieurs séjours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="between"></div>

        {/* exps */}
        <div>
          <div className="timeline">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #64BAC7",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #64BAC7",
                }}
                date="avril 2021 - present"
                iconStyle={{ background: "#64BAC7", color: "#000" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Rédactrice fiches de lecture - anglais
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bayard éditions
                </h4>
                <p class="font-weight-normal">
                  Lecture de manuscrits anglais et rédaction de fiches de
                  lecture.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #3d424f",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #3d424f",
                }}
                date="2018 - 2020"
                iconStyle={{ background: "#3d424f", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Libraire</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Librairie Mollat, Bordeaux
                </h4>
                <p class="font-weight-normal">
                  Sciences humaines, jeunesse, tourisme et arts de vivre,
                  scolaire, accueil et caisse. <br />
                  Relation et conseil client, gestion de stock et organisation,
                  animation librairie.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #3d424f",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #3d424f",
                }}
                date="février 2018 - mars 2018"
                iconStyle={{ background: "#3d424f", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Libraire</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  La Machine à Lire, Bordeaux
                </h4>
                <p class="font-weight-normal">
                  Sciences humaines, tourisme. <br />
                  Relation et conseil client, gestion de stock et organisation,
                  animation librairie/stand/site internet.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #3d424f",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #3d424f",
                }}
                date="2016 - 2017"
                iconStyle={{ background: "#3d424f", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Employée polyvalente
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Intermarché, Talence
                </h4>
                <p class="font-weight-normal">
                  Réception de commande, inventaire, mise en rayon, gestion de
                  stock.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exps;
