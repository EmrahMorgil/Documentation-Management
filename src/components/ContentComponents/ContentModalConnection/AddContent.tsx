import React from "react";
import AddContentModal from "../../../modals/ContentModal/AddContentModal";

interface IAddContent{
  id: string;
}

const AddContent: React.FC<IAddContent> = ({ id }) => {
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
