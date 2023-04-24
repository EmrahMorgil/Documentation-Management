import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Home from "./pages/Home";
import UserPanel from "./pages/UserPanel";
import ProjectPanel from "./pages/ProjectPanel";

function App() {

  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state:RootState)=>state.users.adminLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userpanel" element={<UserPanel />}/>
        <Route path="/projectpanel" element={<ProjectPanel />}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
