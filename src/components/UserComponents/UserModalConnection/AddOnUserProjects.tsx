import React, {useState} from "react";
import { IUserProp, user } from "../../../types/Type";
import AddOnUserProjectsModal from "../../../modals/AddOnUserProjectsModal";

const AddOnUserProjects: React.FC<IUserProp> = ({ user }) => {
 
  const [onUser, setOnUser] = useState<user>();

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#${user.id}`+"on"}
        onClick={()=>setOnUser(user)}>
        Projects
      </button>
      <AddOnUserProjectsModal onUser={onUser} />
    </div>
  );
};

export default AddOnUserProjects;
