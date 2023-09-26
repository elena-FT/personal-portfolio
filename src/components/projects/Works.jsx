import React, { useEffect } from 'react';
import { useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const [item, setItem] = React.useState({name: "all"});
    const [projects, setProjects] = React.useState([]);
    const [active, setActive] = React.useState(0);

    useEffect(() => {
        let newProjects = [];
        if (item.name === "all") {
            newProjects = [...projectsData];
        } else {
            newProjects = projectsData.filter((project) => project.category === item.name);
        }
        setProjects(newProjects);
    },[item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }


    return (
        <div>
          <div className="work__filters">
            {projectsNav.map((item, index) => (
              <span
                onClick={(e) => handleClick(e, index)}
                className={`${active === index ? "work__filter active-work" : ""} work__item`}
                key={index}
              >
                {item.name}
              </span>
            ))}
          </div>
      
          <div className="work__container container grid">
            {projects.map((item) => (
              <WorksItems item={item} key={item.id} />
            ))}
          </div>
        </div>
      );      
}

export default Works