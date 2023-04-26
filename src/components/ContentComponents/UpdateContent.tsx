import React from "react";
import { content } from "../../types/Type";
import UpdateContentModal from "../../modals/UpdateContentModal";

const UpdateContent = ({ item }: { item: content }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#${item.id}`}
      >
        Update
      </button>
      <UpdateContentModal item={item} />
    </div>
  );
};

export default UpdateContent;
