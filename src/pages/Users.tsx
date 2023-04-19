import React from "react";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../redux/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setUserLoggedIn(false));
  };

  return (
    <div>
      <h1>Projects</h1>
      <button onClick={logout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Users;
