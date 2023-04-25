import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { user } from "../types/Type";
import {setUserLoggedIn,setAdminLoggedIn,setActiveUser} from "../redux/users/usersSlice";

const LoginUser = () => {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({ name: "", password: "" });
  const users = useSelector((state: RootState) => state.users.users);

  const handleClick = () => {
    const newArr = users.map((item: user) => {
      if (
        item.name === userLogin.name &&
        item.password === userLogin.password
      ) {
        //switch case
        if (item.role === 0) {
          alert("Kullanıcı Girişi Başarılı...");
          dispatch(setUserLoggedIn(true));
        } else {
          alert("Admin Girişi Başarılı..");
          dispatch(setAdminLoggedIn(true));
        }
        dispatch(setActiveUser(item));
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
    >
      <form style={{ width: "400px", textAlign: "center" }}>
        <h3>Login</h3>
        <div className="form-outline mb-4">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={userLogin.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={userLogin.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
