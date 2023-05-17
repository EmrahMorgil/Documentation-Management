import React, { useEffect } from "react";
import AddUser from "../components/UserComponents/UserModalConnection/AddUser";
import UsersList from "../components/UserComponents/UsersList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUsersAsync } from "../services/userService";
import { getVisibilityProjectsAsync } from "../services/visibilityProjectServise";
import { getProjectsAsync } from "../services/projectService";

const UserPanel: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  useEffect(() => {
    if (users.length == 0) dispatch(getUsersAsync());
    if (projects.length == 0) dispatch(getProjectsAsync());
    if (visibilityProjects.length == 0) dispatch(getVisibilityProjectsAsync());
  }, [dispatch]);

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
