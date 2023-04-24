import React from "react";
import { user } from "../types/Type";
import axios from "axios";
import { setUsers } from "../redux/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { deleteUsers, updateUsers } from "../services/userService";


interface IItemProp{
  item: user;
}


const UsersList: React.FC<IItemProp> = ({item}) => {

  const activeUser = useSelector((state:RootState)=>state.users.activeUser.name);
  const [updateControl, setUpdateControl] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({id: item.id, name: item.name, surname: item.surname, password: item.password, role: item.role, visibilityProjects: item.visibilityProjects, createdPerson: item.createdPerson, createdDate: item.createdDate, updatedDate: item.updatedDate, updatedPerson: item.updatedPerson});

  const users = useSelector((state: RootState)=>state.users.users);
  const dispatch = useDispatch();

  const deleteUser = async(id: string)=>{


    deleteUsers(id);
    //api

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
    const setUpdatedUser = {...updatedUser};
    setUpdatedUser.updatedDate = nowDate;
    setUpdatedUser.updatedPerson = activeUser;

    const {id, name, surname, password, role, visibilityProjects, createdPerson, createdDate, updatedDate, updatedPerson} = setUpdatedUser;

    
    setUpdateControl(false);
    updateUsers(item.id, setUpdatedUser);
    //api

    const newArr = users.map((users: user)=>{
      if(users.id===item.id)
      {
        return {id, name, surname, password, role, visibilityProjects, createdPerson, createdDate, updatedDate, updatedPerson};
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
          <td style={{display: "flex", flexDirection: "column"}}>
            <button className="btn btn-success">Projects</button>
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
