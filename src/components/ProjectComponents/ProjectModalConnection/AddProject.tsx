import React from "react";
import AddProjectModal from "../../../modals/ProjectModal/AddProjectModal";

const AddProject: React.FC = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target="#addProject"
      >
        Add Project
      </button>
      <AddProjectModal />
    </div>
  );
};

export default AddProject;
