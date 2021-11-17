import "./custom-card.css";

const CustomCard = ({ img, title, state, techno, link, text }) => {
  return (
    <div class="example-2 card m-3" id="proj">
      <div
        class="wrapper"
        style={{ background: `url('${img}') 30% 1% / cover no-repeat` }}
      >
        <div class="date">
          <span class="month">{state}</span>
        </div>
        <div class="data">
          <div class="content">
            <span class="type">{techno}</span>
            <h1 class="title">
              <a href={link}>{title}</a>
            </h1>
            <p class="text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
