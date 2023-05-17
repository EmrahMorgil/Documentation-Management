import React from "react";
import { project } from "../../types/Type";

const ProjectDetailUndoButton = ({
  project,
  updatedProject,
  setUpdatedProject,
  buttonActive,
}: {
  project: project;
  updatedProject: project;
  setUpdatedProject: any;
  buttonActive: boolean;
}) => {
  const undoProject = () => {
    setUpdatedProject({
      id: project.id,
      projectName: project.projectName,
      createdDate: project.createdDate,
      updatedDate: project.updatedDate,
      createdPerson: project.createdPerson,
      updatedPerson: project.updatedPerson,
      totalContent: project.totalContent,
      visibilityRole: project.visibilityRole,
    });
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={undoProject}
      disabled={buttonActive}
    >
      Undo Changes
    </button>
  );
};

export default ProjectDetailUndoButton;
