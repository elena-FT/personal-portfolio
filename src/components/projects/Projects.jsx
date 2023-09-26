import React from 'react';
import "./projects.css";
import Works from './Works';

const Projects = () => {
    return (
        <div className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent works</span>

            <Works/>
        </div>
    )
}

export default Projects
