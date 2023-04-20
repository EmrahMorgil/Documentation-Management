import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAsync } from '../redux/users/usersSlice';
import { RootState } from '../redux/store';
import { user } from '../types/Type';

const AdminPage = () => {
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();

  return (
    <div>
        <h3>Admin</h3>
        <Link to="/AddUser"><button className='btn btn-success'>Add User</button></Link>
        {
            users.map((item: user, i: number)=>(
                <ul>
                    <li>{item.name}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default AdminPage