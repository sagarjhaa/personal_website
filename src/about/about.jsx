import React, { Component, Fragment } from "react";
import ProjectList from "../project/projects";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div>About</div>
        <ProjectList />
      </Fragment>
    );
  }
}
