import React, { Component } from "react";

class Personal extends Component {
  state = {
    personal: {
      name: "Matheus dos Reis de Jesus",
      email: "matheusdrdj@gmail.com",
      age: 20,
      img:
        "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/46521720_2503871296308715_1703695689600466944_n.jpg?_nc_cat=110&_nc_oc=AQnKFfzEa2zK1VV7rMbkDwzH66HocUCQmNlafhGc13u-1PqD7muKdGQHxY9AFIi4piM&_nc_ht=scontent-gru2-1.xx&oh=1b78210dfa474ada91111b0b01dbf48e&oe=5DAC1F1E"
    },
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
      <div className="page">
        <div className="profile" style={{ textAlign: "left" }}>
          <div className="header">
            <h1 className="name">{this.state.personal.name}</h1>
            <h2 className="job muted">Web and Mobile Developer</h2>
          </div>
          <p style={{ textAlign: "left", fontSize: 20 }}>
            Hi! I'm Matheus. I study Computer Science at the{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.ufv.br/"
            >
              Federal University of Viçosa
            </a>{" "}
            and work at{" "}
            <a
              href="http://www.cientec.net/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cientec Aceleradora
            </a>{" "}
            as a Trainee Front-end Developer.
          </p>
        </div>
      </div>
    );
  }
}

export default Personal;
