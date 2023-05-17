import React from "react";
import { user } from "../../types/Type";

const UserDetailUndoButton = ({
  user,
  updatedUser,
  setUpdatedUser,
  buttonActive,
}: {
  user: user;
  updatedUser: user;
  setUpdatedUser: any;
  buttonActive: boolean;
}) => {
  const undoUser = () => {
    setUpdatedUser({
      id: user.id,
      name: user.name,
      surname: user.surname,
      password: user.password,
      role: user.role,
      createdPerson: user.createdPerson,
      createdDate: user.createdDate,
      updatedDate: user.updatedDate,
      updatedPerson: user.updatedPerson,
      totalProject: user.totalProject,
    });
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={undoUser}
      disabled={buttonActive}
    >
      Undo Changes
    </button>
  );
};

export default UserDetailUndoButton;
