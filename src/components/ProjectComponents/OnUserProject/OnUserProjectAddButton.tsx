import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { project, user, visibilityProjects } from "../../../types/Type";
import { setUsers } from "../../../redux/users/usersSlice";
import { updateUsers } from "../../../services/userService";
import { addVisibilityProjectsApi } from "../../../services/visibilityProjectServise";
import { addVisibilityProjects } from "../../../redux/projects/projectsSlice";
import { nanoid } from "nanoid";
import {toast} from "react-toastify";


interface IOnUserProjectAddButton{
  userId?: string;
  project: project;
}

const OnUserProjectAddButton: React.FC<IOnUserProjectAddButton> = ({ userId, project }) => {
  
  const users = useSelector((state: RootState)=>state.users.users);
  const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);

  const dispatch = useDispatch();


  const addProjectAmount = async()=>{
    let updatedProjectAmount: user ={id:"", name: "", surname: "", password: "", role: 0, createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "", totalProject: 0};
    const newUserArray = users.map((user: user)=>{
      if(user.id===userId)
      {
        updatedProjectAmount = {...user};
        updatedProjectAmount.totalProject++;
        return updatedProjectAmount
      }
      return user;
    });

    await updateUsers(updatedProjectAmount.id, updatedProjectAmount);

    dispatch(setUsers(newUserArray));
  }

  const handleClick = () => {
    debugger;


    const newUser: user = users.find((user: user)=>{
      if(user.id===userId)
      {
        return user;
      }
    });

    console.log(newUser);
    

    const newArr = visibilityProjects.map((visibilityProject: visibilityProjects)=>{
      if(visibilityProject.projectId===project.id && visibilityProject.userId=== userId)
      {
        return false;
      }else{
        return true;
      }
    })

    if(newUser.role===project.visibilityRole)
    {
  
      if(!newArr.includes(false) || newArr.length ===0)
      {
      const {projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole } = project;
      const randomId = nanoid();
      const newItem = {id: randomId, projectName, createdDate, updatedDate, createdPerson, updatedPerson, totalContent, visibilityRole, visibility: true, userId, projectId: project.id};
      addVisibilityProjectsApi(newItem);
      dispatch(addVisibilityProjects(newItem));
      
      setTimeout(addProjectAmount, 100);
      toast.success("Project successfully added on user!");
    }else{
      toast.error("Already added on user!");
    };
  }else{
    toast.error("User role and project role do not match!");
  }
  };

  return (
    <button
      className="btn btn-success"
      onClick={handleClick}
    >
      Add
    </button>
  );
};

export default OnUserProjectAddButton;
