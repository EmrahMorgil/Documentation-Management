import React, { useState } from 'react'
import { project, user } from '../../types/Type'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setUsers } from '../../redux/users/usersSlice'

const AddOnUserProjects = ({item, userId}: {item: project, userId:string}) => {

  const [addControl, setAddControl] = useState(false)


  const users = useSelector((state: RootState)=>state.users.users);
  const dispatch = useDispatch();

  const handleClick = () =>{
    setAddControl(true);

    const newArr = users.map((users: user)=>{
      if(users.id===userId)
      {
        const newUser = {...users};
        newUser.visibilityProjects = [...users.visibilityProjects, item]
        return newUser;

      }
      return users;
    });
    // console.log(newArr);
    
    dispatch(setUsers(newArr));
    
    
  }


  return (
    <button className="btn btn-success" onClick={handleClick} disabled={addControl}>Add</button>
  )
}

export default AddOnUserProjects