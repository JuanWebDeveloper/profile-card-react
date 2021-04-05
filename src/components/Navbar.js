import React, { Component } from "react";

import "./styles/Navbar.css";
import logo from "../images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar_content">
          <img src={logo} alt="Logo" />
          <span>profile card with react</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
