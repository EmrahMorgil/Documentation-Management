import React from "react";
import { user } from "../types/Type";
import axios from "axios";
import { setUsers } from "../redux/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";

const UsersList = ({ item }: { item: user }) => {

  const activeUser = useSelector((state:RootState)=>state.users.activeUser.name);
  const [updateControl, setUpdateControl] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({id: item.id, name: item.name, surname: item.surname, password: item.password, role: item.role, visibilityProjects: item.visibilityProjects});

  const users = useSelector((state: RootState)=>state.users.users);
  const dispatch = useDispatch();

  const deleteUser = async(id: number)=>{
    await axios.delete(`http://localhost:3004/users/${id}`);
    const newArr = users.filter((users: user)=>{
      if(users.id !== id)
      {
        return users;
      }
    });
    dispatch(setUsers(newArr));
  }

  const updateUser = async(item: user) =>{
    let nowDate = new Date().toString().substring(0, 24);
    const {createdDate, createdPerson} = item; 
    const updatedUser = {...item};
    updatedUser.updatedDate = nowDate;
    updatedUser.updatedPerson = createdPerson;

    const {id, name, surname, password, role, visibilityProjects} = updatedUser;
    

    setUpdateControl(false);
    await axios.put(`http://localhost:3004/users/${item.id}`, updatedUser);
    const newArr = users.map((users: user)=>{
      if(users.id===item.id)
      {
        debugger;
        
        return {id, name, surname, password, role, visibilityProjects, createdDate, createdPerson, updatedPerson: activeUser};
      }
        return users;
    })
    dispatch(setUsers(newArr))
    
  }

  const handleChange = (e: any) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };



  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name </th>
            <th>Surname</th>
            <th>Password </th>
            <th>Role</th>
            <th>Projects</th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Created Person</th>
            <th>Updated Person</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {updateControl ? 
          (<tbody>
            <input onChange={handleChange} placeholder="name" name="name" value={updatedUser.name}/>
            <input onChange={handleChange} placeholder="surname" name="surname" value={updatedUser.surname}/>
            <input onChange={handleChange} placeholder="password" name="password" value={updatedUser.password}/>
            <input onChange={handleChange} placeholder="role" name="role" value={updatedUser.role}/>
            <input onChange={handleChange} placeholder="project" name="project" value={updatedUser.visibilityProjects}/>
            <button className="btn btn-warning" onClick={()=>updateUser(item)}>Update</button>
            </tbody>)
          : 
          (<>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.surname}</td>
          <td>{item.password}</td>
          <td>{item.role}</td>
          <td>{item.visibilityProjects}</td>
          <td>{item.createdDate}</td>
          <td>{item.updatedDate}</td>
          <td>{item.createdPerson}</td>
          <td>{item.updatedPerson}</td>
          <td>
            <button className="btn btn-warning" onClick={()=>setUpdateControl(true)}>Update</button>
            <button className="btn btn-danger" onClick={()=>deleteUser(item.id)}>Delete</button>
          </td>
          </>
          )}
          
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
