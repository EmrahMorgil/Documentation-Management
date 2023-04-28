import React from "react";
import { setAdminLoggedIn, setUserLoggedIn } from "../redux/users/usersSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAdminLoggedIn(false));
    dispatch(setUserLoggedIn(false));
  };

  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
