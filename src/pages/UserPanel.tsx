import React from "react";
import AddUser from "../components/AddUser";
import UsersList from "../components/UsersList";
import { Link } from "react-router-dom";

const UserPanel: React.FC = () => {
  return (
    <>
      <AddUser />
      {/* <Link to="/home"><button className="btn btn-danger">Back</button></Link> */}
      <UsersList />
    </>
  );
};

export default UserPanel;
