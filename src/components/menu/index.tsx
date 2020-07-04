import React, { useState, useEffect } from "react";
import "./style.css";

import logo from "../../static/img/logo-white.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Menu, Navigation as NavigationStyle } from "./style";

const Navigation = ({
  toggle,
  active,
  nested,
}: {
  toggle: any;
  active: boolean;
  nested?: boolean;
}) => {
  return (
    <NavigationStyle nested={nested}>
      <ul className={`topics ${active ? "active" : ""}`}>
        <li onClick={toggle}>
          <Link className="item" to={"/"}>
            Sobre mim
          </Link>
        </li>
        <li onClick={toggle}>
          <Link className="item" to={"/blog"}>
            Blog
          </Link>
        </li>
      </ul>
    </NavigationStyle>
  );
};

export default function (props: any) {
  const [colored, setColored] = useState(false);
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const history = useHistory();

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
    function setup() {
      if (window.scrollY >= 60 || history.location.pathname !== "/")
        setColored(true);
      document.addEventListener("scroll", onScroll);
    }
    setup();
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [history.location.pathname]);

  useEffect(() => {
    if (history.location.pathname !== "/") {
      if (!colored) setColored(true);
      return;
    } else {
      setColored(false);
    }
    if (scroll >= 60) setColored(true);
    else {
      if (!active) setColored(false);
    }
  }, [scroll, active, history.location.pathname, colored]);

  const home = history.location.pathname === "/";
  return (
    <Menu position={home ? "fixed" : "sticky"} colored={colored}>
      <section className="content">
        <button className="hamburguer" onClick={toggleMenu}>
          <i className="fas fa-bars icon"></i>
        </button>
        <section>
          <img className="logo" src={logo} alt="Developer of this page" />
        </section>
        <Navigation toggle={toggleMenu} active={active} />
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
      <Navigation toggle={toggleMenu} active={active} nested={true} />
    </Menu>
  );
}
