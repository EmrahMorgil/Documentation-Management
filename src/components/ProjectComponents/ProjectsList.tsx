import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project } from "../../types/Type";
import Project from "./Project";

const ProjectsList = ({projectsControl, userId}: {projectsControl: string, userId: string}) => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <div className="container mt-5">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Project Name </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th scope="col">Total Content</th>
            <th scope="col">Visibility Role</th>
            {projectsControl!=="homePageProject" && <th scope="col">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {projects.map((item: project, i: number) => (
            <Project item={item} key={i} projectsControl={projectsControl} userId={userId}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
