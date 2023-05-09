import React from "react";
import { setActiveUser, setAdminLoggedIn, setUserLoggedIn } from "../redux/users/usersSlice";
import { useDispatch } from "react-redux";

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAdminLoggedIn(false));
    dispatch(setUserLoggedIn(false));
    dispatch(setActiveUser({}));
  };

  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
