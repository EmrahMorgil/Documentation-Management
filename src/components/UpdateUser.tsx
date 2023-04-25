import React from "react";
import { user } from "../types/Type";
import UpdateModal from "../modals/UpdateModal";

const UpdateUser = ({ item }: { item: user }) => {
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
      <UpdateModal item={item} />
    </div>
  );
};

export default UpdateUser;
