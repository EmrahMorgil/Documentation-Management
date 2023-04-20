import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAsync } from '../redux/users/usersSlice';
import { RootState } from '../redux/store';
import { user } from '../types/Type';
import { setAdminLoggedIn } from '../redux/users/usersSlice';
import UsersList from '../components/UsersList';

const AdminPage = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();


  return (
    <div>
        <h3>Admin</h3>
        <Link to="/AddUser"><button className='btn btn-success'>Add User</button></Link>
        <button className='btn btn-danger' onClick={()=>dispatch(setAdminLoggedIn(false))}>Logout</button>
        {
            users.map((item: user, i: number)=>(
                <UsersList item={item} key={i}/>
            ))
        }
    </div>
  )
}

export default AdminPage