import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__mask"></div>

      <span className='work__category'>{ item.category }</span>
      <h3 className="work__title">{item.title}</h3>
      {item.link ? (
        <a href={item.link} className="work__button">
          <i className="bx bx-link"></i>
        </a>
      ) : null}

      <span className='work__description'>{item.description}</span>
    </div>
  );
};

export default WorkItems;