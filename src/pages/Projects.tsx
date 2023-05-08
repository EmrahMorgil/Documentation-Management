import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import UserProjectsList from "../components/UserComponents/UserLoggedIn/UserProjectsList";
import Logout from "../logout/Logout";

const Projects: React.FC = () => {
  
    const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);

  return (
    <div>
      
      {adminLoggedIn ? (
        <ProjectsList projectsControl={"adminLoggedInProjects"} />
      ) : (
        <>
          <UserProjectsList />
        </>
      )}
    </div>
  );
};

export default Projects;
