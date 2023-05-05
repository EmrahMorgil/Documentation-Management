import React from "react";
import { project } from "../../types/Type";
import DeleteProject from "./DeleteProject";
import AddContent from "../ContentComponents/ContentModalConnection/AddContent";
import { Link } from "react-router-dom";
import UpdateProject from "./ProjectModalConnection/UpdateProject";
import OnUserProjectsContainer from "./OnUserProject/OnUserProjectsContainer";

interface IProject {
  project: project;
  projectsControl: string;
  userId?: string;
}

const Project: React.FC<IProject> = ({ project, projectsControl, userId }) => {
  return (
    <>
      <tr>
        <td scope="row">{project.id.substring(0,2)+"..."}</td>
        <td scope="row">{project.projectName}</td>
        <td scope="row">{project.createdDate}</td>
        <td scope="row">{project.updatedDate}</td>
        <td scope="row">{project.createdPerson}</td>
        <td scope="row">{project.updatedPerson}</td>
        <td scope="row">{project.totalContent}</td>
        <td scope="row">{project.visibilityRole}</td>
          {projectsControl==="addUserOnProject" ? (
            <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
            {/* kullanıcının üzerine proje ekleme */}
            <OnUserProjectsContainer project={project} userId={userId}/>
            </td>
          ) : projectsControl === "projectPanel" ? (
            <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
            {/* projectpanelde görünecekler */}
              <Link to={`/contentpanel/${project.id}`}>
                <button className="btn btn-success" style={{ width: "100px" }} >
                  Content
                </button>
              </Link>
              <DeleteProject project={project} />
              <UpdateProject project={project} />
            </td>
          ) : projectsControl ==="onUserDeleteProject" ? <td scope="row"><button className="btn btn-danger btn-sm">X</button></td> : <></>}
        
      </tr>
    </>
  );
};

export default Project;
