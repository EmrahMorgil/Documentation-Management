import React from "react";
import { project } from "../../types/Type";
import { Link } from "react-router-dom";

interface IProject {
  item: project;
}

const Project: React.FC<IProject> = ({ item }) => {

  
  return (
    <>
      <tr>
        <td scope="row">{item.id.substring(0,2)+"..."}</td>
        <td scope="row">{item.projectName}</td>
        <td scope="row">{item.createdDate}</td>
        <td scope="row">{item.updatedDate}</td>
        <td scope="row">{item.createdPerson}</td>
        <td scope="row">{item.updatedPerson}</td>
        <td scope="row">{item.totalContent}</td>
        <td scope="row">{item.visibilityRole}</td>
        <td scope="row"><Link to={`/contentpanel/${item.id}`} ><button className="btn btn-success">Contents</button></Link></td>
      </tr>
    </>
  );
};

export default Project;
