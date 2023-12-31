import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hossam</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              About
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/hossam.alasklany/"
            className="home__social-icon"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://dribbble.com/Alasklany"
            className="home__social-icon"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-dribbble"></i>
          </a>
          <a
            href="https://github.com/Hossam816"
            className="home__social-icon"
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Hossamalasklany. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
