import React from "react";
import "./Project.css";
import { ProjectsInfo } from "../StaticInfo/ProjectsInfo";

function Project(props) {
	const { SetProjectId } = props;
	const handleProjectRedirection = (event) => {
		SetProjectId(event.target.id);
	};
	return (
		<div>
			<div className="projects-container">
				{ProjectsInfo.map((project, index) => (
					<div key={index} className="card project-box">
						<div className="center">
							<img
								src={project.image}
								alt={project.title}
								className="responsive-img"
							/>
						</div>
						<div className="card-content">
							<div className="project-title">{project.title}</div>
							<div className="project-date">{project.date}</div>
							<div className="card-action project-description">
								{project.description}
								<br></br>
								<a
									className="btn green wave-effect right"
									href="#ProjectTitle"
									rel="noreferrer"
									id = {index}
									onClick={handleProjectRedirection}>
									<i className="fas fa-laptop-code"></i> Explore more
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Project;
