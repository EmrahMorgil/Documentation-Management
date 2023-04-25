import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../services/userService";
import { RootState } from "../redux/store";
import Home from "./Home";
import LoginUser from "../components/LoginUser";
import { Navigate } from "react-router";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state: RootState) => state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);


  if(userLoggedIn || adminLoggedIn)
  {
    return <Navigate to="/home" replace></Navigate>
  }else{
    return <LoginUser />
  }
};

export default Login;
