import React, {useState} from "react";
import { IUserProp, user } from "../../../types/Type";
import OnUserProjectsModal from "../../../modals/UserModal/OnUserProjectsModal";

const OnUserProjects: React.FC<IUserProp> = ({ user }) => {
 
  const [onUser, setOnUser] = useState<user>();

  return (
    <div>
      <button
        type="button"
        className="btn btn-success w-100"
        data-toggle="modal"
        data-target={`#${user.id}`+"on"}
        onClick={()=>setOnUser(user)}>
        Projects
      </button>
      <OnUserProjectsModal onUser={onUser} />
    </div>
  );
};

export default OnUserProjects;
