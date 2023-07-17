import { useState } from "react";
import "../styles/Services.css";

const Services = () => {
  const [toggleModel, setToggleModel] = useState(0);

  const toggleClick = (index) => {
    setToggleModel(index);
  };

  return (
    <div className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__btn" onClick={() => toggleClick(1)}>
            View More <i className="uil uil-arrow-right services__btn-icon"></i>
          </span>

          <div
            className={
              toggleModel === 1
                ? "services__model active-model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => toggleClick(0)}
              ></i>
              <h3 className="services__model-title">
                Web Design & Development
              </h3>
              <p className="services__model-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web page development.</p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Web Development <br /> Developer
            </h3>
          </div>
          <span className="services__btn" onClick={() => toggleClick(2)}>
            View More <i className="uil uil-arrow-right services__btn-icon"></i>
          </span>

          <div
            className={
              toggleModel === 2
                ? "services__model active-model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => toggleClick(0)}
              ></i>
              <h3 className="services__model-title">
                Web Development Developer
              </h3>
              <p className="services__model-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web page development.</p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Web Services <br /> Developer
            </h3>
          </div>
          <span className="services__btn" onClick={() => toggleClick(3)}>
            View More <i className="uil uil-arrow-right services__btn-icon"></i>
          </span>

          <div
            className={
              toggleModel === 3
                ? "services__model active-model"
                : "services__model"
            }
          >
            <div className="services__model-content">
              <i
                className="uil uil-times services__model-close"
                onClick={() => toggleClick(0)}
              ></i>

              <h3 className="services__model-title">
                Web Development Services
              </h3>
              <p className="services__model-desc">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__model-services grid">
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">Web page development.</p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    I position your company brand.
                  </p>
                </li>
                <li className="services__model-service">
                  <i className="uil uil-check-circle services__model-icon"></i>
                  <p className="services__model-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
