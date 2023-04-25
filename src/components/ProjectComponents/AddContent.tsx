import React from "react";
import AddContentModal from "../../modals/AddContentModal";

const AddContent = ({ id }: { id: string }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#${id}`}
      >
        Add Content
      </button>
      <AddContentModal id={id} />
    </div>
  );
};

export default AddContent;
