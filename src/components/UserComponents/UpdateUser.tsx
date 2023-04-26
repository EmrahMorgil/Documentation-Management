import React from "react";
import { user } from "../../types/Type";
import UpdateUserModal from "../../modals/UpdateUserModal";

const UpdateUser = ({ item }: { item: user }) => {
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
      <UpdateUserModal item={item} />
    </div>
  );
};

export default UpdateUser;
