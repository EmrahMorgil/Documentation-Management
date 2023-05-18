import React, { useState } from "react";
import { user } from "../../../../types/Type";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../../redux/projects/projectsSlice";

const SortByTotalContent: React.FC = () => {
  const activeUser: user = useSelector(
    (state: RootState) => state.users.activeUser
  );
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  const [totalSorted, setTotalSorted] = useState({
    sorted: "totalContent",
    isReversed: false,
  });

  const sortTotalContent = () => {
    let variableProject;
    activeUser.role === 1
      ? (variableProject = projects)
      : (variableProject = visibilityProjects);

    const sortedData = [...variableProject].sort((a, b) => {
      if (totalSorted.isReversed) {
        return a.totalContent - b.totalContent;
      }
      return b.totalContent - a.totalContent;
    });

    if (activeUser.role === 0) {
      dispatch(setVisibilityProjects(sortedData));
    } else {
      dispatch(setProjects(sortedData));
    }
    setTotalSorted({
      sorted: "totalContent",
      isReversed: !totalSorted.isReversed,
    });
  };
  return (
    <th onClick={sortTotalContent} className="pointer" scope="col">
      Total Content
      {totalSorted.sorted ? (totalSorted.isReversed ? "▲" : "▼") : null}
    </th>
  );
};

export default SortByTotalContent;
