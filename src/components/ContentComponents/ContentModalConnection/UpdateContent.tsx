import React from "react";
import { content } from "../../../types/Type";
import UpdateContentModal from "../../../modals/ContentModal/UpdateContentModal";

interface IUpdateContent{
  content: content;
}

const UpdateContent: React.FC<IUpdateContent> = ({ content }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#${content.id}`}
      >
        Detail
      </button>
      <UpdateContentModal item={content} />
    </div>
  );
};

export default UpdateContent;
