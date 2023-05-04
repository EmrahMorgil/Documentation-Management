import React from "react";
import { IOnUserProp, project, user } from "../../../types/Type";
import ProjectsList from "../ProjectsList";
import OnUserProjects from "./OnUserProjects";

const AddOnUserProjectContainer: React.FC<IOnUserProp> = ({ onUser }) => {
  
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{marginBottom: "50px"}}>
        <h3>Add Project</h3>
      </div>

        <ProjectsList filterValue="" projectsControl={"addUserOnProject"} userId={onUser?.id}/>
      
        <h3>User's Projects</h3>

        <OnUserProjects onUser={onUser}/>
    </div>
  );
};

export default AddOnUserProjectContainer;
