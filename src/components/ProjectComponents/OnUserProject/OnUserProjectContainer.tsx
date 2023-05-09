import React from "react";
import { IUserProp, project, user } from "../../../types/Type";
import ProjectsList from "../ProjectsList";
import OnUserProjects from "./OnUserProjects";

const OnUserProjectContainer: React.FC<IUserProp> = ({ user }) => {
  
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{marginBottom: "50px"}}>
        <h3>Projects</h3>
      </div>
      
      <OnUserProjects user={user}/>

    </div>
  );
};

export default OnUserProjectContainer;
