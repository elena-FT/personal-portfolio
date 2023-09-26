import React from "react";
import "./skills.css"
import Frontend from "./Frontend.jsx"
import Backend from "./Backend.jsx"
import Logiciels from "./Logiciel";
import Environnement from "./Environnement"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
                <Logiciels />
                <Environnement />
            </div>
        </section>
    )
}

export default Skills;