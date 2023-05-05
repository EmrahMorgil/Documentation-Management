import React, { useState } from "react";
import { user } from "../../../types/Type";
import AddOnUserProjectsModal from "../../../modals/UserModal/AddOnUserProjectsModal";

const AddOnUserProjects = ({ user }: { user: user }) => {
  const [addOnUserProject, setAddOnUserProject] = useState<user>();

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success w-100"
        data-toggle="modal"
        data-target={`#${user.id}` + "add"}
        onClick={() => setAddOnUserProject(user)}
      >
        Add Project
      </button>
      <AddOnUserProjectsModal addOnUserProject={addOnUserProject} />
    </div>
  );
};

export default AddOnUserProjects;
