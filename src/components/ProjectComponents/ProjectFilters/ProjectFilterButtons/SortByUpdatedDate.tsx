import React, { useState } from "react";
import { user } from "../../../../types/Type";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../../redux/projects/projectsSlice";

const SortByUpdatedDate: React.FC = () => {
  const [updatedDateSorted, setUpdatedDateSorted] = useState({
    sorted: "updatedDate",
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

  const sortUpdatedDate = () => {
    let variableProject;
    activeUser.role === 1
      ? (variableProject = projects)
      : (variableProject = visibilityProjects);

    const sortedData = [...variableProject].sort((a, b) => {
      let dateA: Date = new Date(a.updatedDate);
      let dateB: Date = new Date(b.updatedDate);
      if (updatedDateSorted.isReversed) {
        return Number(dateA) - Number(dateB);
      }
      return Number(dateB) - Number(dateA);
    });

    if (activeUser.role === 0) {
      dispatch(setVisibilityProjects(sortedData));
    } else {
      dispatch(setProjects(sortedData));
    }
    setUpdatedDateSorted({
      sorted: "updatedDate",
      isReversed: !updatedDateSorted.isReversed,
    });
  };

  return (
    <th onClick={sortUpdatedDate} className="pointer" scope="col">
      Updated Date
      {updatedDateSorted.sorted
        ? updatedDateSorted.isReversed
          ? "▲"
          : "▼"
        : null}
    </th>
  );
};

export default SortByUpdatedDate;
