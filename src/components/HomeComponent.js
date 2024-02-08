import React from "react";
import {
  FaGithub,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaLinkedin,
  FaReact,
  FaSass,
} from "react-icons/fa";

function Home() {
  return (
    <React.Fragment>
      <div className="header" id="home" href="#home">
        <div className="header-box text-center container">
          <h1>Hello! I'm <span className="fill-effect"> // Qoustyn // </span></h1>
          <h2>
            Welcome to my <span className="fill-effect">joyful</span> space on the <br /> internet.
          </h2>
          <p className="header-desc">I'm a <span className="fill-effect">UI</span> and <span className="fill-effect">Front-end Developer</span>.</p>
          <div className="logo-box">
            <a className="job-links" href="https://github.com/qoustynnn" target="_blank" rel="noreferrer noopener" >
              <FaGithub className="links-logo git-btn" size={55} />
            </a>
            <a className="job-links" href="https://www.linkedin.com/in/qoustyn-yang/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin className="links-logo linkedin" size={55} />
            </a>
          </div>
        </div>

        <a className="arrow" href="#about-me">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 56">
            <defs />
            <path
              d="M44.8 54.3c-2 0-3.9-.8-5.2-2.3l-36-39.5c-2.6-2.9-2.4-7.4.5-10s7.4-2.4 10 .5l30.7 33.7L75.4 3c2.6-2.9 7.1-3.1 10-.5s3.1 7.1.5 10L50 52a7 7 0 01-5.2 2.3z"
              fill="#596847"
            />
          </svg>
        </a>
      </div>

      <div
        className="about-me container-fluid g-0"
        id="about-me"
        href="#about-me"
      >
        <div className="row g-0">
          <div class="custom-shape-divider-top-1646091500">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <div className="row p-5">
          <div className="col about-section text-white">
            <div className="is-three-fifths p-5">
              <h2 className="footer-header">About Me</h2>
              <h3 className=" subtitle">
                I've always been someone who enjoyed logical things, yet I was
                drawn to the world of imagination and creativity. Front-end web
                development and web design was a perfect medium as it allows me
                to channel my creativity and my critical thinking logical side.
                Channeling my creativity allows me to see eye to eye with a designer, making sure
                there aren't details lost in translation when it comes time to code.
                When I'm not coding, you can find me enjoying a cup of coffee,
                completely immersed in a YA fantasy novel, or learning the art of coffee making.
              </h3>
              <a className="email-btn" href="https://docs.google.com/document/d/1VPQ8lGW5RGgZQi7w321arYmo2WloUJlQWvGVkZ4sYt0/edit?usp=sharing" target="_blank">View Resume</a>
            </div>
          </div>
        </div>
      </div>

      <div className="skills text-center container-fluid">
        <FaCss3Alt className="skill-logo" /> <FaFigma className="skill-logo" />{" "}
        <FaGithub className="skill-logo" />
        <FaHtml5 className="skill-logo" /> <FaJs className="skill-logo" />
        <FaReact className="skill-logo" /> <FaSass className="skill-logo" />
      </div>
    </React.Fragment>
  );
}

export default Home;
