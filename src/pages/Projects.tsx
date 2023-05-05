import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import UserProjectsList from "../components/UserComponents/UserLoggedIn/UserProjectsList";
import Logout from "../logout/Logout";

const Projects: React.FC = () => {const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);
  
    const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFilterValue(e.target.value)}/>
      </div>
      {adminLoggedIn ? (
        <ProjectsList projectsControl={"adminLoggedInProjects"} userId="" filterValue={filterValue}/>
      ) : (
        <>
          <UserProjectsList filterValue={filterValue}/>
        </>
      )}
    </div>
  );
};

export default Projects;
