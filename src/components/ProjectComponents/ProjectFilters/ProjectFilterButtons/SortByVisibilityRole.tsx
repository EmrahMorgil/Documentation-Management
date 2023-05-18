import React, { useState } from "react";
import { user } from "../../../../types/Type";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../../redux/projects/projectsSlice";

const SortByVisibilityRole: React.FC = () => {
  const [roleSorted, setRoleSorted] = useState({
    sorted: "visibilityRole",
    isReversed: false,
  });

  const activeUser: user = useSelector(
    (state: RootState) => state.users.activeUser
  );
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  const sortVisibilityRole = () => {
    let variableProject;
    activeUser.role === 1
      ? (variableProject = projects)
      : (variableProject = visibilityProjects);

    const sortedData = [...variableProject].sort((a, b) => {
      if (roleSorted.isReversed) {
        return a.visibilityRole - b.visibilityRole;
      }
      return b.visibilityRole - a.visibilityRole;
    });

    if (activeUser.role === 0) {
      dispatch(setVisibilityProjects(sortedData));
    } else {
      dispatch(setProjects(sortedData));
    }
    setRoleSorted({
      sorted: "visibilityRole",
      isReversed: !roleSorted.isReversed,
    });
  };

  return (
    <th onClick={sortVisibilityRole} className="pointer" scope="col">
      Visibility Role
      {roleSorted.sorted ? (roleSorted.isReversed ? "▲" : "▼") : null}
    </th>
  );
};

export default SortByVisibilityRole;
