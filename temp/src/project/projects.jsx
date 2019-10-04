import React, { Component, Fragment } from "react";
import * as data from "../data/project";

export default class ProjectList extends Component {
  render() {
    var projects = data.projects.map(item => {
      var tech = item.technology.map(tech => <li>{tech}</li>);
      var list = item.list.map(l => <li>{l}</li>);
      return (
        <li className="flex-item">
          <div className="container">
            <div className="row ">
              <div className="col">
                <h4 className="center-text">{item.title}</h4>
                <ul>{list}</ul>
                <ul className="technologies">{tech}</ul>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return (
      <Fragment>
        <h1 className="mt-4 text-center">Projects</h1>
        <ul className="flex-container wrap">{projects}</ul>
      </Fragment>
    );
  }
}
