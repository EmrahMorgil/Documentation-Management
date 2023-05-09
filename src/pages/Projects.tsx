import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import ProjectsList from "../components/ProjectComponents/ProjectsList";

const Projects: React.FC = () => {

  return (
    <>
      <ProjectsList projectsControl={"adminLoggedInProjects"} />
    </>
  );
};

export default Projects;
