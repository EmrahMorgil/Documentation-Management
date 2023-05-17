import React, { useEffect } from "react";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsAsync } from "../services/projectService";
import { getVisibilityProjectsAsync } from "../services/visibilityProjectServise";
import { getAllContentsAsync } from "../services/contentService";
import { getUsersAsync } from "../services/userService";
import { RootState } from "../redux/store";

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const allContents = useSelector(
    (state: RootState) => state.contents.allContents
  );
  const users = useSelector((state: RootState) => state.users.users);
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  useEffect(() => {
    if (projects.length == 0) dispatch(getProjectsAsync());

    if (allContents.length == 0) dispatch(getAllContentsAsync());

    if (users.length == 0) dispatch(getUsersAsync());

    if (visibilityProjects.length == 0) dispatch(getVisibilityProjectsAsync());
  }, [dispatch]);

  return (
    <>
      <ProjectsList projectsControl={"allProjects"} />
    </>
  );
};

export default Projects;
