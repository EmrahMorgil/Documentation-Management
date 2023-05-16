import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../services/userService";
import { RootState } from "../redux/store";
import LoginUser from "../pages/LoginUser";
import { Navigate } from "react-router";
import { getProjectsAsync } from "../services/projectService";
import { getVisibilityProjectsAsync } from "../services/visibilityProjectServise";
import { getAllContentsAsync } from "../services/contentService";

const LoginControl: React.FC = () => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state: RootState) => state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);
  

  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getProjectsAsync());
    dispatch(getVisibilityProjectsAsync());
    dispatch(getAllContentsAsync());
  }, [dispatch]);


  if(userLoggedIn || adminLoggedIn)
  {
    return <Navigate to="/projects" replace></Navigate>
  }else{
    return <LoginUser />
  }
};

export default LoginControl;
