import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">
                    Étude
                </h3>
                <span className="about__subtitle">
                    BAC+5
                </span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">
                    Projets Complétés
                </h3>
                <span className="about__subtitle">
                    9+ Projets
                </span>
            </div>

            <div className="about__box">
                <i className="bx bx-code-alt about__icon"></i>
                <h3 className="about__title">
                    Programmation
                </h3>
                <span className="about__subtitle">
                    10+ langages maîtrisés
                </span>
            </div>
        </div>
    )
}

export default Info;
