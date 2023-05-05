import React from "react";
import { user, visibilityProjects } from "../../../types/Type";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import Project from "../Project";

interface IOnUserProjects {
  onUser?: user;
}

const OnUserProjects: React.FC<IOnUserProjects> = ({ onUser }) => {
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  return (
    <div className="container">
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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibilityProjects.map((item: visibilityProjects, i: string) => {
            if (onUser?.id === item.userId) {
              return (
                <>
                  <Project
                    project={item}
                    key={i}
                    projectsControl="onUserDeleteProject"
                    userId={onUser.id}
                  />
                </>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OnUserProjects;
