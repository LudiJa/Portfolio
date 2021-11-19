import stuliday from "../assets/stuliday.png";
import archi from "../assets/archi-maquette.jpg";
import portfolio from "../assets/portfolio.png";

const projets = [
  {
    id: 1,
    img: portfolio,
    title: "Mon portfolio",
    state: "à venir : amélioration du responsive",
    link: `#intro`,
    techno: "React - Bootstrap",
    text: "Premier projet réalisé à l'aide de React JS. En continuelle évolution ! ",
  },
  {
    id: 2,
    img: stuliday,
    title: "Location saisonnière",
    state: "En cours",
    link: `#`,
    techno: "PHP - MySQL",
    text: "Site de réservation de logement pour les vacances. Premier projet à l'aide de PHP. Recherche d'annonces par ville, page de connexion et d'inscription, espace utilisateur avec ajout, modification et suppression d'annonces, réservation, annulation, déconnexion.",
  },
  {
    id: 3,
    img: archi,
    title: "Portfolio architecte d'intérieur",
    state: "En cours : maquettage",
    link: "#",
    techno: "HTML / CSS - Javascript - Bootstrap",
    text: "Portoflio d'architecte d'intérieur à partir d'une maquette.",
  },
];

export default projets;
