import React from "react";
import { user, visibilityProjects } from "../../../types/Type";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

const OnUserProjects = ({ onUser }: { onUser?: user }) => {
  const visibilityProjects = useSelector((state: RootState) => state.projects.visibilityProjects);

  return (
    <>
      {visibilityProjects.map((item: visibilityProjects, i: string) => {
        if(onUser?.id===item.userId)
        {
          return (
            <div className="row">
              <div className="col">{item.projectName}</div>
              <div className="col">{item.createdDate}</div>
              <div className="col">{item.updatedDate}</div>
            </div>
          );
        }
      })}
    </>
  );
};

export default OnUserProjects;
