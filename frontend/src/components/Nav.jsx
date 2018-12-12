import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/secret">secret</NavLink>
        <NavLink to="/login">login</NavLink>
      </nav>
    );
  }
}

export default Nav;
