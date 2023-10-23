import React from 'react';

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon}></i>
            <span className="timeline__date">{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <span className="timeline__subtitle">{props.localisation}</span>
            <p className="timeline__text">{props.desc}</p>

            {props.points && props.points.length > 0 && (
                <ul className="resume-list timeline__points">
                    {props.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Card;