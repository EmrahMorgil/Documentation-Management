import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {

  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={userLoggedIn && <Users />} />
      </Routes>
    </>
  );
}

export default App;
