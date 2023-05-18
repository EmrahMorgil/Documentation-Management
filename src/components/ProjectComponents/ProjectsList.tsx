import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {IProjectsList,project,user,visibilityProjects} from "../../types/Type";
import Project from "./Project";
import SortByProjectName from "./ProjectFilters/ProjectFilterButtons/SortByProjectName";
import SortByCreatedDate from "./ProjectFilters/ProjectFilterButtons/SortByCreatedDate";
import SortByUpdatedDate from "./ProjectFilters/ProjectFilterButtons/SortByUpdatedDate";
import SortByTotalContent from "./ProjectFilters/ProjectFilterButtons/SortByTotalContent";
import SortByVisibilityRole from "./ProjectFilters/ProjectFilterButtons/SortByVisibilityRole";
import ProjectFilterInputs from "./ProjectFilters/ProjectFilterInputs/ProjectFilterInputs";

const ProjectsList: React.FC<IProjectsList> = ({ projectsControl, userId }) => {

  const projects = useSelector((state: RootState) => state.projects.projects);
    const [filterValues, setFilterValues] = useState({projectName: "",createdDate: "",updatedDate: "",visibilityRole: 0});
    const adminLoggedIn: boolean = useSelector((state: RootState) => state.users.adminLoggedIn);
    const activeUser: user = useSelector((state: RootState) => state.users.activeUser);
    const visibilityProjects = useSelector((state: RootState) => state.projects.visibilityProjects);

  return (
    <div className="container">
      <table className="table table-striped">
        <ProjectFilterInputs filterValues={filterValues} projectsControl={projectsControl} adminLoggedIn={adminLoggedIn} setFilterValues={setFilterValues}/>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <SortByProjectName />
            <SortByCreatedDate />
            <SortByUpdatedDate />
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <SortByTotalContent />
            <SortByVisibilityRole />
            {(projectsControl !== "allProjects" || !adminLoggedIn) && (
              <th scope="col">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {adminLoggedIn
            ? projects.map((item: project, i: number) => {
                if (
                  item.projectName
                    .toLowerCase()
                    .includes(filterValues.projectName.toLowerCase()) &&
                  item.createdDate.includes(filterValues.createdDate) &&
                  item.updatedDate.includes(filterValues.updatedDate)
                ) {
                  return (
                    <Project
                      project={item}
                      key={i}
                      projectsControl={projectsControl}
                      userId={userId}
                    />
                  );
                }
              })
            : visibilityProjects.map((visibilityProject: visibilityProjects, i: number) => {
                  if (activeUser.id === visibilityProject.userId) {
                    if (
                      visibilityProject.projectName
                        .toLowerCase()
                        .includes(filterValues.projectName.toLowerCase())
                    ) {
                      return (
                        <Project
                          project={visibilityProject}
                          key={i}
                          projectsControl={"visibilityProjectsMap"}
                        />
                      );
                    }
                  }
                }
              )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;
