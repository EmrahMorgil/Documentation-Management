import React from "react";
import { project, visibilityProjects } from "../../../types/Type";
import { Link } from "react-router-dom";

interface IVisibilityProjects {
  visibilityProject: visibilityProjects;
}

const Project: React.FC<IVisibilityProjects> = ({ visibilityProject }) => {

  return (
    <>
      <tr>
        <td scope="row">{visibilityProject.id.substring(0,2)+"..."}</td>
        <td scope="row">{visibilityProject.projectName}</td>
        <td scope="row">{visibilityProject.createdDate}</td>
        <td scope="row">{visibilityProject.updatedDate}</td>
        <td scope="row">{visibilityProject.createdPerson}</td>
        <td scope="row">{visibilityProject.updatedPerson}</td>
        <td scope="row">{visibilityProject.totalContent}</td>
        <td scope="row">{visibilityProject.visibilityRole}</td>
        <td scope="row"><Link to={`/contentpanel/${visibilityProject.projectId}`} ><button className="btn btn-success">Contents</button></Link></td>
      </tr>
    </>
  );
};

export default Project;
