import React from "react";
import { project } from "../../types/Type";
import DeleteProject from "./DeleteProject";
import AddContent from "../ContentComponents/AddContent";
import { Link } from "react-router-dom";
import UpdateProject from "./UpdateProject";

interface IProject {
  item: project;
}

const Project: React.FC<IProject> = ({ item }) => {
  return (
    <>
    <tr>
      <td scope="row">{item.id}</td>
      <td scope="row">{item.projectName}</td>
      <td scope="row">{item.createdDate}</td>
      <td scope="row">{item.updatedDate}</td>
      <td scope="row">{item.createdPerson}</td>
      <td scope="row">{item.updatedPerson}</td>
      <td scope="row">{item.totalContent}</td>
      <td scope="row">{item.visibilityRole}</td>
      <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
        <Link to={`/contentpanel/${item.id}`}>
          <button className="btn btn-success" style={{width: "100px"}}>Content</button>
        </Link>
        <DeleteProject id={item.id} />
        <UpdateProject item={item}/>
      </td>
    </tr>
    </>
  );
};

export default Project;
