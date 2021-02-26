import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontSize: 20, fontWeight: "bold" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink activeStyle={{ fontSize: 20, fontWeight: "bold" }} to="/about">
        About
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontSize: 20, fontWeight: "bold" }}
        to="/discover"
      >
        Discover
      </NavLink>
    </div>
  );
}
