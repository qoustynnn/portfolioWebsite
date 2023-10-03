import React from "react";
import PortfolioData from "./Modal/ModalComponent.js";
import { Projects } from "../shared/projects";


function Portfolio() {
  return (
    <React.Fragment>
      <section
        className="section projects is-medium text-center"
        id="portfolio"
        href="#portfolio"
      >
        <div className="container">
          <h1 className="mb-4">My Recent Work</h1>
          <div className="project-grid">
            <div className="row d-flex">
            <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[7].name}</h1>
                    <PortfolioData
                      title={Projects[7].name}
                      description={Projects[7].description}
                      subject={Projects[7].subject}
                      image={Projects[7].image}
                      github={Projects[7].github}
                      websiteUrl={Projects[7].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[0].name}</h1>
                    <PortfolioData
                      title={Projects[0].name}
                      description={Projects[0].description}
                      subject={Projects[0].subject}
                      image={Projects[0].image}
                      github={Projects[0].github}
                      websiteUrl={Projects[0].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[1].name}</h1>
                    <PortfolioData
                      title={Projects[1].name}
                      description={Projects[1].description}
                      subject={Projects[1].subject}
                      image={Projects[1].image}
                      github={Projects[1].github}
                      websiteUrl={Projects[1].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[2].name}</h1>
                    <PortfolioData
                      title={Projects[2].name}
                      description={Projects[2].description}
                      subject={Projects[2].subject}
                      image={Projects[2].image}
                      github={Projects[2].github}
                      websiteUrl={Projects[2].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[3].name}</h1>
                    <PortfolioData
                      title={Projects[3].name}
                      description={Projects[3].description}
                      subject={Projects[3].subject}
                      image={Projects[3].image}
                      github={Projects[3].github}
                      websiteUrl={Projects[3].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[6].name}</h1>
                    <PortfolioData
                      title={Projects[6].name}
                      description={Projects[6].description}
                      subject={Projects[6].subject}
                      image={Projects[6].image}
                      github={Projects[6].github}
                      websiteUrl={Projects[6].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[4].name}</h1>
                    <PortfolioData
                      title={Projects[4].name}
                      description={Projects[4].description}
                      subject={Projects[4].subject}
                      image={Projects[4].image}
                      github={Projects[4].github}
                      websiteUrl={Projects[4].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 column">
                <figure className="image">
                  <img className="project-thumb" src={Projects[1].thumb}></img>
                  <div className="project-thumb-2" />
                  <figcaption>
                    <h1 className="text-white font-size">{Projects[5].name}</h1>
                    <PortfolioData
                      title={Projects[5].name}
                      description={Projects[5].description}
                      subject={Projects[5].subject}
                      image={Projects[5].image}
                      github={Projects[5].github}
                      websiteUrl={Projects[5].websiteUrl}
                    />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
