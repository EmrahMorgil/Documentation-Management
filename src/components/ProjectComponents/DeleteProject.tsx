import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { deleteProjects } from '../../services/projectService';
import { IProjectProp, project, user, visibilityProjects } from '../../types/Type';
import { setProjects, setVisibilityProjects } from '../../redux/projects/projectsSlice';
import { updateUsers } from '../../services/userService';
import { setUsers } from '../../redux/users/usersSlice';


const DeleteProject: React.FC<IProjectProp> = ({project}) => {

  let deletedItems: visibilityProjects = {id: "", projectName: "", createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "",  totalContent: 0, visibilityRole: 1, userId: "", projectId: ""};

  
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const visibilityProjects = useSelector((state: RootState)=>state.projects.visibilityProjects);
  const users = useSelector((state: RootState)=>state.users.users);



  const removeUserProjectAmount = ()=>{
    let updatedProjectAmount: user ={id:"", name: "", surname: "", password: "", role: 0, createdDate: "", updatedDate: "", createdPerson: "", updatedPerson: "", totalProject: 0};
    const newUserProjectAmount = users.map((user: user)=>{
      if(user.id===deletedItems.userId)
      {
        debugger;
        updatedProjectAmount = {...user};
        updatedProjectAmount.totalProject--;
        setTimeout(function(){updateUsers(updatedProjectAmount.id, updatedProjectAmount)}, 500);
        return updatedProjectAmount;
      }else{
        return user;
      }
    });
    
    dispatch(setUsers(newUserProjectAmount));
  }

  const removeVisibilityProjectItem = () =>{
   
    const newArray: visibilityProjects = visibilityProjects.filter((visibilityProject: visibilityProjects)=>{
      if(visibilityProject.projectId!==project.id)
      {
        return visibilityProject;
      }else{
        deletedItems = visibilityProject;
      }
    });
    dispatch(setVisibilityProjects(newArray));

    
    
  }


  const deletedProject = (item: project) => {
    deleteProjects(item.id);
    //api

    const newArr = projects.filter((projects: project) => {
      if (projects.id !== item.id) {
        return projects;
      }
    });
    dispatch(setProjects(newArr));


    //visibilityProjects'den silme işlemi
    setTimeout(removeVisibilityProjectItem, 500);

    // kullanıcının amount'unu azaltma işlemi
    setTimeout(removeUserProjectAmount, 750);

  };

  return (
    <button className="btn btn-danger dropdown-item" onClick={() => deletedProject(project)} style={{width: "100px"}}>
      Delete
    </button>
  )
}

export default DeleteProject