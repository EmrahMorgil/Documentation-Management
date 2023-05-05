import React from "react";
import { IOnUserProp, project, user } from "../../../types/Type";
import ProjectsList from "../ProjectsList";
import OnUserProjects from "./OnUserProjects";

const OnUserProjectContainer: React.FC<IOnUserProp> = ({ onUser }) => {
  
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{marginBottom: "50px"}}>
        <h3>Projects</h3>
      </div>
      
      <OnUserProjects onUser={onUser}/>

    </div>
  );
};

export default OnUserProjectContainer;
