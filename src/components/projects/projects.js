import CustomCard from "../custom-card/CustomCard";
import projets from "../../data/projets";

const Projects = () => {
  return (
    <section className="diva row justify-content-around" id="projects">
      <h2>Projets</h2>
      {projets.map((p) => (
        <div key={p.id} className="col-md-6">
          <CustomCard {...p} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
