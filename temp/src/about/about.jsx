import React, { Component, Fragment } from "react";
import ProjectList from "../project/projects";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <section id="bgImg" className="center-text about">
          <h1>
            Hi, I am <span>Sagar Jha</span>
          </h1>
          <h2>Full stack developer</h2>
        </section>
        <section>
          <ProjectList />
        </section>
      </Fragment>
    );
  }
}
