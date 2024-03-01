import React, { useEffect } from "react";
import "./ProjectDescription.css";
import { ProjectsInfo } from "../StaticInfo/ProjectsInfo";
import ScrollingMenu from "../ScrollingMenu/ScrollingMenu";
import M from "materialize-css";
import { SkillsInfo } from "../StaticInfo/SkillsInfo";

const ProjectDescription = (props) => {
  const { projectId, SetProjectId } = props;
  const projectDetails = ProjectsInfo[projectId];

  const handleOnBack = (event) => {
    SetProjectId(null);
  };

  useEffect(() => {
    let sidenav = document.querySelector("#mobile-nav");
    let instance = M.Sidenav.init(sidenav, {});

    // Close sidenav on link click
    let links = document.querySelectorAll(".sidenav a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        instance.close();
      });
    });
  }, []);

  useEffect(() => {
    // Destroy any previous ScrollSpy instances
    const scrollspyElements = document.querySelectorAll(".scrollspy");
    const instances = M.ScrollSpy.init(scrollspyElements, {});
    instances.forEach((instance) => instance.destroy());

    // Reinitialize ScrollSpy
    M.ScrollSpy.init(scrollspyElements, {});

    // Cleanup function to destroy ScrollSpy instances when component unmounts
    return () => {
      instances.forEach((instance) => instance.destroy());
    };
  }, [projectId]); // Add projectId as a dependency to reinitialize ScrollSpy when projectId changes

  const ProjectTableContents = [
    "ProjectTitle",
    "ProjectOverview",
    "ProjectTools",
    "Links",
  ];

  return (
    <>
      <ul className="sidenav" id="mobile-nav">
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        {ProjectTableContents.map((content, index) => (
          <li key={index}>
            <a href={`#${content}`}>{content}</a>
          </li>
        ))}
      </ul>
      <div className="col s12 m4 l4 left-section">
        <ScrollingMenu tableContents={ProjectTableContents}></ScrollingMenu>
      </div>
      <div className="col s12 m8 l8 right-section ">
        <div className="container">
          <section
            id="ProjectTitle"
            className="about custom-card section scrollspy"
          >
            <div className="profile-content">
              <h1 className="project-name">{projectDetails.title}</h1>
              <h5 className="project-intro">{projectDetails.description}</h5>
            </div>
            <div className="profile-switch">
              {projectDetails.livelink && (
                <a
                  className="btn green"
                  href={projectDetails.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </section>

          <section
            id="ProjectOverview"
            className="custom-card section scrollspy"
          >
            <div className="container center">
              <img
                className="responsive-img project-img"
                src={projectDetails.image}
                alt={projectDetails.title}
              />
            </div>
            <h4 className="project-title">Project Overview:</h4>
            {projectDetails.overview.map((paragraph, index) => (
              <p key={index} className="project-desc">
                {paragraph}
              </p>
            ))}
          </section>

          <section id="ProjectTools" className="custom-card section scrollspy">
            <div className="container">
              <h4 className="project-title">Tools Used:</h4>
              <div className="container">
                <div className="row center skills">
                  {projectDetails.tools.map((toolName, index) => {
                    const skill = SkillsInfo.find(
                      (skill) => skill.alt === toolName
                    );
                    if (skill) {
                      return (
                        <img
                          key={index}
                          src={skill.src}
                          alt={skill.alt}
                          className="tool-icon"
                        />
                      );
                    } else {
                      return (
                        <span key={index} className="tool-name">
                          {toolName}
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="Links" className="custom-card section scrollspy">
            <h4 className="project-title">Links:</h4>
            <div className="row">
              <div className="col s12 m4 left">
                {projectDetails.link && (
                  <div className="profile-switch">
                    <a
                      className="btn-large green"
                      href={projectDetails.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </div>
                )}
              </div>
              <div className="col s12 m4 center">
                {projectDetails.sourceCode && (
                  <div className="profile-switch">
                    <a
                      className="btn-large green"
                      href={projectDetails.sourceCode}
                    >
                      Code
                    </a>
                  </div>
                )}
              </div>
              <div className="col s12 m4 right">
                <div className="profile-switch">
                  <button className="btn-large green" onClick={handleOnBack}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectDescription;
