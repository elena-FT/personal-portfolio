import React from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id="experiences">
            <h2 className="section__title">Expériences</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                    >

                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={
                        toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Expérience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Sorbonne - INFOMED</h3>
                                <span className="qualificiation__subtitle"> Paris </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">EPITA - Majeure SANTE</h3>
                                <span className="qualificiation__subtitle"> Paris </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Semester Abroad</h3>
                                <span className="qualificiation__subtitle"> Dublin - Griffith College </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> February 2021 - June 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Hackathon</h3>
                                <span className="qualificiation__subtitle"> Strasbourg - Hacking Health Camp </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Mars 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Developpeuse Full Stack</h3>
                                <span className="qualificiation__subtitle"> Strasbourg - CAPCOD </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> September 2022 - January 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification