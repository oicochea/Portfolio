import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <>
        <h1> {this.props.name} </h1>
        <h3>
          <a target="_blank" href={this.props.git}>
            GitHub Page
          </a>
        </h3>
        <h3>
          <a target="_blank" href={this.props.live}>
            Live App
          </a>
        </h3>
        <img
          src={this.props.img}
          alt={this.props.alt}
          className="img-responsive"
        ></img>
      </>
    );
  }
}

export default Projects;
