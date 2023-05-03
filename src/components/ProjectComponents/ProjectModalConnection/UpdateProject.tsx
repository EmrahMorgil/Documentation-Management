import React from 'react'
import { project } from "../../../types/Type";
import UpdateProjectModal from "../../../modals/ProjectModal/UpdateProjectModal";

interface IUpdateProject{
  project: project;
}

const UpdateProject: React.FC<IUpdateProject> = ({ project }) => {
  
  return (
    <div>
    <button
      type="button"
      className="btn btn-warning"
      data-toggle="modal"
      data-target={`#${project.id}`}
    >
      Detail
    </button>
    <UpdateProjectModal project={project} />
  </div>
  )
}

export default UpdateProject
