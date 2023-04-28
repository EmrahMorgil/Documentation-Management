import React, { useState } from 'react'
import { project, user } from '../../types/Type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setUsers } from '../../redux/users/usersSlice'
import { updateUsers } from '../../services/userService'

const AddOnUserProjects = ({item, userId}: {item: project, userId:string}) => {


  const users = useSelector((state: RootState)=>state.users.users);
  const dispatch = useDispatch();

  const [addButtonControl, setAddButtonControl] = useState(false);

  const handleClick = () =>{

    setAddButtonControl(true);


    const newArr = users.map((users: user)=>{
      if(users.id===userId)
      {
        const newUser = {...users};
        newUser.visibilityProjects = [...users.visibilityProjects, item]
        updateUsers(userId,newUser);
        //api
        return newUser;

      }
      return users;
    });
    // console.log(newArr);
    
    dispatch(setUsers(newArr));
    
  }


  return (
    <button className="btn btn-success" onClick={handleClick} disabled={addButtonControl}>Add</button>
  )
}

export default AddOnUserProjects