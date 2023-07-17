import { useState } from "react";
import "../../styles/Mywork.css";
import { projectsData, projectSort } from "./Work-Data/Data";
import WorksItems from "./WorksItems";
import { useEffect } from "react";

const MyWork = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  // Filter Projects based on category selected by user

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActiveItem(index);
  };

  return (
    <>
      <section className="section" id="work">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Recent Work</span>

        <div className="work__filter">
          {projectSort.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                key={index}
                className={`${
                  activeItem === index ? "  work-active" : ""
                } work__item `}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="work__container container grid">
          {projects.map((item) => {
            return <WorksItems item={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MyWork;
