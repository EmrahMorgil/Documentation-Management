import React from "react";
import { user, visibilityProjects } from "../../../types/Type";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import Project from "../Project";


interface IOnUserProjects{
  onUser?: user;
}

const OnUserProjects: React.FC<IOnUserProjects> = ({ onUser }) => {
  const visibilityProjects = useSelector((state: RootState) => state.projects.visibilityProjects);

  return (
    <>
      {visibilityProjects.map((item: visibilityProjects, i: string) => {
        if(onUser?.id===item.userId)
        {
          return (
            <>
            <Project project={item} projectsControl=""/>
            </>
          );
        }
      })}
    </>
  );
};

export default OnUserProjects;
