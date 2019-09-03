import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./navbar/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <h2>Start editing to see so me magissc happen!</h2>
        </div>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
