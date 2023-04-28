import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import UserProjectsList from "../components/UserComponents/UserProjectsList";
import Logout from "../logout/Logout";

const Projects: React.FC = () => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );
  
    const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      {adminLoggedIn ? (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/userpanel">
            <button className="btn btn-success">User</button>
          </Link>
          <Link to="/projectpanel">
            <button className="btn btn-success">Project</button>
          </Link>
          <Logout />
        </div>
      ) : (<div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}><Logout/></div>)}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input onChange={(e: any)=>setFilterValue(e.target.value)}/>
      </div>
      {adminLoggedIn ? (
        <ProjectsList projectsControl={"homePageProject"} userId="" filterValue={filterValue}/>
      ) : (
        <>
          <UserProjectsList filterValue={filterValue}/>
        </>
      )}
    </div>
  );
};

export default Projects;
