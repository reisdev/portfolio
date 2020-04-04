import React from "react";
import "./style.css";
import ProfilePic from "../../static/img/profile.jpg";
import Pandas from "../../components/svg/pandas";

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
              <h3>Banco de Dados e ORMs</h3>
              <section className="icons">
                <i className="devicon-mysql-plain" title="MySQL"></i>
                <i className="devicon-postgresql-plain" title="PostgreSQL"></i>
                <i
                  className="devicon-oracle-plain"
                  title="Oracle"
                  style={{ fontSize: "5rem", marginTop: -15 }}
                ></i>
                <i className="devicon-sequelize-plain" title="Sequelize"></i>
              </section>
            </section>
            <section className="category">
              <h3>DevOps</h3>
              <section className="icons">
                <i title="Heroku" className="devicon-heroku-plain-wordmark"></i>
                <i
                  title="AWS"
                  className="devicon-amazonwebservices-plain-wordmark"
                  style={{ fontSize: "6rem", marginTop: -20 }}
                ></i>
                <i title="Docker" className="devicon-docker-plain"></i>
              </section>
            </section>
            <section className="category">
              <h3>Ferramentas</h3>
              <section className="icons">
                <i title="Pandas">
                  <Pandas />
                </i>
                <i
                  title="Trello"
                  className="fab fa-trello"
                  style={{ fontSize: "2.8rem" }}
                ></i>
                <i
                  title="Git"
                  className="fab fa-git"
                  style={{ fontSize: "2.8rem" }}
                ></i>
                <i title="Mocha" className="devicon-mocha-plain"></i>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
