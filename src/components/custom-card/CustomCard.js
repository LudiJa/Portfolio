import "./custom-card.css";

const CustomCard = ({ img, title, state, techno, link, text }) => {
  return (
      <div className="example-2 card" id="proj">
        <div
            className="wrapper"
            style={{background: `url('${img}') 30% 1% / cover`}}
        >
          <div className="state">
            <span>{state}</span>
          </div>
          <div className="data">
            <div className="content">
              <span className="type">{techno}</span>
              <h1 className="title">
                <a href={link}>
                  <h3>{title}</h3>
                </a>
              </h1>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CustomCard;
