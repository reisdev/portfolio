import React from "react";
import "./style.css";
import ProfilePic from "../../static/img/profile.jpg";

export default function Home() {
  return (
    <main>
      <section className="merchan content" style={{ display: "table" }}>
        <div className="middle-align">
          <h1>
            Desenvolvimento de soluções <br />
            para o seu negócio
          </h1>
          <h2 className="small">
            Serviço personalizado e de qualidade, que cabe no seu bolso!
          </h2>
        </div>
      </section>
      <section className="personal" id="about">
        <section className="content">
          <section
            className="avatar"
            style={{ flex: "1", textAlign: "center" }}
          >
            <img
              className="profile"
              src={ProfilePic}
              alt="The developer of this page"
            />
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 15px 20px 15px",
            }}
          >
            <section style={{ marginTop: 20 }}>
              <h1 className="name">Matheus dos Reis de Jesus</h1>
              <h2 className="age">21 anos</h2>
            </section>
            <section style={{ marginTop: 10, lineHeight: "24px" }}>
              Com mais de 6 anos de experiência na área de desenvolvimento web e
              de software, Matheus(ou <i>reisdev</i> ) é um amante da tecnologia
              desde que se entende por gente. Já experimentou de tudo um pouco,
              e sempre procura aprender as novas tecnologias e tendências do
              mercado!
            </section>
          </section>
        </section>
      </section>
      <br id="skills" />
      <br />
      <br />
      <section className="skills">
        <section className="content" style={{ flexDirection: "column" }}>
          <section className="title">
            <h2>Habilidades</h2>
          </section>
          <section style={{ flexDirection: "row", margin: "0px auto" }}>
            <section className="category">
              <h3>Linguagens</h3>
              <section className="icons">
                <i className="devicon-javascript-plain" title="Javascript"></i>
                <i className="devicon-typescript-plain" title="Typescript"></i>
                <i className="devicon-python-plain" title="Python"></i>
                <i className="devicon-cplusplus-plain" title="C++"></i>
              </section>
            </section>
            <section className="category">
              <h3>Front-end</h3>
              <section className="icons">
                <i className="devicon-html5-plain-wordmark" title="HTML5"></i>
                <i className="devicon-css3-plain-wordmark" title="CSS3"></i>
                <i className="fab fa-angular" title="AngularJS"></i>
                <i className="fab fa-react" title="React.js"></i>
                <i className="fab fa-vuejs" title="Vue.js"></i>
              </section>
            </section>
            <section className="category">
              <h3>Back-end</h3>
              <section className="icons">
                <i className="fab fa-node-js" title="Node.js"></i>
                <i className="fab fa-laravel" title="Laravel"></i>
                <i
                  className="devicon-django-plain"
                  style={{ fontSize: "5rem", marginTop: -15 }}
                  title="Django"
                ></i>
              </section>
            </section>
            <section className="category">
              <h3>Dados</h3>
              <section className="icons">
                <i title="Pandas">
                  <svg
                    id="pandas"
                    width="120px"
                    height="50px"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 818.63 331.21"
                  >
                    <path
                      className="cls-1"
                      d="M290.85,199.21c-10.27,0-20.73-4.25-27.28-12.58v45H243l0-111.09h18.6l.71,12.22c6.38-9.39,17.71-14.35,28.52-14.35,20.73,0,36,17.37,36,40.4S311.58,199.22,290.85,199.21Zm-6.37-65.55c-12.05,0-21.79,9.39-21.79,25.16S272.43,184,284.48,184s21.79-9.39,21.79-25.16S296.53,133.66,284.48,133.66Z"
                    />
                    <path
                      className="cls-1"
                      d="M404.36,197.1l-.71-12.22c-6.38,9.39-17.72,14.35-28.53,14.34-20.73,0-36-17.36-36-40.39s15.24-40.4,36-40.39c10.81,0,22.15,5,28.53,14.35l.71-12.22H423V197.1Zm-22.85-63.43c-12.05,0-21.79,9.39-21.8,25.16S369.45,184,381.5,184s21.8-9.39,21.8-25.16S393.56,133.67,381.51,133.67Z"
                    />
                    <path
                      className="cls-1"
                      d="M494.87,197.11V154.77c0-14.88-5.13-19.84-14.52-19.84-9.75,0-20.38,8.85-20.38,19.48v42.7H439.41V120.57H458.2l.89,14.18c5.14-9.75,16.65-16.3,28.35-16.3,20.37,0,28,14.18,28,33.13v45.54Z"
                    />
                    <path
                      className="cls-1"
                      d="M590.77,197.13l-.71-12.23c-6.38,9.39-17.72,14.35-28.52,14.35-20.73,0-36-17.37-36-40.4s15.24-40.39,36-40.39c10.27,0,20.72,4.26,27.28,12.58V90.83h20.56l0,106.3ZM567.92,133.7c-12,0-21.79,9.39-21.79,25.15S555.87,184,567.92,184s21.79-9.38,21.79-25.15S580,133.7,567.92,133.7Z"
                    />
                    <path
                      className="cls-1"
                      d="M686.6,197.14l-.71-12.22c-6.38,9.39-17.72,14.34-28.53,14.34-20.73,0-36-17.36-36-40.4s15.24-40.39,36-40.39c10.81,0,22.15,5,28.53,14.36l.71-12.23h18.6v76.53Zm-22.85-63.43c-12,0-21.79,9.39-21.8,25.16S651.7,184,663.74,184s21.8-9.39,21.8-25.16S675.8,133.71,663.75,133.71Z"
                    />
                    <path
                      className="cls-1"
                      d="M750.73,199.63a60.16,60.16,0,0,1-30.65-8.69l3.37-14.17c6.2,3.72,15.59,8.51,26.93,8.51,8.15,0,13.82-2.48,13.82-8.86,0-5.49-5.85-7.44-16.3-9.92-18.78-4.08-25.51-14-25.51-24.81,0-12.05,9.39-23.38,30.12-23.38,12.58,0,23.57,5.49,26,6.91l-3.37,13.47A44.59,44.59,0,0,0,753,132.31c-8.32,0-12.4,2.83-12.4,7.44,0,5.13,5.32,7.44,13.46,9.39,20.2,4.25,28.35,13.64,28.35,23.92C782.45,189.53,770.4,199.63,750.73,199.63Z"
                    />
                    <rect
                      className="cls-1"
                      x="74.88"
                      y="68.42"
                      width="24.09"
                      height="50.02"
                    />
                    <rect
                      className="cls-1"
                      x="74.88"
                      y="171.17"
                      width="24.09"
                      height="50.02"
                    />
                    <rect
                      className="cls-2"
                      x="74.88"
                      y="133.04"
                      width="24.09"
                      height="23.6"
                    />
                    <rect
                      className="cls-1"
                      x="36.19"
                      y="109.55"
                      width="24.09"
                      height="166.27"
                    />
                    <rect
                      className="cls-1"
                      x="112.78"
                      y="212.44"
                      width="24.09"
                      height="50.02"
                    />
                    <rect
                      className="cls-1"
                      x="112.78"
                      y="109.61"
                      width="24.09"
                      height="50.02"
                    />
                    <rect
                      className="cls-2"
                      x="112.78"
                      y="174.23"
                      width="24.09"
                      height="23.6"
                    />
                    <rect
                      className="cls-1"
                      x="150.67"
                      y="55.39"
                      width="24.09"
                      height="166.27"
                    />
                  </svg>
                </i>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
