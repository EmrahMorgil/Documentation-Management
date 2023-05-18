import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { user } from "../../../../types/Type";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../../redux/projects/projectsSlice";

const SortByProjectName: React.FC = () => {
  const dispatch = useDispatch();
  const activeUser: user = useSelector(
    (state: RootState) => state.users.activeUser
  );
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );
  const [projectSorted, setProjectSorted] = useState({
    sorted: "projectName",
    isReversed: false,
  });

  const sortProjectName = () => {
    let variableProject;
    activeUser.role === 1
      ? (variableProject = projects)
      : (variableProject = visibilityProjects);

    const sortedData = [...variableProject].sort((a, b) => {
      if (projectSorted.isReversed) {
        return b.projectName.localeCompare(a.projectName);
      }
      return a.projectName.localeCompare(b.projectName);
    });

    if (activeUser.role === 0) {
      dispatch(setVisibilityProjects(sortedData));
    } else {
      dispatch(setProjects(sortedData));
    }
    setProjectSorted({
      sorted: "projectName",
      isReversed: !projectSorted.isReversed,
    });
  };

  return (
    <th onClick={sortProjectName} className="pointer" scope="col">
      Project Name
      {projectSorted.sorted ? (projectSorted.isReversed ? "▲" : "▼") : null}
    </th>
  );
};

export default SortByProjectName;
