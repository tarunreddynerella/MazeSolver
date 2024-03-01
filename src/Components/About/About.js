import React from "react";
import "./About.css";
import { AboutInfo } from "../StaticInfo/AboutInfo";

function About() {
    return (
        <section>
            <div className="mobile-header">
                <span className="intro">Hi, I'm</span>
                <span className="name">Tarun Reddy</span>
            </div>
            {AboutInfo.map((info, index) => (
                <div key={index} className="">
                    <p className="about-desc">{info.description}</p>
                </div>
            ))}
        </section>
    );
}

export default About;
