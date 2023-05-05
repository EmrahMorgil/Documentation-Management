import React from "react";
import AddUser from "../components/UserComponents/UserModalConnection/AddUser";
import UsersList from "../components/UserComponents/UsersList";
import { Link } from "react-router-dom";

const UserPanel: React.FC = () => {
  return (
    <>
      <div className="container d-flex mt-5">
        <AddUser />
        <Link to="/projects">
          <button className="btn btn-danger">Back</button>
        </Link>
      </div>
      <UsersList />
    </>
  );
};

export default UserPanel;
