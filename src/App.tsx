import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AdminPage from "./pages/AdminPage";
import AddUser from "./pages/AddUser";

function App() {

  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
  const adminLoggedIn = useSelector((state:RootState)=>state.users.adminLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AddUser" element={adminLoggedIn && <AddUser />} />
        <Route path="/UserPage" element={userLoggedIn && <UserPage />} />
        <Route path="/AdminPage" element={adminLoggedIn && <AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
