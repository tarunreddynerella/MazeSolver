import React from 'react';
import './Skills.css';
import { SkillsInfo } from '../StaticInfo/SkillsInfo'; 

function Skills() {
    return (
        <div>
            <div className="skills-container">
                {SkillsInfo.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img className='devicon' src={skill.src} alt={skill.alt} />
                        <p>{skill.alt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;