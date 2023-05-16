import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IOnUserProjectRemoveButton, project, user, visibilityProjects } from "../../../types/Type";
import { updateUsers } from "../../../services/userService";
import { setUsers } from "../../../redux/users/usersSlice";
import { setVisibilityProjects } from "../../../redux/projects/projectsSlice";
import { deleteVisibilityProjectsApi } from "../../../services/visibilityProjectServise";


const OnUserProjectRemoveButton: React.FC<IOnUserProjectRemoveButton> = ({userId, projectId}) => {
  const users = useSelector((state: RootState) => state.users.users);
  const visibilityProjects = useSelector((state:RootState)=>state.projects.visibilityProjects);
  const dispatch = useDispatch();


  const removeProjectAmount = ()=>{
    let updatedProjectAmount: user ={id:"", name: "", surname: "", password: "", role: 0, createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "", totalProject: 0};
    const newUserArray = users.map((user: user)=>{
      
      if(user.id===userId)
      {
        updatedProjectAmount = {...user};
        updatedProjectAmount.totalProject--;
        return updatedProjectAmount;
      }
      return user;
    });
    
    updateUsers(updatedProjectAmount.id, updatedProjectAmount);
    dispatch(setUsers(newUserArray));
  }


  const handleClick = () => {
    
    const newArr = visibilityProjects.filter((item: visibilityProjects, i:number)=>{
      if(item.id!==projectId)
      {
        return item;
      }
    });
    dispatch(setVisibilityProjects(newArr));
    //api    
    deleteVisibilityProjectsApi(projectId);
    
    setTimeout(removeProjectAmount, 100);
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleClick}
    >
      X
    </button>
  );
};

export default OnUserProjectRemoveButton;
