import React, { useState, useEffect } from "react";
import DeleteProject from "./DeleteProject";
import { Link } from "react-router-dom";
import OnUserProjectRemoveButton from "./OnUserProject/OnUserProjectRemoveButton";
import ProjectDetailModal from "../../modals/ProjectModal/ProjectDetail/ProjectDetailModal";
import { IProject, content } from "../../types/Type";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import OnUserProjectAddButton from "./OnUserProject/OnUserProjectAddButton";

const Project: React.FC<IProject> = ({ project, projectsControl, userId }) => {
  const allContents = useSelector(
    (state: RootState) => state.contents.allContents
  );

  const totalContent = () => {
    if (project.projectId) {
      return allContents.filter(
        (content: content) => content.projectId == project.projectId
      ).length;
    } else {
      return allContents.filter(
        (content: content) => content.projectId == project.id
      ).length;
    }
  };

  return (
    <>
      <tr>
        <td scope="row">{project.id.substring(0, 2) + "..."}</td>
        <td scope="row">{project.projectName}</td>
        <td scope="row">{project.createdDate}</td>
        <td scope="row">{project.updatedDate}</td>
        <td scope="row">{project.createdPerson}</td>
        <td scope="row">{project.updatedPerson}</td>
        <td scope="row">{totalContent()}</td>
        <td scope="row">{project.visibilityRole}</td>
        {projectsControl === "addUserOnProject" ? (
          <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
            {/* kullanıcının üzerine proje ekleme */}
            <OnUserProjectAddButton userId={userId} project={project} />
          </td>
        ) : projectsControl === "projectPanel" ? (
          <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
            {/* projectpanelde görünecekler */}
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Options
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  to={`/contentpanel/${project.id}`}
                  className="dropdown-item"
                >
                  Contents
                </Link>
                <button
                  type="button"
                  className="dropdown-item"
                  data-toggle="modal"
                  data-target={`#${project.id}`}
                >
                  Detail
                </button>
                <DeleteProject project={project} />
              </div>
            </div>
            <ProjectDetailModal project={project} />
          </td>
        ) : projectsControl === "onUserDeleteProject" ? (
          <td scope="row">
            {/* kullanıcının üzerinden proje silme */}
            <OnUserProjectRemoveButton userId={userId} projectId={project.id} />
          </td>
        ) : projectsControl === "visibilityProjectsMap" ? (
          <td scope="row">
            <Link to={`/contentpanel/${project.projectId}`}>
              <button className="btn btn-success">Contents</button>
            </Link>
          </td>
        ) : (
          <></>
        )}
      </tr>
    </>
  );
};

export default Project;
