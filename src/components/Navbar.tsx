import React,{useState} from "react";
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { user } from "../types/Type";

const Navbar: React.FC = () => {
  const activeUser: user = useSelector(
    (state: RootState) => state.users.activeUser
  );

const [selected, setSelected] = useState("1")
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 mb-5">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className="collapse navbar-collapse d-flex" id="navbarTogglerDemo03">
          {activeUser.role === 1 && (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className={selected === '1' ? 'nav-item active' : 'nav-item'}>
              <Link className="navbar-brand" to={"/projects"} onClick={() => setSelected("1")}>
               Project Management
              </Link>
              </li>
              <li className={selected === '2' ? 'nav-item active' : 'nav-item'}>
                <Link className="nav-link" to={"/userpanel"} onClick={() => setSelected("2")}>
                  User Control Panel
                </Link>
              </li>
              <li className={selected === '3' ? 'nav-item active' : 'nav-item'} >
                <Link className="nav-link" to={"/projectpanel"} onClick={() => setSelected("3")}>
                  Project & Content Control Panel
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <button className="btnUserInfo" style={{cursor:"context-menu"}}>
            Welcome {activeUser.name}
          </button>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
