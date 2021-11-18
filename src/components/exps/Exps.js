import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Exps.css";

const Exps = () => {
  return (
    <div className="divb p-4" id="exps">
      {/* diplomes */}
      <div className="education">
        <h2>diplômes</h2>
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
                  <h4 class="card-title  mt-3 mb-3">En cours - WebForce3</h4>
                  <p class="card-text">
                    Licence langue, littérature et civilisation japonaise
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
                    Licence langue, littérature et civilisation japonaise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* exps */}
        <div>
          <h2>expériences</h2>
          <div className="timeline">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #05446d",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #05446d",
                }}
                date="avril 2021 - present"
                iconStyle={{ background: "#05446d", color: "#000" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Rédactrice fiches de lecture - anglais
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bayard éditions
                </h4>
                <p>
                  Lecture de manuscrits anglais et rédaction de fiches de
                  lecture.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#fff",
                  color: "#000",
                  border: "solid 1px #002745",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #002745",
                }}
                date="2018 - 2020"
                iconStyle={{ background: "#002745", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Libraire</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Librairie Mollat, Bordeaux
                </h4>
                <p>
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
                  border: "solid 1px #002745",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #002745",
                }}
                date="février 2018 - mars 2018"
                iconStyle={{ background: "#002745", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">Libraire</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  La Machine à Lire, Bordeaux
                </h4>
                <p>
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
                  border: "solid 1px #002745",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #002745",
                }}
                date="2016 - 2017"
                iconStyle={{ background: "#002745", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title">
                  Employée polyvalente
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Intermarché, Talence
                </h4>
                <p>
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
