import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Form />
        <Home />
      </div>
    );
  }
}

export default App;
