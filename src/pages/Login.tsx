import React, {useEffect, useState} from "react";
import { Link, Navigate } from "react-router-dom";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../redux/users/usersSlice";
import { RootState } from "../redux/store";
import { user } from "../types/Type";
import { setUserLoggedIn } from "../redux/users/usersSlice";
import Users from "./Users";

const Login = () => {

  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({name: "", password: ""});
  const users = useSelector((state: RootState) => state.users.users);
  const userLoggedIn = useSelector((state: RootState)=>state.users.userLoggedIn);

  useEffect(() => {
    dispatch(getUsersAsync());

    console.log(new Date());
    
  }, [dispatch]);


  const handleClick = () => {
    const newArr = users.map((item: user) =>
        item.name === userLogin.name && item.password === userLogin.password
    );

    if (newArr.includes(true)) {
      alert("Kullanıcı Girişi Başarılı...");
      dispatch(setUserLoggedIn(true));
    } else {
      alert("Kullanıcı adı ya da şifre hatalı!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserLogin({...userLogin, [e.target.name]: e.target.value});
  }


  return (
    <>
    
    {userLoggedIn ? (<Users />) : 
    
    (<div style={{display: "flex", justifyContent: "center", marginTop: "150px"}}>
    <form style={{width: "400px", textAlign: "center"}}>
      <h3>Login</h3>
      <div className="form-outline mb-4">
        <input type="text" placeholder="Name" className="form-control" value={userLogin.name} onChange={handleChange} name="name" />
      </div>
      <div className="form-outline mb-4">
        <input type="password" placeholder="Password" className="form-control" value={userLogin.password} onChange={handleChange} name="password" />
      </div>
 
      <button type="button" onClick={handleClick} className="btn btn-primary btn-block mb-4">Sign in</button>
 
      <div className="text-center">
        <p>Not a member? <Link to="/register">Register</Link></p>
      </div>
    </form>
  </div>)}
    
    </>
  );
};

export default Login;
