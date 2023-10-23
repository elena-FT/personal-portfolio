import React from 'react';
import "./resume.css";
import Data from "./Data.jsx";
import Card from "./Card.jsx";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} 
                                year={val.year} localisation={val.localisation} 
                                desc={val.desc} points={val.points}/>
                            )
                        }
                        return null; 
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val, id) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} 
                                year={val.year} localisation={val.localisation}
                                desc={val.desc} points={val.points}/>
                            )
                        }
                        return null; 
                    })}
                </div>
            </div>
        </section> 
    )
}

export default Resume;
