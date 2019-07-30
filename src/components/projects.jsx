<div className="box projects">
  <div className="title">Projects</div>
  <div className="tiles">
    {this.state.projects.map(project => (
      <div className="tile" key={project.name}>
        <div className="name">
          <b>{project.name}</b>
          <span className="muted">{project.date}</span>
        </div>
        <div className="tecnologies">
          Tecnologies:
          <span className="muted">{project.tecnologies.join(", ")}</span>
        </div>
        <div className="more">
          <a href={project.link} rel="noopener noreferrer" target="_blank">
            Go to
          </a>
        </div>
      </div>
    ))}
  </div>
</div>;
