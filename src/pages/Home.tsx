import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import AdminLogout from "../logout/AdminLogout";


const Home: React.FC = () => {
  
  const adminLoggedIn = useSelector((state: RootState) => state.users.adminLoggedIn);


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
      <h1>Projects</h1>
    </div>
  );
};

export default Home;
