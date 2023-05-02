import React, {useState} from "react";
import { user } from "../../types/Type";
import AddOnUserProjectsModal from "../../modals/AddOnUserProjectsModal";

const AddOnUserProjects = ({ item }: { item: user }) => {
 
  const [user, setUser] = useState<user>();

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-toggle="modal"
        data-target={`#${item.id}`+"on"}
        onClick={()=>setUser(item)}>
        Projects
      </button>
      <AddOnUserProjectsModal user={user} />
    </div>
  );
};

export default AddOnUserProjects;
