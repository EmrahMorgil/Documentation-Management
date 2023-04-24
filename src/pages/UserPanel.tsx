import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers} from '../redux/users/usersSlice';
import { RootState } from '../redux/store';
import { user } from '../types/Type';
import { setAdminLoggedIn } from '../redux/users/usersSlice';
import UsersList from '../components/UsersList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import nextId from "react-id-generator";

const UserPanel = () => {
    
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();

  // addUser


  const activeUser = useSelector((state: RootState)=>state.users.activeUser);
  const [newUser, setNewUser] = useState({ id: "", name: "", surname: "", password: "", role: 0, visibilityProjects: [], createdDate: "2023", updatedDate: "2023", createdPerson: "emrah", updatedPerson: "emrah" });


  const handleClick = async() => {
    let nowDate = new Date().toString().substring(0, 24);
 
    const updatedUser = {...newUser};
    updatedUser.id = nextId();    
    updatedUser.createdDate = nowDate;
    updatedUser.updatedDate = nowDate;
    updatedUser.createdPerson = activeUser.name;
    updatedUser.updatedPerson = activeUser.name;

   await axios.post("http://localhost:3004/users", updatedUser);
    dispatch(addUsers(updatedUser));
  };

  const handleChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

//-----------------


  return (
    <div>
      <div  style={{display: "flex",justifyContent: "center", margin: "30px"}}>
        <div><button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
  Add User
</button>

<div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      
      <div className="modal-body">
        






      <div style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
      <form style={{ width: "400px", textAlign: "center" }}>
        <h3>Add User</h3>
        <div className="form-outline mb-4">
          <input type="text" value={newUser.name} onChange={handleChange} name="name" className="form-control" placeholder="Name" />
        </div>

        <div className="form-outline mb-4">
          <input type="text" value={newUser.surname} onChange={handleChange} name="surname" className="form-control" placeholder="Surname" />
          
        </div>

        <div className="form-outline mb-4">
          <input type="password" value={newUser.password} onChange={handleChange} name="password" className="form-control" placeholder="Password" />
          
        </div>

        
      </form>
    </div>









      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleClick}>Add</button>
      </div>
    </div>
  </div>
</div></div>
        <Link to="/home"><button className='btn btn-danger'>Back</button></Link>
      </div>


        {
            users.map((item: user, i: number)=>(
                <UsersList item={item} key={i}/>
            ))
        }
    </div>
  )
}

export default UserPanel