import React, {useState} from "react";
import { IUserProp, user } from "../../../types/Type";
import OnUserProjectsModal from "../../../modals/UserModal/OnUserProjectsModal";

const OnUserProjects: React.FC<IUserProp> = ({ user }) => {
 
  return (
    <div>
      <button
        type="button"
        className="btn btn-success w-100"
        data-toggle="modal"
        data-target={`#${user.id}`+"on"}
        >
        Projects
      </button>
      <OnUserProjectsModal user={user} />
    </div>
  );
};

export default OnUserProjects;
