import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const headerActive = this.document.querySelector(".header");
    if (this.scrollY >= 80) headerActive.classList.add("scroll-header");
    else headerActive.classList.remove("scroll-header");
  });

  /* Menu Toggle */
  const [toggle, setToggle] = useState(false);
  const [activeNavLinks, setActiveNavLinks] = useState("#about");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Hossam
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNavLinks("#home")}
                className={
                  activeNavLinks === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNavLinks("#about")}
                className={
                  activeNavLinks === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skill"
                onClick={() => setActiveNavLinks("#skill")}
                className={
                  activeNavLinks === "#skill"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNavLinks("#services")}
                className={
                  activeNavLinks === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => setActiveNavLinks("#portfolio")}
                className={
                  activeNavLinks === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNavLinks("#contact")}
                className={
                  activeNavLinks === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact-Us
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
