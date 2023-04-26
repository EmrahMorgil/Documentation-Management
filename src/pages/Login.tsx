import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../services/userService";
import { RootState } from "../redux/store";
import LoginUser from "../components/UserComponents/LoginUser";
import { Navigate } from "react-router";
import { getProjectsAsync } from "../services/projectService";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state: RootState) => state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);
  

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getProjectsAsync());
  }, [dispatch]);


  if(userLoggedIn || adminLoggedIn)
  {
    return <Navigate to="/projects" replace></Navigate>
  }else{
    return <LoginUser />
  }
};

export default Login;
