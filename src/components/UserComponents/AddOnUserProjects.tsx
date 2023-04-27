import React from "react";
import { user } from "../../types/Type";
import AddOnUserProjectsModal from "../../modals/AddOnUserProjectsModal";

const AddOnUserProjects = ({ item }: { item: user }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#${item.id}`+"on"}
      >
        Projects
      </button>
      <AddOnUserProjectsModal user={item} />
    </div>
  );
};

export default AddOnUserProjects;
