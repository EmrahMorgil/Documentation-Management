import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {IProjectsList,project,user,visibilityProjects} from "../../types/Type";
import Project from "./Project";
import SortByProjectName from "./ProjectFilters/SortByProjectName";
import SortByCreatedDate from "./ProjectFilters/SortByCreatedDate";
import SortByUpdatedDate from "./ProjectFilters/SortByUpdatedDate";
import SortByTotalContent from "./ProjectFilters/SortByTotalContent";
import SortByVisibilityRole from "./ProjectFilters/SortByVisibilityRole";

const ProjectsList: React.FC<IProjectsList> = ({ projectsControl, userId }) => {

  const projects = useSelector((state: RootState) => state.projects.projects);
    const [filterValues, setFilterValues] = useState({projectName: "",createdDate: "",updatedDate: "",visibilityRole: 0});
    const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);
    const activeUser: user = useSelector((state: RootState) => state.users.activeUser);
    const visibilityProjects = useSelector((state: RootState) => state.projects.visibilityProjects);

  const handleChange = (e: any) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
    if (e.target.name === "visibilityRole") {
      setFilterValues({ ...filterValues, visibilityRole: e.target.value });
    }
  };

  return (
    <div className="container">
      <table className="table table-striped">
        <thead className="thead-dark">
          <th scope="col"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ width: "20px",verticalAlign:"baseline", textAlign:"center",color:"white" }}
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                clipRule="evenodd"
              />
            </svg>
          </th>
          <th scope="col">
            <input
              placeholder="Project Name"
              name="projectName"
              size={10}
              onChange={handleChange}
            />
          </th>
          <th scope="col">
            <input
              placeholder="Created..."
              name="createdDate"
              size={7}
              onChange={handleChange}
            />
          </th>
          <th scope="col">
            <input
              placeholder="Updated..."
              name="updatedDate"
              size={7}
              onChange={handleChange}
            />
          </th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          {(projectsControl !== "allProjects" || !adminLoggedIn) && (
            <th scope="col"></th>
          )}
        </thead>
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
            : visibilityProjects.map(
                (visibilityProject: visibilityProjects, i: number) => {
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
