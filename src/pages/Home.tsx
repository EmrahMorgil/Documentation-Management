import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { setAdminLoggedIn } from "../redux/users/usersSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
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
          <button className="btn btn-danger" onClick={()=>dispatch(setAdminLoggedIn(!adminLoggedIn))}>Logout</button>
        </div>
      )}
      <h1>Projects</h1>
    </div>
  );
};

export default Home;
