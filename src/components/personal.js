import React, { Component } from "react";

class Personal extends Component {
  state = {
    img:
      "https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/46521720_2503871296308715_1703695689600466944_n.jpg?_nc_cat=110&_nc_ht=scontent-gru2-2.xx&oh=087af2ea5a625d54b032b07ca84c3ebb&oe=5D35781E",
    projects: [
      {
        name: "Jornal Pelicano",
        date: "Jan 2018",
        tecnologies: ["Quasar", "Vue.js", "Firebase", "Cordova"],
        link:
          "https://play.google.com/store/apps/details?id=com.cordova.jornalpelicano"
      },
      {
        name: "TacticUP",
        date: "Fev 2019",
        tecnologies: ["React.js", "Node.js", "i18next"],
        link: "https://tacticup.com.br"
      }
    ]
  };
  render() {
    return (
      <div className="personal">
        <div className="box profile">
          <div className="name">
            Matheus dos Reis de Jesus
            <span className="muted">Web and Mobile Developer</span>
          </div>
          <div className="details">
            <div className="row">
              <div className="two wide column">
                <img
                  className="image"
                  src={this.state.img}
                  alt=""
                />
              </div>
              <div className="eight wide column info">
                <span>Age: 20</span>
                <span>
                  E-mail:{" "}
                  <a href="mailto:matheusdrdj@gmail.com">
                    matheusdrdj@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="box projects">
          <div className="title">Projects</div>
          <div className="tiles">
            {this.state.projects.map(project => (
              <div className="tile">
                <div className="name">
                  {project.name}
                  <span className="muted">{project.date}</span>
                </div>
                <div className="tecnologies">
                  Tecnologies:
                  <span className="muted">
                    {project.tecnologies.join(", ")}
                  </span>
                </div>
                <div className="more">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Go to
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box career">
          <div className="title">Career History</div>
        </div>
      </div>
    );
  }
}

export default Personal;
