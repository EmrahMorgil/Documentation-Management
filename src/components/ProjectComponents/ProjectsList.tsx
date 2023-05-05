import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { project } from "../../types/Type";
import Project from "./Project";

interface IProjectsList{
  projectsControl: string;
  userId?: string;
  filterValue: string;
}

const ProjectsList: React.FC<IProjectsList> = ({projectsControl, userId, filterValue}) => {
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
            {projectsControl=="projectPanel" && <th scope="col">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {projects.map((project: project, i: number) =>{
            if(project.projectName.toLowerCase().includes(filterValue.toLowerCase()))
            {
              return <Project project={project} key={i} projectsControl={projectsControl} userId={userId}/>
            }
          }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
