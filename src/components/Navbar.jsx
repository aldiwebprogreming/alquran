import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3 className="text-success">
              <b>
                AlQuran <i className="fas fa-book"></i>
              </b>
            </h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}
