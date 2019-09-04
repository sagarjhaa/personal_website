import React, { Component, Fragment } from "react";
import * as data from "../data/project";

export default class ProjectList extends Component {
  render() {
    var projects = data.projects.map(item => {
      return (
        <li className="flex-item">
          <div>
            <h4>{item.title}</h4>
            <p>{item.oneline}</p>
          </div>
        </li>
      );
    });
    return (
      <Fragment>
        <ul className="flex-container wrap">
          {projects}
          {/* <li className="flex-item">Part-1</li>
          <li className="flex-item">Part-2</li>
          <li className="flex-item">Part-3</li>
          <li className="flex-item">Part-4</li>
          <li className="flex-item">Part-5</li>
          <li className="flex-item">Part-6</li> */}
        </ul>
      </Fragment>
    );
  }
}
