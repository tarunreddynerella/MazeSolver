import React, { useState } from "react";
import "./Experience.css";
import { ExperiencesInfo } from "../StaticInfo/ExperienceInfo";
function Experience() {
	const [selectedExperience, setSelectedExperience] = useState(null);

	const handleExperienceClick = (index) => {
		if (selectedExperience === index) {
			setSelectedExperience(null);
		} else {
			setSelectedExperience(index);
		}
	};

	return (
		<div>
			<div className="experience-container">
				{ExperiencesInfo.map((exp, index) => (
					<div key={index} className="card experience-card hoverable">
						<div className="card-content" onClick={() => handleExperienceClick(index)}>
							<span className="card-title">{exp.title}</span>
							<p>{exp.date}</p>
						</div>
						<div
							className={`card-action ${
								selectedExperience === index ? "active" : ""
							}`}>
							<p>{exp.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Experience;
