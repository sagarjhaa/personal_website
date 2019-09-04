import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";

import Navbar from "./navbar/navbar";
import About from "./about/about";
import Project from "./project/project";

//badge badge-secondary

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route component={About} path="/about" />
        <div className="container-fluid">
          <Route component={Project} path="/project" />
        </div>
        <Route component={About} path="/" exact />
      </BrowserRouter>
    );
  }
}
