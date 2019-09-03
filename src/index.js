import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Routes from "./routes";

function App() {
  return <Routes />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
