import React from "react";
import AddUser from "../components/UserComponents/AddUser";
import UsersList from "../components/UserComponents/UsersList";
import { Link } from "react-router-dom";

const UserPanel: React.FC = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
        <AddUser />
        <Link to="/projects"><button className="btn btn-danger">Back</button></Link>
      </div>
      <UsersList />
    </>
  );
};

export default UserPanel;
