import React from "react";
import { project } from "../../types/Type";
import DeleteProject from "./DeleteProject";
import AddContent from "../ContentComponents/AddContent";
import { Link } from "react-router-dom";
import UpdateProject from "./UpdateProject";
import OnUserProjectsContainer from "./OnUserProjectsContainer";

interface IProject {
  item: project;
  projectsControl: string;
  userId?: string;
}

const Project: React.FC<IProject> = ({ item, projectsControl, userId }) => {
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
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          {projectsControl==="addUserOnProject" ? (
            <>
            <OnUserProjectsContainer item={item} userId={userId}/>
            </>
          ) : projectsControl === "projectPanel" ? (
            <>
              <Link to={`/contentpanel/${item.id}`}>
                <button className="btn btn-success" style={{ width: "100px" }} >
                  Content
                </button>
              </Link>
              <DeleteProject item={item} />
              <UpdateProject item={item} />
            </>
          ) : <></>}
        </td>
      </tr>
    </>
  );
};

export default Project;
