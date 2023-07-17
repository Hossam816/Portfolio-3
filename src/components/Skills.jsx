import "../styles/Skill.css";
import FrontEnd from "./FrontEnd";
import DesignerSection from "./UI-Ux";

const Skills = () => {
  return (
    <section className="skill section" id="skill">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skill__container container grid">
        <FrontEnd />
        <DesignerSection />
      </div>
    </section>
  );
};

export default Skills;
