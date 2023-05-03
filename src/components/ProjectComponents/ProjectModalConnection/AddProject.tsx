import React from "react";
import AddProjectModal from "../../../modals/AddProjectModal";

const AddProject = () => {
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
