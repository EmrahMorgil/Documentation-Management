import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import Logout from "../logout/Logout";

const UserNavbar = () => {
  const activeUser = useSelector((state: RootState) => state.users.activeUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
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
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo03"
        ></div>
        <button className="btn btn-primary mr-3">Welcome {activeUser.name}</button>

        <Logout />
      </div>
    </nav>
  );
};

export default UserNavbar;
