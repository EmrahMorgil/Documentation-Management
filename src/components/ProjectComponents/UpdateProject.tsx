import React from 'react'
import { project } from "../../types/Type";
import UpdateProjectModal from "../../modals/UpdateProjectModal";

const UpdateProject = ({ item }: { item: project }) => {
  
  return (
    <div>
    <button
      type="button"
      className="btn btn-warning"
      data-toggle="modal"
      data-target={`#${item.id}`}
    >
      Detail
    </button>
    <UpdateProjectModal item={item} />
  </div>
  )
}

export default UpdateProject
