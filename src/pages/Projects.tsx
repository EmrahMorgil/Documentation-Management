import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import ProjectsList from "../components/ProjectComponents/ProjectsList";

const Projects: React.FC = () => {

  return (
    <div>
      <ProjectsList projectsControl={"allProjects"} />
    </div>
  );
};

export default Projects;
