const Card = ({ project }) => {
  return (
    <div class="card">
      <div class="box">
        <img src={project.image} alt="" id="kbavis_logo"></img>
        <div class="text">
          <a href={project.link} target="_blank">
            {project.name}
          </a>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Card;
