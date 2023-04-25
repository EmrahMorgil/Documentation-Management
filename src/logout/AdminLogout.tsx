import React from 'react'
import { setAdminLoggedIn } from "../redux/users/usersSlice";
import { useDispatch } from 'react-redux';


const AdminLogout = () => {

    const dispatch = useDispatch();

  return (
    <button className="btn btn-danger" onClick={()=>dispatch(setAdminLoggedIn(false))}>Logout</button>
  )
}

export default AdminLogout