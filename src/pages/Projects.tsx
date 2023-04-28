import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import AdminLogout from "../logout/AdminLogout";
import ProjectsList from "../components/ProjectComponents/ProjectsList";

const Projects: React.FC = () => {
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );
  const activeUser = useSelector((state: RootState)=>state.users.activeUser);

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
        <input />
      </div>
      {adminLoggedIn ? (
        <ProjectsList projectsControl={"homePageProject"} userId="" />
      ) : (
        <>
        {activeUser.visibilityProjects.map((item: any)=>{
          return <li>{item.projectName}</li>
        })}
        </>
      )}
    </div>
  );
};

export default Projects;
