const Card = ({ image, link, name, description }) => {
  return (
    <div class="card">
      <div class="box">
        <img src={image} alt="" id="kbavis_logo"></img>
        <div class="text">
          <a href={link} target="_blank">
            {name}
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
