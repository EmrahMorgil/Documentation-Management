import React from "react";
import { project, user } from "../../types/Type";
import ProjectsList from "../ProjectComponents/ProjectsList";
import RemoveOnUserProjectList from "../ProjectComponents/RemoveOnUserProjectList";

const AddOnUserProjectContainer = ({ user }: { user: user }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{marginBottom: "50px"}}>
        <h3>Add Project</h3>
      </div>

      
        <ProjectsList filterValue="" projectsControl={"addUserOnProject"} userId={user.id}/>
      
        <h3>User's Projects</h3>

        <RemoveOnUserProjectList user={user}/>
      
    </div>
  );
};

export default AddOnUserProjectContainer;
