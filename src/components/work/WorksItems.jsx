/* eslint-disable react/prop-types */
const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="s" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.link} className="work__btn">
        Demo <i className="bx bx-right-arrow-alt work__btn-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
