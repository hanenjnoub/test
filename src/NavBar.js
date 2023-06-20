import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/Home">
        <h3>Home</h3>
      </Link>
      <Link to="/Our_server">
        <h3> Our Server</h3>
      </Link>
      <Link to="/Contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
}

export default NavBar;