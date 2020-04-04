import React, { useState, useEffect } from "react";
import "./style.css";

import logo from "../../static/img/logo-white.png";

export default function Menu(props: any) {
  const [colored, setColored] = useState(false);
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const toggleMenu = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
      if (!colored) setColored(true);
    }
  };

  const onScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (window.scrollY >= 60) setColored(true);
    document.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scroll >= 60) setColored(true);
    else {
      if (!active) setColored(false);
    }
  }, [scroll, active]);

  return (
    <nav className={`fixed menu ${colored ? "colored" : ""}`}>
      <section className="content">
        <button className="hamburguer" onClick={toggleMenu}>
          <i className="fas fa-bars icon"></i>
        </button>
        <section>
          <img className="logo" src={logo} alt="Developer of this page" />
        </section>
        <section className="navigation">
          <ul className={`topics ${active ? "active" : ""}`}>
            <li onClick={toggleMenu}>
              <a className="item" href="#about">
                Sobre mim
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a className="item" href="#carreer">
                Carreira
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a className="item" href="#experience">
                Experiência
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a className="item" href="#skills">
                Habilidades
              </a>
            </li>
          </ul>
        </section>
        <ul className="social">
          <li>
            <a
              className="item"
              href="https://github.com/reisdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://www.linkedin.com/in/matheus-dos-reis-de-jesus-40a59570"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://gitlab.com/reisdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fab fa-gitlab"></i>
            </a>
          </li>
        </ul>
      </section>
      <section className="navigation">
        <ul className={`topics ${active ? "active" : ""}`}>
          <li onClick={toggleMenu}>
            <a className="item" href="#about">
              Sobre mim
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="item" href="#skills">
              Habilidades
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="item" href="#carreer">
              Carreira
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a className="item" href="#experience">
              Experiência
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
