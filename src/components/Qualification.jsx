import { useState } from "react";
import "../styles/Qualification.css";

const Qualification = () => {
  const [toggleQualification, settoggleQualification] = useState(1);

  const toggleClick = (index) => {
    settoggleQualification(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleQualification === 1
                ? "qualification__btn qualification__active btn--flex"
                : "qualification__btn  btn--flex"
            }
            onClick={() => toggleClick(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleQualification === 2
                ? "qualification__btn qualification__active btn--flex"
                : "qualification__btn  btn--flex"
            }
            onClick={() => toggleClick(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experiance
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleQualification === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Front-end Developer masters Nanodegree Program from Udacity.
                </h3>
                <span className="qualification__subtitle">
                  Egypt - Udacity - FWD
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  UI/UX beginner Designer
                </h3>
                <span className="qualification__subtitle">
                  Egypt - Personal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Programming Languages and Tools: JavaScript
                </h3>
                <span className="qualification__subtitle">Egypt - Cairo</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Web Development with HTML, CSS & JS Framework (React)
                </h3>
                <span className="qualification__subtitle">
                  Egypt - Personal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleQualification === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Problem Solving with js
                </h3>
                <span className="qualification__subtitle">Egypt - Online</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Specialize at finding solutions
                </h3>
                <span className="qualification__subtitle">
                  Egypt - Personal
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Front-End Web Developer with React, Nextjs
                </h3>
                <span className="qualification__subtitle">
                  Egypt - online courses{" "}
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
