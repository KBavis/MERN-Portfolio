import "../App.css";
import profilePicture from "../images/profile_pic.jpg";

const About = () => {
  const skills = [
    "Java",
    "C",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Linux",
    "Git",
    "GitHub",
    "TensorFlow",
    "AWS",
    "NodeJS",
    "ExpressJS",
    "ReactJS",
    "MongoDB",
    "Docker",
    "SQL",
  ];

  return (
    <div className="about" id="about">
      <div className="about-content">
        <h2 className="title">About Me</h2>
        <div className="about-columns">
          <div className="column left">
            <img src={profilePicture} alt="" />
          </div>
          <div className="column right">
            <div class="text">
              Get to know <span>me!</span>
            </div>
            <p>
              I'm a Software Engineer who primarly focuses on Backend, but also
              posesses the knowledge needed to develop web applications such as
              this one! Backend has always been my expertise, but my desire to
              <span> learn</span> and <span>create</span> has caused me to begin
              learning the necessary technologies needed to work on the
              Front-End as well. I'm a highly ambitious and performance-driven
              individual who will take the necessary steps needed to complete a
              given workload within strict timelines. My <span> skills</span>{" "}
              include the following:
            </p>
            <p className="my-skills">
              {skills &&
                skills.map((skill) => (
                  <a className="skill" href="#">
                    {skill}
                  </a>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
