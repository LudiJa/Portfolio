import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Exps = () => {
  return (
    <div className="divb p-4" id="exps">
      {/* diplomes */}
      <div className="education">
        <h2>diplômes</h2>
        <div className="row justify-content-around">
          <div className="col-lg-3">
            <div className="card bg-light">
              <div className="card-header" id="card-header">
                <h3>LLCER III japonais</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  2016 - Université Bordeaux Montaigne
                </h5>
                <p className="card-text">
                  Licence langue, littérature et civilisation japonaise
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-light">
              <div className="card-header" id="card-header">
                <h3>DUT édition - librairie</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">2019 - IUT Bordeaux Montaigne</h5>
                <p className="card-text">
                  DUT orientation libraire, option arts et sciences humaines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-light">
              <div className="card-header" id="card-header">
                <h3>Développeur web et web mobile - Titre professionnel</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">En cours - WebFoce3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                border: "solid 1px #e1d0b6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(174, 148, 79)",
              }}
              date="avril 2021 - present"
              iconStyle={{ background: "rgb(174, 148, 79)", color: "#000" }}
            >
              <h4 className="vertical-timeline-element-title">
                Rédactrice fiches de lecture - anglais
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Bayard éditions
              </h5>
              <p>
                Lecture de manuscrits anglais et rédaction de fiches de lecture.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000",
                border: "solid 1px #E1D0B6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #E1D0B6",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#E1D0B6", color: "#fff" }}
            >
              <h4 className="vertical-timeline-element-title">Libraire</h4>
              <h5 className="vertical-timeline-element-subtitle">
                Librairie Mollat, Bordeaux
              </h5>
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
                border: "solid 1px #E1D0B6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #E1D0B6",
              }}
              date="février 2018 - mars 2018"
              iconStyle={{ background: "#E1D0B6", color: "#fff" }}
            >
              <h4 className="vertical-timeline-element-title">Libraire</h4>
              <h5 className="vertical-timeline-element-subtitle">
                La Machine à Lire, Bordeaux
              </h5>
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
                border: "solid 1px #E1D0B6",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #E1D0B6",
              }}
              date="2016 - 2017"
              iconStyle={{ background: "#E1D0B6", color: "#fff" }}
            >
              <h4 className="vertical-timeline-element-title">
                Employée polyvalente
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Intermarché, Talence
              </h5>
              <p>
                Réception de commande, inventaire, mise en rayon, gestion de
                stock.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Exps;
