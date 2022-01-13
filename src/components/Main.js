import React, { Component } from "react";
import Navbar from "./Navbar";
import Listview from "./Listview";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="relative">
        <Navbar />
        <Listview />
      </div>
    );
  }
}

export default Main;
