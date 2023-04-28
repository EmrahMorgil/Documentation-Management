import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import AdminLogout from "../logout/AdminLogout";
import ProjectsList from "../components/ProjectComponents/ProjectsList";
import UserProjectsList from "../components/UserComponents/UserProjectsList";

const Projects: React.FC = () => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );
  
    const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      {adminLoggedIn && (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link to="/userpanel">
            <button className="btn btn-success">User</button>
          </Link>
          <Link to="/projectpanel">
            <button className="btn btn-success">Project</button>
          </Link>
          <AdminLogout />
        </div>
      )}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input onChange={(e: any)=>setFilterValue(e.target.value)}/>
      </div>
      {adminLoggedIn ? (
        <ProjectsList projectsControl={"homePageProject"} userId="" />
      ) : (
        <>
          <UserProjectsList filterValue={filterValue}/>
        </>
      )}
    </div>
  );
};

export default Projects;
