import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleClick = () => {
    axios.post("http://localhost:3000/users", newUser).then((res) => {
      navigate("/");
    });
  };

  const handleChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
    >
      <form style={{ width: "400px" }}>
        <div className="form-outline mb-4">
          <input type="text" value={newUser.username} onChange={handleChange} name="username" className="form-control" placeholder="Name" />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password" value={newUser.password} onChange={handleChange} name="password" className="form-control" placeholder="Password" />
          
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
          Sign in
        </button>
        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
