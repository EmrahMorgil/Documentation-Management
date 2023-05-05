import React from "react";
import { IUserProp } from "../../../types/Type";
import UpdateUserModal from "../../../modals/UserModal/UpdateUserModal";

const UpdateUser: React.FC<IUserProp> = ({ user }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning w-100"
        data-toggle="modal"
        data-target={`#${user.id}`}
      >
        Detail
      </button>
      <UpdateUserModal user={user} />
    </div>
  );
};

export default UpdateUser;
