import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.link ? (
        <a href={item.link} className="work__button">
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : null}
    </div>
  );
};

export default WorkItems;