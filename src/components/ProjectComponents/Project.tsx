import React from "react";
import { project } from "../../types/Type";
import DeleteProject from "./DeleteProject";
import AddContent from "../ContentComponents/AddContent";
import { Link } from "react-router-dom";

interface IProject {
  item: project;
}

const Project: React.FC<IProject> = ({ item }) => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name </th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Created Person</th>
            <th>Updated Person</th>
            <th>Total Content</th>
            <th>Visibility Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <td>{item.id}</td>
          <td>{item.projectName}</td>
          <td>{item.createdDate}</td>
          <td>{item.updatedDate}</td>
          <td>{item.createdPerson}</td>
          <td>{item.updatedPerson}</td>
          <td>{item.totalContent}</td>
          <td>{item.visibilityRole}</td>
          <td style={{ display: "flex", flexDirection: "column" }}>
            <Link to={`/contentpanel/${item.id}`}><button className="btn btn-success">Content</button></Link>
            <DeleteProject id={item.id} />
            <button className="btn btn-warning">Update</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
