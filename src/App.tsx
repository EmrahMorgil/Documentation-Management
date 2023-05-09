import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Projects from "./pages/Projects";
import UserPanel from "./pages/UserPanel";
import ProjectPanel from "./pages/ProjectPanel";
import Protected from "./components/Protected";
import ContentPanel from "./pages/ContentPanel";
import "./styles/App.css"
import Navbar from "./pages/Navbar";

function App() {

  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state:RootState)=>state.users.adminLoggedIn);
  const activeUser = useSelector((state: RootState)=>state.users.activeUser);

  return (
    <>
    {activeUser.id && <Navbar />} 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Protected loggedIn={adminLoggedIn || userLoggedIn}><Projects/></Protected>} />
        <Route path="/userpanel" element={<Protected loggedIn={adminLoggedIn}><UserPanel /></Protected>}/>
        <Route path="/projectpanel" element={<Protected loggedIn={adminLoggedIn}><ProjectPanel /></Protected>}/>
        <Route path="/contentpanel/:id" element={<Protected loggedIn={userLoggedIn || adminLoggedIn}><ContentPanel /></Protected>} />
      </Routes>
    </>
  );
}

export default App;
