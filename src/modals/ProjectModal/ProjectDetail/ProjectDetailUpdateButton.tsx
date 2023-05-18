import React from "react";
import { IProjectDetailUpdateButton, project, visibilityProjects } from "../../../types/Type";
import { updateProjects } from "../../../services/projectService";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setProjects,
  setVisibilityProjects,
} from "../../../redux/projects/projectsSlice";
import { updateVisibilityProjectsApi } from "../../../services/visibilityProjectServise";



const ProjectDetailUpdateButton: React.FC<IProjectDetailUpdateButton> = ({
  project,
  buttonActive,
  setButtonActive,
  updatedProject,
}) => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const activeUser = useSelector(
    (state: RootState) => state.users.activeUser.name
  );
  const visibilityProjects = useSelector(
    (state: RootState) => state.projects.visibilityProjects
  );

  const updateVisibilityProjectItem = () => {
    const setUpdatedProject = { ...updatedProject };
    const {
      id,
      projectName,
      createdDate,
      updatedDate,
      createdPerson,
      updatedPerson,
      totalContent,
      visibilityRole,
    } = setUpdatedProject;

    const newArray: visibilityProjects = visibilityProjects.map(
      (visibilityProject: visibilityProjects) => {
        if (visibilityProject.projectId == project.id) {
          let projectId = visibilityProject.projectId;
          let userId = visibilityProject.userId;
          const updatedVisibilityProject: visibilityProjects = {
            id,
            projectName,
            createdDate,
            updatedDate,
            createdPerson,
            updatedPerson,
            totalContent,
            visibilityRole,
            projectId,
            userId,
          };
          setTimeout(function () {
            updateVisibilityProjectsApi(
              visibilityProject.id,
              updatedVisibilityProject
            );
          }, 500);
          return updatedVisibilityProject;
        } else {
          return visibilityProject;
        }
      }
    );
    dispatch(setVisibilityProjects(newArray));
  };

  const updateProject = async (updateProject: project) => {
    setButtonActive(true);
    let date = new Date();
    let nowDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const setUpdatedProject = { ...updatedProject };
    setUpdatedProject.updatedDate = nowDate;
    setUpdatedProject.updatedPerson = activeUser;

    const {
      id,
      projectName,
      createdDate,
      updatedDate,
      createdPerson,
      updatedPerson,
      totalContent,
      visibilityRole,
    } = setUpdatedProject;

    updateProjects(updateProject.id, setUpdatedProject);

    const newArr = projects.map((projects: project) => {
      if (projects.id === updateProject.id) {
        return {
          id,
          projectName,
          createdDate,
          updatedDate,
          createdPerson,
          updatedPerson,
          totalContent,
          visibilityRole,
        };
      }
      return projects;
    });
    dispatch(setProjects(newArr));

    //visibilityProject'de var ise oradan da update işlemi yapılıyor.
    updateVisibilityProjectItem();
  };

  return (
    <button
      type="button"
      className="btn btn-warning"
      data-dismiss="modal"
      onClick={() => updateProject(project)}
      disabled={buttonActive}
    >
      Update
    </button>
  );
};

export default ProjectDetailUpdateButton;
