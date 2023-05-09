import React from "react";
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { user } from "../types/Type";

const Navbar: React.FC = () => {
  const activeUser: user = useSelector(
    (state: RootState) => state.users.activeUser
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 mb-5">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to={"/projects"}>
          Project Management
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          {activeUser.role === 1 && (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/userpanel"}>
                  User Control Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/projectpanel"}>
                  Project & Content Control Panel
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <button className="btn btn-primary mr-3">
            Welcome {activeUser.name}
          </button>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
