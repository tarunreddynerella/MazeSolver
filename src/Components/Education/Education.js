import React, { useState } from "react";
import "./Education.css";
import { EducationInfo } from "../StaticInfo/EducationInfo";

function Education() {
	const [selectedEducation, setSelectedEducation] = useState(null);

	const handleEducationClick = (index) => {
		if (selectedEducation === index) {
			setSelectedEducation(null);
		} else {
			setSelectedEducation(index);
		}
	};

	return (
		<div>
			<div className="education-container">
				{EducationInfo.map((edu, index) => (
					<div key={index} className="education-card hoverable">
						<div className="card-content" onClick={() => handleEducationClick(index)}>
							<span className="card-title">{edu.title}</span>
							<p>{edu.institution}</p>
							<p>{edu.date}</p>
						</div>
						<div
							className={`card-action ${
								selectedEducation === index ? "active" : ""
							} edu-description`}>
							<p>{edu.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Education;
