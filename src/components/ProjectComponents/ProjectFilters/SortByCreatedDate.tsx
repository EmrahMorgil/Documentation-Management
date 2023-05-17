import React, { useState } from "react";
import { user } from "../../../types/Type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../redux/projects/projectsSlice";

const SortByCreatedDate: React.FC = () => {
  const [createdDateSorted, setCreatedDateSorted] = useState({
    sorted: "createdDate",
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

  const sortCreatedDate = () => {
    let variableProject;
    activeUser.role === 1
      ? (variableProject = projects)
      : (variableProject = visibilityProjects);

    const sortedData = [...variableProject].sort((a, b) => {
      let dateA: any = new Date(a.createdDate.split("/").reverse().join("/"));
      let dateB: any = new Date(b.createdDate.split("/").reverse().join("/"));
      if (createdDateSorted.isReversed) {
        return dateA - dateB;
      }
      return dateB - dateA;
    });

    if (activeUser.role === 0) {
      dispatch(setVisibilityProjects(sortedData));
    } else {
      dispatch(setProjects(sortedData));
    }
    setCreatedDateSorted({
      sorted: "createdDate",
      isReversed: !createdDateSorted.isReversed,
    });
  };

  return (
    <th onClick={sortCreatedDate} className="pointer" scope="col">
      Created Date
      {createdDateSorted.sorted
        ? createdDateSorted.isReversed
          ? "▲"
          : "▼"
        : null}
    </th>
  );
};

export default SortByCreatedDate;
